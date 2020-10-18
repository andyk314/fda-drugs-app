class SearchProduct
  def initialize(search_query)
    @search_query = search_query
  end

  def products
    fetch_products.each { |product| add_conversion(product) }
  end

  private

  def add_conversion(product)
    brand_name, product_number = product.values_at('brand_name','product_number')
    product['conversions'] = load_conversions(brand_name, product_number)
  end

  def load_conversions(brand_name, product_number)
    SearchConversion.where(brand_name: brand_name, product_number: product_number).count
  end

  def fetch_products
    OpenFDAClient.new.products(search_query).dig('results', 0, 'products') || []
  end

  attr_accessor :search_query
end
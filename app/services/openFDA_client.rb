class OpenFDAClient
  include HTTParty

  base_uri 'https://api.fda.gov'

  def initialize
  end

  def products(product_name, search_options = {})
    search_options[:search] ||= { "products.brand_name" => product_name }

    self.class.get("/drug/drugsfda.json", search_options)
  end
end

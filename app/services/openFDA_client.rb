class OpenFDAClient
  include HTTParty

  base_uri 'https://api.fda.gov'

  def products(product_name, search_options = {})
    query = { search: { "products.brand_name" => product_name } }
    HTTParty.get("https://api.fda.gov/drug/drugsfda.json?search=products.brand_name=#{product_name}")
  end
end

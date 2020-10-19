# frozen_string_literal: true

require('rails_helper')

RSpec.describe(ProductsController, type: :request) do
  describe '#index' do
    let(:api) { instance_double('OpenFDAClient') }
    let(:search_data) { File.read(Rails.root.join('spec', 'fixtures', 'search_response.json')) }
    let(:create_search_conversion) do
      SearchConversion.create({
        brand_name: 'IBUPROFEN',
        product_number: '001',
        access_date: Time.now,
        ip_address: '127.0.0.1'
      })
    end

    before do
      allow(OpenFDAClient).to receive(:new).and_return(api)
      allow(api).to receive(:products).and_return(JSON.parse(search_data))
      create_search_conversion
    end

    it 'returns the products' do
      get('/products', params: { q: 'ibuprofen' })
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to eq(expected_result)
    end

    it 'returns the products with conversions' do
      get('/products', params: { q: 'ibuprofen' })
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body)).to eq(expected_result)
    end

    skip 'it returns an error' do
    end
  end
end

def expected_result
  [
    {
      "active_ingredients"=>[{"name"=>"IBUPROFEN", "strength"=>"400MG"}],
      "brand_name"=>"IBUPROFEN",
      "dosage_form"=>"TABLET",
      "marketing_status"=>"Prescription",
      "product_number"=>"001",
      "reference_drug"=>"No",
      "reference_standard"=>"No",
      "route"=>"ORAL",
      "te_code"=>"AB",
      "conversions"=>1
    },
    {
      "active_ingredients"=>[{"name"=>"IBUPROFEN", "strength"=>"800MG"}],
      "brand_name"=>"IBUPROFEN",
      "dosage_form"=>"TABLET",
      "marketing_status"=>"Prescription",
      "product_number"=>"003",
      "reference_drug"=>"No",
      "reference_standard"=>"No",
      "route"=>"ORAL",
      "te_code"=>"AB",
      "conversions"=>0
    },
    {
      "active_ingredients"=>[{"name"=>"IBUPROFEN", "strength"=>"600MG"}],
      "brand_name"=>"IBUPROFEN",
      "dosage_form"=>"TABLET",
      "marketing_status"=>"Prescription",
      "product_number"=>"002",
      "reference_drug"=>"No",
      "reference_standard"=>"No",
      "route"=>"ORAL",
      "te_code"=>"AB",
      "conversions"=>0
    }
    ]
end

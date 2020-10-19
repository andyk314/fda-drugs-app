# frozen_string_literal: true

require('rails_helper')

RSpec.describe(SearchConversionsController, type: :request) do
  describe '#create' do
    params = {
      search_conversion: {
        brand_name: 'Cool Brand',
        product_number: '001'
      }
    }

    it 'creates a new search conversion' do
      post('/search_conversions', params: params)
      expect(SearchConversion.count).to eq(1)
    end
  end
end

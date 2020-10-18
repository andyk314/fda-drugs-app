class SearchConversionsController < ApplicationController
  def create
    SearchConversion.create!(
      search_conversion_params.merge({
        ip_address: request.remote_ip.to_s,
        access_date: Time.zone.now
      })
    )
  end

  private
    def search_conversion_params
      params.require(:search_conversion).permit(:brand_name, :product_number)
    end
end

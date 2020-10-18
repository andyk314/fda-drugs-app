class ProductsController < ApplicationController
  def index
    products = SearchProduct.new(params[:q]).products
    render json: products
  end

  def show
  end
end

class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [ :show, :update, :destroy]

  def index
    render json: @department.items
  end

  def show
    render json: @item
  end

  def create
    @item = @department.items.new(item_params)
  end

  def update
  end

  def destroy
  end

  private
  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price, :department_id)
  end
end

class SamplesController < ApplicationController
  def index
    render status: 200, json: Sample.all
  end
end

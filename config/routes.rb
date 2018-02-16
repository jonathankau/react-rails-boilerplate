Rails.application.routes.draw do
  scope '/api' do
    get :samples, to: 'samples#index'
  end
end

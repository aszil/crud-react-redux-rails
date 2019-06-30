Rails.application.routes.draw do
  root to: 'products#index'
  post '/products', to: 'products#store'
  get '/edit/:id', to: 'products#edit'
  put '/products/:id', to: 'products#update'
  delete '/products/:id', to: 'products#destroy'
end

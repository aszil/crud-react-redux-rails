Rails.application.routes.draw do
  root to: 'products#index'
  post '/products', to: 'products#store'
  get '/new', to: 'products#new'
  get '/edit/:id', to: 'products#edit', as: 'edit'
  put '/products/:id', to: 'products#update'
  delete '/products/:id', to: 'products#destroy', as: 'destroy'
end

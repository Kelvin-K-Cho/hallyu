Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :stations, except: [:new, :edit]
    end
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:index, :show]
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :dislikes, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end

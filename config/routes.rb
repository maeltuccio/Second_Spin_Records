Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  resources :discs, except: [:destroy] do
    resources :wishlists, only: [:create]
    resources :collections, only: [:create]
    resources :comments, only: [:create]
    member do
      patch :toggle_sell
    end
    collection do
      get :reco
    end
  end

  resources :wishlists, only: [:show]
end

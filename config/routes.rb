Rails.application.routes.draw do
  devise_for :users
  root to: "discs#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  resources :discs do
    resources :wishlists, only: [:create]
    resources :collections, only: [:create]
    resources :comments, only: [:create]
    member do
      patch :toggle_sell
    end
    member do
      get :reco
    end
  end
  get 'dashboard', to: 'dashboards#index'
  get "users/:id/get_chat_with_owner", to: "chatrooms#chat_with_owner", as: :chat_with_owner

  resources :wishlists, only: [:index, :destroy]
  resources :collections, only: [:index, :destroy]

  resources :chatrooms, only: [:index, :show, :create,:destroy] do
    resources :messages, only: [:create]
  end
end

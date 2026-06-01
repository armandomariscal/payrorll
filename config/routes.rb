Rails.application.routes.draw do
  resources :departments
  get "/login", to: "home#index"

  devise_for :users, controllers: {
    sessions: "users/sessions"
  }, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout"
  }

  resources :employees do
    collection do
      get :webix
      get :kept
    end
  end

  namespace :api do
    resources :employees
  end

  root "home#index"

  get "up" => "rails/health#show", as: :rails_health_check
end

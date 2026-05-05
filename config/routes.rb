Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "users/sessions"
  }, path: "", path_names: {
    sign_in: "login",
    sign_out: "logout"
  }

  resources :employees do
    collection do
      get :webix
    end
  end

  root "home#index"

  get "up" => "rails/health#show", as: :rails_health_check
end

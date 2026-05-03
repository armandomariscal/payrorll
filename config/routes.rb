Rails.application.routes.draw do
  resources :employees do
    collection do
      get :webix
    end
  end

  root "home#index"

  get "up" => "rails/health#show", as: :rails_health_check
end

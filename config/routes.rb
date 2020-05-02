Rails.application.routes.draw do
  devise_for :users
  root 'dashboard#index'

  namespace :api do
    resources :patient_cases
  end
end

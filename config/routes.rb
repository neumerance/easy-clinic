Rails.application.routes.draw do
  devise_for :users
  root 'dashboard#index'

  namespace :api do
    resources :patient_cases do
      resources :patient_case_conversations
    end
  end
end

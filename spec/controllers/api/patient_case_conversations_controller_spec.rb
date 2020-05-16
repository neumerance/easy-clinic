require 'rails_helper'

describe Api::PatientCaseConversationsController do
  let(:current_user) { create(:doctor) }

  before do
    sign_in current_user
  end

  subject do
    JSON.parse(response.body).dig('data')
  end

  describe '#index' do
    let(:patient_case) { create(:patient_case, :with_conversation, conversation_count: 25, doctor: current_user) }
    let(:conversations) do
      patient_case.conversations
    end
    let(:params) do
      {
        patient_case_id: patient_case.id
      }
    end

    before do
      get :index, params: params
    end
    
    it { is_expected.to eq serialized_conversations[0..14] }
  end
end

def serialized_conversations
  ConversationSerializer.new(conversations, {
    params: {
      include_assoc: true
    }
  }).serializable_hash.dig(:data).as_json
end

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

  describe '#create' do
    let(:patient_case) { create(:patient_case, doctor: current_user) }
    let(:patient) { patient_case.patient }

    let(:params) do
      {
        patient_case_id: patient_case.id,
        conversation: {
          content: FFaker::Lorem.sentence,
          file_uploads: [
            fixture_file_upload(Rails.root.join('spec/fixtures/images/400x600.jpg'), 'image/jpg'),
            fixture_file_upload(Rails.root.join('spec/fixtures/images/400x600.jpg'), 'image/jpg')
          ]
        }
      }
    end
    let(:conversations) { Conversation.last }

    it 'creates conversation with attachments' do
      post :create, params: params
      expect(subject.dig('attributes', 'content')).to eq params.dig(:conversation, :content)
      expect(subject.dig('attributes', 'attachments').size).to eq params.dig(:conversation, :file_uploads).size
    end

    it 'broadcast conversation on create' do
      expect { post :create, params: params }.to have_broadcasted_to(
        "#{PatientCaseConversationsChannel::STREAM_AFFIX}_#{patient_case.id}"
      )
    end
  end
end

def serialized_conversations
  ConversationSerializer.new(conversations, {
    params: {
      include_assoc: true
    }
  }).serializable_hash.dig(:data).as_json
end

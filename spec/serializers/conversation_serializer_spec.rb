require 'rails_helper'

describe ConversationSerializer do
  let(:patient) { create(:patient) }
  let(:patient_case) { create(:patient_case) }
  let(:conversation) do create(
    :conversation, :with_attachments,
    message_for: patient_case, user: patient.user
  )
  end

  subject do
    described_class.new(conversation, {
      params: {
        include_assoc: true,
        current_user: patient.user
      }
    }).serializable_hash.dig(:data, :attributes)
  end

  context 'serializables' do
    it 'has attributes' do
      expect(subject.dig(:you)).to be_truthy
      expect(subject.dig(:content)).to eq conversation.content
      expect(subject.dig(:status)).to eq conversation.status
      expect(subject.dig(:owner, :name)).to eq patient.profile.name
      expect(subject.dig(:owner, :photo)).not_to be_empty
    end
  end
end

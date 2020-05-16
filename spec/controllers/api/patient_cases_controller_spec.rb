require 'rails_helper'

describe Api::PatientCasesController do
  describe 'Doctor' do
    let(:current_user) { create(:doctor) }

    subject { JSON.parse(response.body).dig('data') }

    before do
      sign_in current_user
    end

    describe '#index' do
      let(:patient_cases) { create_list(:patient_case, 2, doctor: doctor, status: status) }
      let(:params) do
        {
          status: status
        }
      end

      before do
        patient_cases
        get :index, params: params
      end

      context 'open cases' do
        let(:doctor) { nil }
        let(:status) { :open }
        let(:include_assoc) { false }
        let(:expectation) { serialized_resources }

        it { is_expected.to eq expectation }
      end

      context 'taken cases' do
        let(:doctor) { current_user }
        let(:status) { :taken }
        let(:include_assoc) { false }
        let(:expectation) { serialized_resources }

        it { is_expected.to eq expectation }
        it 'has taken patient cases' do
          expect(subject.all? { |pc|  pc.dig('attributes', 'status') == 'taken' }).to be_truthy
        end
      end

      context 'resolved cases' do
        let(:doctor) { current_user }
        let(:status) { :resolved }
        let(:include_assoc) { false }
        let(:expectation) { serialized_resources }
        let(:patient_cases) do
          cases = create_list(:patient_case, 2, doctor: doctor)
          cases.each { |c| c.update(status: status) }
          cases
        end

        it { is_expected.to eq expectation }
        it 'has resolved patient cases' do
          expect(subject.all? { |pc|  pc.dig('attributes', 'status') == 'resolved' }).to be_truthy
        end
      end
    end

    describe '#create' do
      let(:patient) { create(:patient) }
      let(:patient_cases) { current_user.patient_cases.last }
      let(:include_assoc) { true }
      let(:expectation) { serialized_resources.dig('data', 'attributes', 'id') }
      let(:params) do
        {
          patient_case: {
            title: FFaker::Lorem.sentence,
            patient_id: patient.id
          }
        }
      end

      before do
        post :create, params: params
      end

      it 'succeed' do
        expect(response).to have_http_status(:success)
        expect(subject.dig('data', 'attributes', 'id')).to eq expectation
      end
    end
  end
end

def serialized_resources
  PatientCaseSerializer.new(
    patient_cases, {
      params: {
        current_user: current_user,
        include_assoc: include_assoc
      }
    }
  ).serializable_hash.dig(:data).as_json
end

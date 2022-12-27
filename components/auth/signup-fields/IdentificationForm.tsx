import { IForm } from './SignUpFields';

const IdentificationForm: React.FC<IForm> = () => {
  return (
    <>
      <h2 className="welcome-title">{"Welcome - let's get started"}</h2>
      <p className="fields-desc mb-12">
        Tell us about your basic details and account requirements
      </p>
      <div className="input-field account-field">
        <p className="label-text mb-5">
          Whom would you like to open an account ?
          <span className="text-purple"> *</span>
        </p>
        <div className="account-radio-buttons">
          <div className="account-type">
            <input type="radio" id="account-self" name="account-type" />
            <label htmlFor="account-self">Self</label>
          </div>
          <div className="account-type">
            <input type="radio" id="account-business" name="account-type" />
            <label htmlFor="account-business">Business</label>
          </div>
          <div className="account-type">
            <input type="radio" id="account-family" name="account-type" />
            <label htmlFor="account-family">Family</label>
          </div>
        </div>
      </div>
      <div className="input-field mb-7">
        <label htmlFor="field-number" className="label-text">
          Your Mobile Number
          <span className="text-purple"> *</span>
        </label>
        <input
          type="tel"
          id="field-number"
          name="field-number"
          placeholder={'Enter mobile number'}
          className="auth-input"
        />
      </div>
      <div className="input-field mb-6">
        <label htmlFor="field-email" className="label-text">
          Your Email Address
          <span className="text-purple"> *</span>
        </label>
        <input
          type="email"
          id="field-email"
          name="field-email"
          placeholder={'Enter email address'}
          className="auth-input"
        />
      </div>
    </>
  );
};

export default IdentificationForm;

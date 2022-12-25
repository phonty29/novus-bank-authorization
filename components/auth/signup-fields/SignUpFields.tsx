import Link from "next/link";
import AuthMessages from "../../../enums/AuthMessages";
import SignUpStages from "../../../enums/SignUpStages";

export interface ISignUpFields {
  currentField: string;
}
interface IForm extends React.ComponentPropsWithoutRef<'div'> {}

const SignUpFields: React.FC<ISignUpFields> = ({ currentField }) => {
  return (
    <div className="sign-up-fields">
      <div className="fields-form">
        {currentField === SignUpStages.IDENTIFICATION && (<IdentificationForm />)}
        {currentField === SignUpStages.VERIFICATION && (<VerificationForm />)}
      </div>
      <div className="fields-help">
        <div className="help-item mb-5">
          <h3 className="help-item-title">Benefits of Online Banking</h3>
          <p>Check recent account activity and access account balances from one convenient location.</p>
          <p>Transfer funds between your Novus accounts and accounts at other banks.</p>
          <p>Go paperless with up to 25 months of deposit statements.</p>
        </div>
        <div className="help-more-link mb-11">
          <Link href={"/"}>more</Link>
        </div>
        <div className="help-item">
          <h3 className="help-item-title">Need Assistance?</h3>
          <p>For Online Banking technical assistance, Bill Pay support, or general account inquiries</p>
          <p>Call 1-877-768-2265.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpFields;

const IdentificationForm: React.FC<IForm> = () => {
  return (
      <>
        <h2 className="welcome-title">{"Welcome - let's get started"}</h2>
        <p className="fields-desc">Tell us about your basic details and account requirements</p>
        <div className="input-field account-field">
          <p className="label-text mb-5">
            Whom would you like to open an account ?
            <span className="text-purple"> *</span>
          </p>
          <div className="account-radio-buttons">
            <div className="account-type" >
              <input type="radio" id="account-self" name="account-type" />
              <label htmlFor="account-self">Self</label>
            </div>
            <div className="account-type" >
              <input type="radio" id="account-business" name="account-type" />
              <label htmlFor="account-business">Business</label>
            </div>
            <div className="account-type" >
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
        <p className="alert-message text-start">{AuthMessages.SIGN_IN_EMPTY_FIELD}</p>
      </>
  );
}

const VerificationForm: React.FC<IForm> = () => {
  return (
      <>
        <p className="fields-desc">Select an option</p>
        <div className="input-field mb-7">
          <label htmlFor="field-photo" className="label-text">
            Take a selfie
            <span className="text-purple"> *</span>
          </label>
          <input
            type="file"
            id="field-photo"
            name="field-photo"
            className="photo-input"
          />
          <div className="photo-input-frame">
            <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none" >
              <circle cx="38" cy="38" r="38" fill="url(#paint0_linear_627_32)" />
              <defs>
                <linearGradient id="paint0_linear_627_32" x1="38" y1="0" x2="38" y2="76" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B34A"/>
                  <stop offset="1" stopColor="#076F32"/>
                </linearGradient>
              </defs>
              <image href="/photo-img.svg" x="50%" y="50%" transform="translate(-18.5,-16.5)"/>
            </svg>
          </div>
        </div>
        <p className="alert-message text-start">{AuthMessages.SIGN_IN_EMPTY_FIELD}</p>
      </>
  );
}
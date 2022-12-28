import { useState } from 'react';
import { IForm } from './SignUpFields';

const SuccessForm: React.FC<IForm> = () => {
  const [isWhatsappCheckboxChecked, setIsWhatsappCheckboxChecked] =
    useState<boolean>(false);
  const [isEmailCheckboxChecked, setIsEmailCheckboxChecked] =
    useState<boolean>(false);
  return (
    <>
      <p className="fields-desc mb-5">
        Tell us about your basic details and account requirements
      </p>
      <div className="input-field mb-5">
        <label htmlFor="field-username" className="label-text">
          New Username
          <span className="text-purple"> *</span>
        </label>
        <input
          type="text"
          id="field-username"
          name="field-username"
          placeholder={'Enter username'}
          className="auth-input"
        />
      </div>
      <div className="input-field mb-5">
        <label htmlFor="field-password" className="label-text">
          New Password
          <span className="text-purple"> *</span>
        </label>
        <input
          type="password"
          id="field-password"
          name="field-password"
          placeholder={'Enter password'}
          className="auth-input"
        />
      </div>
      <div className="input-field mb-5">
        <label htmlFor="field-verify-password" className="label-text">
          Verify new password
          <span className="text-purple"> *</span>
        </label>
        <input
          type="password"
          id="field-verify-password"
          name="field-verify-password"
          placeholder={'Repeat new password'}
          className="auth-input"
        />
      </div>
      <div className="checkbox-field mb-7">
        <input
          type="checkbox"
          id="whatsapp-alerts"
          name="whatsapp-alerts"
          className="auth-checkbox"
          checked={isWhatsappCheckboxChecked}
        />
        <span
          className="checkmark"
          onClick={() => {
            setIsWhatsappCheckboxChecked((prev) => !prev);
          }}
        ></span>
        <label className="checkbox-label-text">
          I agree to enable whatsApp alerts.
        </label>
      </div>
      <div className="checkbox-field mb-12">
        <input
          type="checkbox"
          id="email-alerts"
          name="email-alerts"
          className="auth-checkbox"
          checked={isEmailCheckboxChecked}
        />
        <span
          className="checkmark"
          onClick={() => {
            setIsEmailCheckboxChecked((prev) => !prev);
          }}
        ></span>
        <label className="checkbox-label-text">
          I agree to enable promotion emails from Novus Bank and partners.
        </label>
      </div>
    </>
  );
};

export default SuccessForm;

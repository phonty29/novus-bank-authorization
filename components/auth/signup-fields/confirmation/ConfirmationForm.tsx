import { useRef, useState } from 'react';
import ConfirmationMethod from '../../../../lib/enums/ConfirmationMethod';
import { useFieldsContext } from '../../../../state/auth/FieldsContext';
import { useSignUpContext } from '../../../../state/auth/SignUpContext';
import IconNotification from '../../../icons/IconNotification';

const buttonTextBeforeSend = "confirmation";
const buttonTextAfterSend = "again";

const ConfirmationForm: React.FC = () => {
  const { confirmationState, setConfirmationState } = useFieldsContext();
  const { userData } = useSignUpContext();
  const [buttonText, setButtonText] = useState<string>(buttonTextBeforeSend);
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const sendConfirmation = () => {
    setButtonText(buttonTextAfterSend);
    setDisabled(true);
    alertUserInfo();
  }
  const alertUserInfo = () => {
    alert(`SEND INFO: ${JSON.stringify(userData)} WITH ${confirmationState.confirmationMethod} METHOD`);
  };

  return (
    <div className='confirmation-fields'>
      <div className="input-field">
        <label htmlFor="confirmation-method" className="label-text">
          Choose a confirmation method
          <span className="text-purple"> *</span>
        </label>
        <select
          name="confirmation-method"
          id="confirmation-method"
          className="auth-input"
          ref={selectRef}
          defaultValue={ConfirmationMethod.PHONE}
          onChange={(e) => {setConfirmationState({confirmationMethod: e.target.value as ConfirmationMethod})}}
          disabled={isDisabled}
        >
          <option value={ConfirmationMethod.PHONE}>
            Send code to phone number
          </option>
          <option value={ConfirmationMethod.EMAIL}>Send a link to email</option>
        </select>
      </div>
      <div
        className={`green-btn verify-button`}
        onClick={sendConfirmation}
      >
        Send {buttonText}
      </div>
      {confirmationState.confirmationMethod === ConfirmationMethod.PHONE && (
        <div className="input-field">
          <label htmlFor="six-digit-code" className="label-text">
            Write the six-digit code that we sent to the phone number
            <span className="text-purple"> *</span>
          </label>
          <input
            type="number"
            maxLength={6}
            id="six-digit-code"
            name="six-digit-code"
            className="auth-input"
            required
          />
        </div>
      )}
      {confirmationState.confirmationMethod === ConfirmationMethod.EMAIL && (
        <div className="verify-info">
          <p className="fields-desc mb-5 mr-3">
            We send a link to your email address. Please check and click on the
            link
          </p>
          <IconNotification />
        </div>
      )}
    </div>
  );
};

export default ConfirmationForm;

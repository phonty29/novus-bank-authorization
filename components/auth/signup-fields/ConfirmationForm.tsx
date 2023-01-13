import { useRef, useState } from 'react';
import ConfirmationMethod from '../../../lib/enums/ConfirmationMethod';
import { useFieldsContext } from '../../../state/auth/FieldsContext';
import IconNotification from '../../icons/IconNotification';

const ConfirmationForm: React.FC = () => {
  const { confirmationState, setConfirmationState } = useFieldsContext();
  const [buttonText, setButtonText] = useState<string>('a verification');
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const sendVerification = () => {
    if (selectRef.current) {
      setConfirmationState({
        ...confirmationState,
        confirmationMethod:
          selectRef.current.value === ConfirmationMethod.PHONE
            ? ConfirmationMethod.PHONE
            : ConfirmationMethod.EMAIL,
      });
      setButtonText('again');
    }
  };

  return (
    <>
      <div className="input-field">
        <label htmlFor="verification-method" className="label-text">
          Choose a verification method
          <span className="text-purple"> *</span>
        </label>
        <select
          name="verification-method"
          id="verification-method"
          className="auth-input"
          ref={selectRef}
          defaultValue={ConfirmationMethod.PHONE}
          disabled={
            confirmationState.confirmationMethod !=
            ConfirmationMethod.BEFORE_CHOICE
          }
        >
          <option value={ConfirmationMethod.PHONE}>
            Send code to phone number
          </option>
          <option value={ConfirmationMethod.EMAIL}>Send a link to email</option>
        </select>
      </div>
      <div
        className={`green-btn verify-button`}
        onClick={sendVerification}
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
    </>
  );
};

export default ConfirmationForm;

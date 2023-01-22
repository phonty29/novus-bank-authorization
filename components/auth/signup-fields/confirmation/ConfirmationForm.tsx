import { useState } from 'react';
import AuthMessages from '../../../../lib/enums/AlertMessages';
import ApiRoutes from '../../../../lib/enums/ApiRoutes';
import { SendActivationResponseData } from '../../../../pages/api/sign-up/send-activation';
import { useAuthContext } from '../../../../state/auth/AuthContext';
import { useFieldsContext } from '../../../../state/auth/FieldsContext';
import { useSignUpContext } from '../../../../state/auth/SignUpContext';
import IconNotification from '../../../icons/IconNotification';

const buttonTextBeforeSend = "confirmation";
const buttonTextAfterSend = "again";

const ConfirmationForm: React.FC = () => {
  const { isActivationLinkSend, setIsActivationLinkSend } = useFieldsContext();
  const { userData } = useSignUpContext();
  const [buttonText, setButtonText] = useState<string>(buttonTextBeforeSend);
  const {setAlertMessage} = useAuthContext();
  const sendConfirmation = async () => {
    setButtonText(buttonTextAfterSend);
    setIsActivationLinkSend(true);
    const jsonData = JSON.stringify(userData);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    };
    const response = await fetch(ApiRoutes.SEND_ACTIVATION, options);
    const {isSendActivationSuccessfull, message}: SendActivationResponseData = await response.json();
    if (!isSendActivationSuccessfull) setAlertMessage(message as AuthMessages);
  }

  return (
    <div className='confirmation-fields'>
      <div className="input-field">
        <label htmlFor="confirmation-method" className="label-text">
          Send a link to email
          <span className="text-purple"> *</span>
        </label>
      </div>
      <div
        className={`green-btn verify-button`}
        onClick={sendConfirmation}
      >
        Send {buttonText}
      </div>
      {isActivationLinkSend && (
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

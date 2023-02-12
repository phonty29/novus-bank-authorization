import IconNotification from '@components/icons/IconNotification';
import { ISendActivationResponseData } from '@pages/api/registration/send-activation';
import { useAuthContext } from '@state/auth/AuthContext';
import { useFieldsContext } from '@state/auth/FieldsContext';
import { useSignUpContext } from '@state/auth/SignUpContext';
import AuthMessages from '@utils/enums/AlertMessages';
import ApiRoutes from '@utils/enums/ApiRoutes';
import ClientService from '@utils/helpers/fetch-utils';
import { useState } from 'react';

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
    const {isSendActivationSuccessfull, message}: ISendActivationResponseData = 
            await ClientService.post(userData, ApiRoutes.SEND_ACTIVATION);
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

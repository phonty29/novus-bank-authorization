import { useFieldsContext } from '../../../state/auth/FieldsContext';

const SuccessForm: React.FC = () => {
  const {successState, setSuccessState} = useFieldsContext();
  const setEmailNotification = (): void => {
    setSuccessState({...successState, emailNotification: !successState.emailNotification});
  }

  return (
    <>
      <p className="fields-desc">
        Tell us about your basic details and account requirements
      </p>
      <div className="input-field">
        <label htmlFor="field-username" className="label-text">
          New Username
          <span className="text-purple"> *</span>
        </label>
        <input
          type="text"
          id="field-username"
          name="field-username"
          placeholder={'Enter username'}
          value={successState.userFields.username}
          onChange={(e) => {
            setSuccessState({...successState, userFields: {...successState.userFields, username: e.target.value}})
          }}
          className="auth-input"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="field-password" className="label-text">
          New Password
          <span className="text-purple"> *</span>
        </label>
        <input
          type="password"
          id="field-password"
          name="field-password"
          placeholder={'Enter password'}
          value={successState.userFields.password}
          onChange={(e) => {
            setSuccessState({...successState, userFields: {...successState.userFields, password: e.target.value}})
          }}
          className="auth-input"
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="field-verify-password" className="label-text">
          Verify new password
          <span className="text-purple"> *</span>
        </label>
        <input
          type="password"
          id="field-verify-password"
          name="field-verify-password"
          placeholder={'Repeat new password'}
          value={successState.repeatedPassword}
          onChange={(e) => {
            setSuccessState({...successState, repeatedPassword: e.target.value})
          }}
          className="auth-input"
          required
        />
      </div>
      <div className="checkbox-field items-mb">
        <input
          type="checkbox"
          id="email-alerts"
          name="email-alerts"
          className="auth-checkbox"
          readOnly
          checked={successState.emailNotification}
        />
        <span
          className="checkmark"
          onClick={setEmailNotification}
        ></span>
        <label className="checkbox-label-text" onClick={setEmailNotification}>
          I agree to enable promotion emails from Novus Bank and partners.
        </label>
      </div>
    </>
  );
};

export default SuccessForm;

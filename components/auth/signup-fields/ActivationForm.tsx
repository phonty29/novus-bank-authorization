import AccountType from '../../../lib/enums/AccountType';
import { useFieldsContext } from '../../../state/auth/FieldsContext';

const ActivationForm: React.FC = () => {
  const { activationState, setActivationState } = useFieldsContext();
  const isAccountTypeSelected = (type: AccountType) =>
    type === activationState.accountType;
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>): void =>
  setActivationState({
      ...activationState,
      accountType: event.currentTarget.value,
    });

  return (
    <>
      <h2 className="welcome-title">{"Welcome - let's get started"}</h2>
      <p className="fields-desc">
        Tell us about your basic details and account requirements
      </p>
      <div className="input-field account-field">
        <p className="account-label">
          Whom would you like to open an account ?
          <span className="text-purple"> *</span>
        </p>
        <div className="account-radio-buttons">
          <div className="account-type">
            <input
              type="radio"
              id="account-self"
              name="account-type"
              value={AccountType.SELF}
              checked={isAccountTypeSelected(AccountType.SELF)}
              onChange={handleClick}
            />
            <label htmlFor="account-self account-type-label">Self</label>
          </div>
          <div className="account-type">
            <input
              type="radio"
              id="account-business"
              name="account-type"
              value={AccountType.BUSINESS}
              checked={isAccountTypeSelected(AccountType.BUSINESS)}
              onChange={handleClick}
            />
            <label htmlFor="account-business account-type-label">Business</label>
          </div>
          <div className="account-type">
            <input
              type="radio"
              id="account-family"
              name="account-type"
              value={AccountType.FAMILY}
              checked={isAccountTypeSelected(AccountType.FAMILY)}
              onChange={handleClick}
            />
            <label htmlFor="account-family account-type-label">Family</label>
          </div>
        </div>
      </div>
      <div className="input-field">
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
          value={activationState.phoneNumber}
          onChange={(event) => {
            setActivationState({
              ...activationState,
              phoneNumber: event.currentTarget.value,
            });
          }}
          required
        />
      </div>
      <div className="input-field">
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
          value={activationState.email}
          onChange={(event) => {
            setActivationState({
              ...activationState,
              email: event.currentTarget.value,
            });
          }}
          required
        />
      </div>
    </>
  );
};

export default ActivationForm;

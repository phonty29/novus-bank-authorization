import { Dispatch, SetStateAction } from "react";
import AccountType from "../../../enums/AccountType";

export interface IdentificationFields {
  accountType: string;
  phoneNumber: string;
  email: string;
}

interface IForm {
  state: IdentificationFields;
  setState: Dispatch<SetStateAction<IdentificationFields>>;
}

export const validateIdentificationFields = (state: IdentificationFields): boolean => {
  const validEmailRegex: RegExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (state.email.match(validEmailRegex)) 
    return true;
  return false;
}

const IdentificationForm: React.FC<IForm> = ({state, setState}) => {
  const isAccountTypeSelected = (type: AccountType) => type === state.accountType;
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>): void => setState({...state, accountType: event.currentTarget.value});
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
            <input type="radio" id="account-self" name="account-type" value={AccountType.SELF} checked={isAccountTypeSelected(AccountType.SELF)} onChange={handleClick}/>
            <label htmlFor="account-self">Self</label>
          </div>
          <div className="account-type">
            <input type="radio" id="account-business" name="account-type" value={AccountType.BUSINESS} checked={isAccountTypeSelected(AccountType.BUSINESS)} onChange={handleClick} />
            <label htmlFor="account-business">Business</label>
          </div>
          <div className="account-type">
            <input type="radio" id="account-family" name="account-type" value={AccountType.FAMILY} checked={isAccountTypeSelected(AccountType.FAMILY)} onChange={handleClick} />
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
          value={state.phoneNumber}
          onChange={(event) => {setState({...state, phoneNumber: event.currentTarget.value})}}
          required
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
          value={state.email}
          onChange={(event) => {setState({...state, email: event.currentTarget.value})}}
          required
        />
      </div>
    </>
  );
};

export default IdentificationForm;

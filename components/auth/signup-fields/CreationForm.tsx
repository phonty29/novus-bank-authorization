import CountriesDropdown from "./CountriesDropdown";

const CreationForm: React.FC = () => {
  return (
    <>
      <p className="fields-desc mb-5">
        Tell us about your basic details and account requirements
      </p>
      <div className="input-field mb-5">
        <label htmlFor="select-role" className="label-text">
          Play as
          <span className="text-purple"> *</span>
        </label>
        <select
          name="select-role"
          id="select-role"
          className="auth-input w-fit"
        >
          <option value="fund">Investment fund</option>
          <option value="bank">Private Bank</option>
        </select>
      </div>
      <div className="fields-raw mb-5">
        <div className="raw-field">
          <label htmlFor="first-name" className="label-text">
            First name
            <span className="text-purple"> *</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="auth-input"
            placeholder={'John'}
            required
          />
        </div>
        <div className="raw-field">
          <label htmlFor="last-name" className="label-text">
            Last name
            <span className="text-purple"> *</span>
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className="auth-input"
            placeholder={'Doe'}
            required
          />
        </div>
      </div>
      <div className="fields-raw mb-5">
        <div className="raw-field">
          <label htmlFor="gender" className="label-text">
            Gender
            <span className="text-purple"> *</span>
          </label>
          <select name="gender" id="gender" className="auth-input raw-input-sm">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="raw-field">
          <label htmlFor="date-of-birth" className="label-text">
            Date of Birth
            <span className="text-purple"> *</span>
          </label>
          <input
            type="date"
            id="date-of-birth"
            name="date-of-birth"
            className="auth-input raw-input-sm"
            placeholder={'MM/DD/YYYY'}
            required
          />
        </div>
      </div>
      <div className="fields-raw mb-7">
        <CountriesDropdown />
        <div className="raw-field">
          <label htmlFor="city" className="label-text">
            City
            <span className="text-purple"> *</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="auth-input"
            placeholder={'New York City'}
            required
          />
        </div>
      </div>
    </>
  );
};

export default CreationForm;

import { useFieldsContext } from '@state/auth/FieldsContext';
import Genders from '@utils/enums/Genders';
import countries from '@utils/lists/countries.json';
import playroles from '@utils/lists/playroles.json';

export const PlayrolesDropdown: React.FC = () => {
  const { personalInfoState, setPersonalInfoState } = useFieldsContext();
  return (
    <div className="input-field">
      <label htmlFor="select-role" className="label-text">
        Play as
        <span className="text-purple"> *</span>
      </label>
      <select
        name="select-role"
        id="select-role"
        className="auth-input sm:w-fit"
        value={personalInfoState.role}
        onChange={(e) => {
          setPersonalInfoState({ ...personalInfoState, role: e.target.value });
        }}
      >
        {playroles.map((playrole, index) => (
          <option key={index} value={playrole.value}>
            {playrole.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export const NameField: React.FC = () => {
  const { personalInfoState, setPersonalInfoState } = useFieldsContext();
  return (
    <>
      <div className="raw-field name-raw-field">
        <label htmlFor="first-name" className="label-text">
          First name
          <span className="text-purple"> *</span>
        </label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="auth-input raw-input-bg"
          placeholder={'John'}
          value={personalInfoState.firstName}
          onChange={(e) => {
            setPersonalInfoState({ ...personalInfoState, firstName: e.target.value });
          }}
          required
        />
      </div>
      <div className="raw-field name-raw-field">
        <label htmlFor="last-name" className="label-text">
          Last name
          <span className="text-purple"> *</span>
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="auth-input raw-input-bg"
          placeholder={'Doe'}
          value={personalInfoState.lastName}
          onChange={(e) => {
            setPersonalInfoState({ ...personalInfoState, lastName: e.target.value });
          }}
          required
        />
      </div>
    </>
  );
};

export const GenderDropdown: React.FC = () => {
  const { personalInfoState, setPersonalInfoState } = useFieldsContext();
  return (
    <div className="raw-field">
      <label htmlFor="gender" className="label-text">
        Gender
        <span className="text-purple"> *</span>
      </label>
      <select
        name="gender"
        id="gender"
        className="auth-input raw-input-sm"
        onChange={(e) => {
          setPersonalInfoState({
            ...personalInfoState,
            gender: e.target.value as Genders,
          });
        }}
        value={personalInfoState.gender}
      >
        <option value={Genders.MALE}>Male</option>
        <option value={Genders.FEMALE}>Female</option>
        <option value={Genders.OTHER}>Other</option>
      </select>
    </div>
  );
};

export const DateField: React.FC = () => {
  const { personalInfoState, setPersonalInfoState } = useFieldsContext();
  const formatDate = (date: Date): string => {
    if (isNaN(date.getTime())) return "";
    else return date.toJSON().substring(0,10);
  }

  return (
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
        value={formatDate(personalInfoState.dateOfBirth)}
        onChange={(e) => {
          setPersonalInfoState({...personalInfoState, dateOfBirth: new Date(e.target.value)});
        }}
        required
      />
    </div>
  );
};

export const CountriesDropdown: React.FC = () => {
  const { personalInfoState, setPersonalInfoState } = useFieldsContext();
  return (
    <div className="raw-field">
      <label htmlFor="country" className="label-text">
        Country
        <span className="text-purple"> *</span>
      </label>
      <select
        name="country"
        id="country"
        className="auth-input raw-input-bg"
        onChange={(e) => {
          setPersonalInfoState({ ...personalInfoState, country: e.target.value });
        }}
        value={personalInfoState.country}
      >
        {countries.map((cnt, index) => (
          <option key={index} value={cnt.name}>
            {cnt.name}
          </option>
        ))}
      </select>
    </div>
  );
};


export const CityField: React.FC = () => {
  const { personalInfoState, setPersonalInfoState } = useFieldsContext();
  return (
    <div className="raw-field">
      <label htmlFor="city" className="label-text">
        City
        <span className="text-purple"> *</span>
      </label>
      <input
        type="text"
        id="city"
        name="city"
        className="auth-input raw-input-bg"
        placeholder={'New York City'}
        value={personalInfoState.city}
        onChange={(e) => {
          setPersonalInfoState({ ...personalInfoState, city: e.target.value });
        }}
        required
      />
    </div>
  );
};

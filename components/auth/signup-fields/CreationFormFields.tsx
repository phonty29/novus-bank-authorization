import countries from '../../../lib/data/countries.json';
import playroles from '../../../lib/data/playroles.json';
import Genders from '../../../lib/enums/Genders';
import { useFieldsContext } from '../../../state/auth/FieldsContext';

export const PlayrolesDropdown: React.FC = () => {
  const { creationState, setCreationState } = useFieldsContext();
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
        value={creationState.role}
        onChange={(e) => {
          setCreationState({ ...creationState, role: e.target.value });
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
  const { creationState, setCreationState } = useFieldsContext();
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
          value={creationState.firstName}
          onChange={(e) => {
            setCreationState({ ...creationState, firstName: e.target.value });
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
          value={creationState.lastName}
          onChange={(e) => {
            setCreationState({ ...creationState, lastName: e.target.value });
          }}
          required
        />
      </div>
    </>
  );
};

export const GenderDropdown: React.FC = () => {
  const { creationState, setCreationState } = useFieldsContext();
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
          setCreationState({
            ...creationState,
            gender: e.target.value as Genders,
          });
        }}
        value={creationState.gender}
      >
        <option value={Genders.MALE}>Male</option>
        <option value={Genders.FEMALE}>Female</option>
        <option value={Genders.OTHER}>Other</option>
      </select>
    </div>
  );
};

export const DateField: React.FC = () => {
  const { creationState, setCreationState } = useFieldsContext();
  const formatDate = (date: Date) => {
    return date.toJSON().substring(0,10);
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
        value={formatDate(creationState.dateOfBirth)}
        onChange={(e) => {
          setCreationState({...creationState, dateOfBirth: new Date(e.target.value)});
        }}
        required
      />
    </div>
  );
};

export const CountriesDropdown: React.FC = () => {
  const { creationState, setCreationState } = useFieldsContext();
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
          setCreationState({ ...creationState, country: e.target.value });
        }}
        value={creationState.country}
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
  const { creationState, setCreationState } = useFieldsContext();
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
        value={creationState.city}
        onChange={(e) => {
          setCreationState({ ...creationState, city: e.target.value });
        }}
        required
      />
    </div>
  );
};

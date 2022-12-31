import { useState } from "react";
import countries from '../../../lib/data/countries.json';
import playroles from '../../../lib/data/playroles.json';
import Genders from "../../../lib/enums/Genders";

const CreationForm: React.FC = () => {
  return (
    <>
      <p className="fields-desc mb-5">
        Tell us about your basic details and account requirements
      </p>
      <PlayrolesDropdown />
      <div className="fields-raw mb-5">
        <NameField />
      </div>
      <div className="fields-raw mb-5">
        <GenderDropdown />
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
        <CityField />
      </div>
    </>
  );
};

export default CreationForm;

const CityField: React.FC = () => {
  const [city, setCity] = useState<string>("New York City");

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
        className="auth-input"
        placeholder={"New York City"}
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        required
      />
    </div>
  );
}

const GenderDropdown: React.FC = () => {
  const [gender, setGender] = useState<Genders>(Genders.MALE);

  return (
    <div className="raw-field">
      <label htmlFor="gender" className="label-text">
        Choose your gender
        <span className="text-purple"> *</span>
      </label>
      <select 
        name="gender" 
        id="gender" 
        className="auth-input raw-input-sm"
        onChange={(e) => {setGender(e.target.value as Genders)}}
        value={gender}
        >
        <option value={Genders.MALE}>Male</option>
        <option value={Genders.FEMALE}>Female</option>
        <option value={Genders.OTHER}>Other</option>
      </select>
    </div>
  );
}

const NameField: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return (
      <>
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
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
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
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
        </div>
      </>    
  );
}

const PlayrolesDropdown: React.FC = () => {
  const [role, setRole] = useState<string>(playroles[0].value);
  
  return (
      <div className="input-field mb-5">
        <label htmlFor="select-role" className="label-text">
          Play as
          <span className="text-purple"> *</span>
        </label>
        <select
          name="select-role"
          id="select-role"
          className="auth-input w-fit"
          onChange={(e) => {setRole(e.target.value)}}
          value={role} 
        >
          {playroles.map((playrole, index) => 
              <option key={index} value={playrole.value}>{playrole.name}</option>
          )}
        </select>
      </div>      
  );
}


const CountriesDropdown: React.FC = () => {
  const [country, setCountry] = useState<string>("Afghanistan");
  
  return (
      <div className="raw-field">
        <label htmlFor="country" className="label-text">
          Country
          <span className="text-purple"> *</span>
        </label>
        <select 
          name="country" 
          id="country" 
          className="auth-input" 
          onChange={(e) => {setCountry(e.target.value)}}
          value={country} 
          >
          {countries.map((cnt, index) => 
              <option key={index} value={cnt.name}>{cnt.name}</option>
          )}
        </select>
      </div>      
  );
}
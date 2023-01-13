import {
  CityField,
  CountriesDropdown,
  DateField,
  GenderDropdown,
  NameField,
  PlayrolesDropdown
} from './PersonalInfoFormFields';

const PersonalInfoForm: React.FC = () => {
  return (
    <>
      <PlayrolesDropdown />
      <div className="fields-raw name-fields-raw">
        <NameField />
      </div>
      <div className="fields-raw">
        <GenderDropdown />
        <DateField />
      </div>
      <div className="fields-raw">
        <CountriesDropdown />
        <CityField />
      </div>
    </>
  );
};

export default PersonalInfoForm;

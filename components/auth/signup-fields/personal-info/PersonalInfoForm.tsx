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
    <div className='personal-info-fields'>
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
    </div>
  );
};

export default PersonalInfoForm;

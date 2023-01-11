import {
  CityField,
  CountriesDropdown,
  DateField,
  GenderDropdown,
  NameField,
  PlayrolesDropdown
} from './CreationFormFields';

const CreationForm: React.FC = () => {
  return (
    <>
      <PlayrolesDropdown />
      <div className="fields-raw">
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

export default CreationForm;

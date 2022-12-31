import { CityField, CountriesDropdown, DateField, GenderDropdown, NameField, PlayrolesDropdown } from "./CreationFormFields";

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
        <DateField />
      </div>
      <div className="fields-raw mb-7">
        <CountriesDropdown />
        <CityField />
      </div>
    </>
  );
};

export default CreationForm;

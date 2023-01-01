import countries from '../../data/countries.json';
import playroles from '../../data/playroles.json';
import Genders from '../../enums/Genders';

interface ICreationFields {
  role: string;
  firstName: string;
  lastName: string;
  gender: Genders;
  dateOfBirth: Date;
  country: string;
  city: string;
}

export const creationFieldsInitialState: ICreationFields = {
  role: playroles[0].value,
  firstName: '',
  lastName: '',
  gender: Genders.MALE,
  dateOfBirth: new Date(),
  country: countries[0].name,
  city: '',
};

export const validateCreationFields = (creationState: ICreationFields): boolean => {
  return creationState.firstName.length > 0 &&
         creationState.lastName.length > 0 &&
         new Date().getFullYear() - creationState.dateOfBirth.getFullYear() > 16 &&
         creationState.country.length > 0 &&
         creationState.city.length > 0;
}

export default ICreationFields;

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

export default ICreationFields;

import Genders from '../../enums/Genders';

interface ICreationFields {
  role: string;
  firstName: string;
  lastName: string;
  gender: Genders;
  dateOfBirth: string;
  country: string;
  city: string;
}

export const creationFieldsInitialState: ICreationFields = {
  role: '',
  firstName: '',
  lastName: '',
  gender: Genders.MALE,
  dateOfBirth: '',
  country: '',
  city: '',
};

export default ICreationFields;

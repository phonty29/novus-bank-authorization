import Genders from '@components/auth/signup-fields/utils/enums/Genders';
import countries from '@utils/lists/countries.json';
import playroles from '@utils/lists/playroles.json';

interface IPersonalInfoFields {
  role: string;
  firstName: string;
  lastName: string;
  gender: Genders;
  dateOfBirth: Date;
  country: string;
  city: string;
}

export const personalInfoFieldsInitialState: IPersonalInfoFields = {
  role: playroles[0].value,
  firstName: '',
  lastName: '',
  gender: Genders.MALE,
  dateOfBirth: new Date(),
  country: countries[0].name,
  city: '',
};

export default IPersonalInfoFields;

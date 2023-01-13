import Link from 'next/link';
import SignUpStages from '../../../lib/enums/SignUpStages';
import { useSignUpContext } from '../../../state/auth/SignUpContext';

const SignUpFieldsHelp: React.FC = () => {
  const { currentStage } = useSignUpContext();
  return (
    <div className={`fields-help ${(currentStage === SignUpStages.PERSONAL_INFO ? 'lg:block hidden' : '')}`}>
      <div className="help-item mb-5">
        <h3 className="help-item-title">Benefits of Online Banking</h3>
        <p>
          Check recent account activity and access account balances from one
          convenient location.
        </p>
        <p>
          Transfer funds between your Novus accounts and accounts at other
          banks.
        </p>
        <p>Go paperless with up to 25 months of deposit statements.</p>
      </div>
      <div className="help-more-link mb-11">
        <Link href={'/'}>more</Link>
      </div>
      <div className="help-item">
        <h3 className="help-item-title">Need Assistance?</h3>
        <p>
          For Online Banking technical assistance, Bill Pay support, or general
          account inquiries
        </p>
        <p>Call 1-877-768-2265.</p>
      </div>
    </div>
  );
};

export default SignUpFieldsHelp;

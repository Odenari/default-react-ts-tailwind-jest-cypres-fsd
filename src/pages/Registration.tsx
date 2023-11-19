import Logo from '../shared/Logo';
import StepWizard from 'react-step-wizard';
import { NameForm } from '../features/user-registration';

const Registration = () => {
  return (
    <section>
      <Logo />

      <StepWizard>
        <NameForm />
      </StepWizard>
    </section>
  );
};

export default Registration;

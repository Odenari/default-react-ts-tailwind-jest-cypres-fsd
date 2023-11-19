import Input from '../../shared/UI/Input';
import NextBtn from '../../shared/UI/Buttons/NextBtn';
import { StepWizardChildProps } from 'react-step-wizard';

const AddressForm = (props: StepWizardChildProps) => {
  return (
    <div>
      <h2>Address</h2>
      <form>
        <Input
          type="text"
          name="street"
          placeholder="Your street"
          labelName="Street Address"
        />
      </form>
      <div>
        <NextBtn nextStep={props.nextStep} />
      </div>
    </div>
  );
};

export default AddressForm;

import { useState } from 'react';
import { Stepper, Button, Group, Stack, Center } from '@mantine/core';

const StepperNav = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((currentStep) => currentStep + 1);
  const previousStep = () => setActive((currentStep) => currentStep - 1);
  return (
    <>
      {/* <Stack justify="center"> */}
      <Stepper active={active}>
        <Stepper.Step></Stepper.Step>
        <Stepper.Step></Stepper.Step>
        <Stepper.Step></Stepper.Step>
      </Stepper>

      {/* <Group justify="between">
            <Button variant="subtle" onClick={previousStep}>
              Back
            </Button>
            <Button variant="fill" onClick={nextStep}>
              Next
            </Button>
          </Group> */}
      {/* </Stack> */}
    </>
  );
};

export default StepperNav;

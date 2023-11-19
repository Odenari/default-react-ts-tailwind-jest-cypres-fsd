import React from 'react';
import Input from '../../shared/UI/Input';
import NextBtn from '../../shared/UI/Buttons/NextBtn';
// import { StepWizardChildProps } from 'react-step-wizard';
// props: StepWizardChildProps
const NameForm = () => {
  return (
    <>
      <h2 className="flex justify-center m-8">Personal Data</h2>
      <div className="container max-w-[452px] h-[492px] p-10 flex flex-col  mx-auto items-center relative border border-solid border-white rounded-xl shadow-lightblue">
        <form className="relative w-[372px] flex flex-col gap-6">
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            labelName="Name"
          />
          <Input
            type="text"
            name="surname"
            placeholder="Your surname"
            labelName="Surname"
          />
          <Input
            type="date"
            name="birthday"
            placeholder="MM/DD/YYYY"
            labelName="Date of birth"
          />
          <NextBtn />
        </form>
      </div>
    </>
  );
};

export default NameForm;

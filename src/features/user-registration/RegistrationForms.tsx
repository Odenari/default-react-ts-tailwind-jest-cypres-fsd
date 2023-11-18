import React from 'react';

const RegistrationForm: React.FC = () => {
  return (
    <div>
      <h2>Personal Data</h2>
      <form>
        <label htmlFor="name">
          <h4>Name</h4>
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label htmlFor="surname">
          <h4>Surname</h4>
          <input type="text" name="surname" placeholder="Your surname" />
        </label>
        <h4>Date of birth</h4>
        <label htmlFor="birthDate">
          <input type="date" name="birthDate" placeholder="MM/DD/YYYY" />
        </label>
      </form>
    </div>
  );
};

export default RegistrationForm;

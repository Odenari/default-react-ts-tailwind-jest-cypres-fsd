import React from 'react';

const Login: React.FC = () => {
  return (
    <section className="login">
      <main>
        <header>
          <form className="flex flex-col">
            <label htmlFor="login">Enter a username or email</label>
            <input
              type="text"
              name="login"
              placeholder="Enter credentials to get access"
            />
          </form>
        </header>
      </main>
      {/* <Slider></Slider> */}
    </section>
  );
};

export default Login;

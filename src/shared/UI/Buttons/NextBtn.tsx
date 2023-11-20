import { NavLink } from 'react-router-dom';

const NextBtn = () => {
  return (
    <>
      <button className="w-full text-center h-[54px] reg-btns text-white font-semibold rounded-lg ">
        Next
      </button>
      <span className="flex gap-2 justify-end -mt-4">
        Back to{' '}
        <NavLink className="font-semibold text-purple-main" to="/">
          Log In
        </NavLink>
      </span>
    </>
  );
};

export default NextBtn;

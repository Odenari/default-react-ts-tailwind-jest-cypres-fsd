import { NavLink } from 'react-router-dom';
import { BtnProps } from '../../../features/user-registration/types';

const NextBtn = (props: BtnProps) => {
  return (
    <>
      <button
        className="w-full text-center h-[54px] reg-btns text-white font-semibold rounded-lg "
        onClick={(e) => {
          e.preventDefault();
          props.nextStep();
        }}
      >
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

// width: 372px;
// height: 56px;

// background:

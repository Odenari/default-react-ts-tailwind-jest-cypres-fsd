const NavItem = (props) => {
  console.log(props);
  return (
    <li
      className={`border-2 text-gray-main border-gray-main rounded-full w-[28px] h-[28px] m-10 flex items-center justify-center`}
    >
      {props.currentStep}
    </li>
  );
};

export default NavItem;

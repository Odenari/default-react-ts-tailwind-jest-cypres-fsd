type Props = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  labelName: string;
  placeholder: string;
};

const Input = ({ type, name, placeholder, labelName }: Props) => {
  return (
    <label htmlFor={name}>
      <h5 className="mb-2 font-semibold text-black-primary">{labelName}</h5>
      <input
        className="w-full p-4 text-base border-solid border border-gray-main rounded-xl placeholder-gray-main focus:border-blue-additional focus:bg-blue-light focus:bg-opacity-20 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;

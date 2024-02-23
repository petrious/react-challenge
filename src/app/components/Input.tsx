import { ContainerInputName, InputName, LabelName } from "./styles/Style";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  classNameLabel?: string;
  classNameContainer?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  onChange,
  label,
  classNameLabel,
  classNameContainer,
  ...props
}) => {
  return (
    <ContainerInputName className={classNameContainer}>
      <LabelName className={classNameLabel} htmlFor={id}>
        {label}
      </LabelName>
      <InputName {...props} id={id} name={name} onChange={onChange} />
    </ContainerInputName>
  );
};

export default Input;

import { FC, ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  const navigate = useNavigate();

  return (
    <button className="btn bg-indigo-800 w-full tracking-wider" {...props}>
      {label}
    </button>
  );
};

export default Button;

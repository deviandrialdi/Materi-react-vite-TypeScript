import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Input: FC<Props> = ({ label, id, ...props }) => {
  return (
    <div className="mb-3">
      <input className="input input-bordered w-full" />
    </div>
  );
};

export const TextArea: FC<Props> = ({ label, id, ...props }) => {
  return (
    <div className="mb-3">
      <textarea className="input input-bordered w-full" />
    </div>
  );
};

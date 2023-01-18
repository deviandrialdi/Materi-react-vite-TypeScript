import { Component, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button
        className="btn bg-indigo-800 w-full tracking-wider"
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;

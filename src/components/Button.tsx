import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  label,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'px-5 py-2 rounded-full font-medium transition';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  const finalClassName = twMerge(
    baseStyles,
    variantStyles[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClassName}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

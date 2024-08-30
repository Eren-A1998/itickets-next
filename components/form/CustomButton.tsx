"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CustomButton({
  icon: Icon,
  children,
  onClick,
  className,
  type = "button",
  ...props
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`${className}`} {...props}>
      {Icon && Icon}
      {children}
    </button>
  );
}

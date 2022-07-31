import { FC } from "react";
import { IIconProps } from "../../types/iconProps";

export const ErrorIcon: FC<IIconProps> = ({
  width = 16,
  height = 16,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.0013 3.9935L13.0213 12.6668H2.9813L8.0013 3.9935ZM8.0013 1.3335L0.667969 14.0002H15.3346L8.0013 1.3335ZM8.66797 10.6668H7.33464V12.0002H8.66797V10.6668ZM8.66797 6.66683H7.33464V9.3335H8.66797V6.66683Z"
        fill="#F2453D"
      />
    </svg>
  );
};

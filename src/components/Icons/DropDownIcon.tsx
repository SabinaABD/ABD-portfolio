import { FC } from "react";
import {IIconProps} from "../../types/iconProps";

export const DropDownIcon: FC<IIconProps> = ({
  width = 16,
  height = 16,
  className = "",
}) => {
  return (
    <div className={className}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.1007 4.6665L8.00065 9.75539L2.90065 4.6665L1.33398 6.23317L8.00065 12.8998L14.6673 6.23317L13.1007 4.6665Z"
          fill="#212529"
        />
      </svg>
    </div>
  );
};

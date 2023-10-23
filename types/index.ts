import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface searchmanufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

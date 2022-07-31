export interface RadioButtonPropsType {
  onClick: () => void;
  children: React.ReactNode;
  type: string;
  disabled: boolean;
  id: string;
  checked: boolean;
  name: string;
}

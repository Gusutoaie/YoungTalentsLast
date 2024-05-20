// types.ts

export interface FormData {
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  actualJob: string;
  actualCompany: string;
  professionalDomain: string;
  mentor: string;
  faculty: string;
  yearOfStudy: string;
}

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectProps {
  value: string;
  onChange: (value: string) => void;
}

export interface CheckboxProps {
  value: string;
  onChange: (value: string) => void;
}
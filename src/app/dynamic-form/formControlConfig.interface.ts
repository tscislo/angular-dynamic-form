export interface FormControlConfig {
  type: {
    main: string;
    sub: string;
  };
  label?: string;
  name: string;
  isRequired?: boolean; // TODO: Maybe change that to list of validators?
  options: {
    name: string;
    label: string;
  }[];
}

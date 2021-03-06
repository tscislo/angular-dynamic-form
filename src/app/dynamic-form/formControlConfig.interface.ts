export interface FormControlConfig {
  type: {
    main: string;
    sub?: string;
  };
  label: string;
  value?: string;
  name: string;
  isRequired?: boolean; // TODO: Maybe change that to list of validators?
  asyncValidator?: boolean;
  options?: {
    name: string;
    label: string;
  }[];
}

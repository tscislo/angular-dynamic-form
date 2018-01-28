export interface FormControlConfig {
  type: {
    main: string;
    sub?: string;
  };
  controls?: FormControlConfig[];
  label: string;
  value?: string;
  name: string;
  isRequired?: boolean; // TODO: Maybe change that to list of validators?
  options?: {
    name: string;
    label: string;
  }[];
}

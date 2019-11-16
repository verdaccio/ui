export interface FormFields {
  required: boolean;
  pristine: boolean;
  helperText: string;
  value: string;
}

export interface FormError {
  type: string;
  title: string;
  description: string;
}

export interface LoginModalProps {
  visibility: boolean;
  error?: FormError;
  onCancel: () => void;
  onSubmit: (username: string, password: string) => void;
}

export interface LoginModalState {
  form: {
    username: Partial<FormFields>;
    password: Partial<FormFields>;
  };
  error?: FormError;
}

import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

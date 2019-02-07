/**
 * @prettier
 */

import type { Node } from 'react';

export interface IProps {
  children: Node;
  open: boolean;
  onClose: () => void;
}

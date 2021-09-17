import React from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../SvgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const Finnish = React.forwardRef(function China(props: Props, ref: React.Ref<SVGSVGElement>) {
  const { t } = useTranslation();
  return (
    <SvgIcon viewBox="0 0 36 36" {...props} ref={ref} title={t('flag.finnish')}>
      <path fill="#EDECEC" d="M32 5H18v10h18V9a4 4 0 00-4-4z" />
      <path fill="#EEE" d="M11 5H4a4 4 0 00-4 4v6h11V5z" />
      <path fill="#EDECEC" d="M32 31H18V21h18v6a4 4 0 01-4 4zm-21 0H4a4 4 0 01-4-4v-6h11v10z" />
      <path fill="#003580" d="M18 5h-7v10H0v6h11v10h7V21h18v-6H18z" />
    </SvgIcon>
  );
});

Finnish.displayName = 'Finnish';

export { Finnish };

import React from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../SvgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const Japan = React.forwardRef(function Japan(props: Props, ref: React.Ref<SVGSVGElement>) {
  const { t } = useTranslation();
  return (
    <SvgIcon viewBox="0 0 512 512" {...props} ref={ref} title={t('flag.japan')}>
      <path
        d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
        fill="#f5f5f5"
      />
      <circle cx={256} cy={255.999} r={97.1} fill="#ff4b55" />
    </SvgIcon>
  );
});

Japan.displayName = 'Japan';

export { Japan };

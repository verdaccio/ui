import React from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../SvgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const France = React.forwardRef(function France(props: Props, ref: React.Ref<SVGSVGElement>) {
  const { t } = useTranslation();
  return (
    <SvgIcon viewBox="0 0 512 512" {...props} ref={ref} title={t('flag.france')}>
      <path
        d="M38.345 88.273C17.167 88.273 0 105.44 0 126.618v258.759c0 21.177 17.167 38.345 38.345 38.345h132.322V88.273H38.345z"
        fill="#41479b"
      />
      <path fill="#f5f5f5" d="M170.67 88.277h170.67v335.45H170.67z" />
      <path
        d="M473.655 88.273H341.333v335.448h132.322c21.177 0 38.345-17.167 38.345-38.345V126.618c0-21.178-17.167-38.345-38.345-38.345z"
        fill="#ff4b55"
      />
    </SvgIcon>
  );
});

France.displayName = 'France';

export { France };

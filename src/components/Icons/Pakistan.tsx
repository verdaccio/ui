import React from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../SvgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const Pakistan = React.forwardRef(function Pakistan(props: Props, ref: React.Ref<SVGSVGElement>) {
  const { t } = useTranslation();
  return (
    <SvgIcon viewBox="0 0 45 45" {...props} ref={ref} title={t('flag.pakistan')}>
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 36h36V0H0v36z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)" transform="matrix(1.25 0 0 -1.25 0 45)">
        <path
          d="M27.61 20.952l-1.213-2.022-.208 2.349-2.298.528 2.17.924-.207 2.349 1.548-1.78 2.17.925-1.212-2.023 1.548-1.78-2.298.53zM22.5 10.528a7.5 7.5 0 00-7.5 7.5c0 3.72 2.711 6.798 6.263 7.389a6.494 6.494 0 01-3.763-5.89 6.5 6.5 0 016.5-6.5 6.494 6.494 0 015.89 3.764c-.592-3.552-3.67-6.263-7.39-6.263M32 31H9V5h23a4 4 0 014 4v18a4 4 0 01-4 4"
          fill="#004600"
        />
        <path d="M4 31a4 4 0 01-4-4V9a4 4 0 014-4h5v26H4z" fill="#eee" />
        <path
          d="M29.572 24.225l-2.17-.924-1.548 1.779.207-2.35-2.17-.922 2.298-.528.208-2.35 1.213 2.022 2.298-.53-1.548 1.78 1.212 2.023z"
          fill="#fff"
        />
        <path
          d="M24 13.028a6.496 6.496 0 10-2.737 12.39c-3.552-.591-6.263-3.67-6.263-7.39a7.5 7.5 0 017.5-7.5c3.72 0 6.799 2.71 7.39 6.263A6.496 6.496 0 0024 13.028"
          fill="#fff"
        />
      </g>
    </SvgIcon>
  );
});

Pakistan.displayName = 'Pakistan';

export { Pakistan };

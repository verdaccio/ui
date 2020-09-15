import React from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '../SvgIcon';

type Props = React.ComponentProps<typeof SvgIcon>;

const India = React.forwardRef(function India(props: Props, ref: React.Ref<SVGSVGElement>) {
  const { t } = useTranslation();
  return (
    <SvgIcon viewBox="0 0 512 512" {...props} ref={ref} title={t('flag.india')}>
      <path d="M0 384c0 31.418 25.473 56.889 56.889 56.889H455.11c31.42 0 56.89-25.473 56.89-56.889v-56.889H0V384z" fill="#138808" />
      <path d="M0 327.111h512V184.89H0v142.22z" fill="#eee" />
      <path d="M512 184.889V128c0-31.417-25.473-56.889-56.889-56.889H56.89C25.472 71.111 0 96.583 0 128v56.889h512z" fill="#f93" />
      <path
        d="M312.889 256c0-31.431-25.473-56.902-56.903-56.902-31.417 0-56.888 25.472-56.888 56.902 0 31.418 25.472 56.889 56.888 56.889 31.432 0 56.903-25.472 56.903-56.889"
        fill="navy"
      />
      <path d="M298.666 256c0-23.566-19.115-42.681-42.681-42.681S213.319 232.434 213.319 256s19.1 42.666 42.666 42.666 42.681-19.1 42.681-42.666" fill="#eee" />
      <path
        d="M256 213.334l2.076 32.199 14.251-28.943-10.396 30.535 24.235-21.305-21.291 24.249 30.535-10.396-28.942 14.25L298.666 256l-32.198 2.076 28.942 14.237-30.535-10.383 21.291 24.235-24.235-21.29 10.396 30.535-14.25-28.942L256 298.666l-2.076-32.198-14.252 28.942 10.397-30.535-24.249 21.291 21.305-24.235-30.535 10.383 28.942-14.236L213.334 256l32.199-2.076-28.943-14.251 30.535 10.396-21.305-24.249 24.249 21.305-10.396-30.535 14.25 28.943 2.077-32.2z"
        fill="navy"
        opacity={0.6}
      />
      <path d="M241.778 256c0-7.851 6.37-14.223 14.222-14.223s14.223 6.372 14.223 14.223-6.372 14.223-14.223 14.223-14.223-6.372-14.223-14.223" fill="navy" />
    </SvgIcon>
  );
});

India.displayName = 'India';

export { India };

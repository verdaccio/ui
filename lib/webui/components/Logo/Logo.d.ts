/**
 * @prettier
 */
import React from 'react';
declare const sizing: {
    md: number;
    sm: number;
};
interface Props {
    size?: keyof typeof sizing;
}
declare const Logo: React.FC<Props>;
export default Logo;

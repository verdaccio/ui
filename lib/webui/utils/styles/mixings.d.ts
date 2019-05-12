/**
 * @prettier
 */
/**
 * CSS to represent truncated text with an ellipsis.
 */
export declare function ellipsis(width: string | number): {
    display: string;
    maxWidth: string | number;
    overflow: string;
    textOverflow: string;
    whiteSpace: string;
    wordWrap: string;
};
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 */
interface SpacingShortHand<type> {
    top?: type;
    right?: type;
    bottom?: type;
    left?: type;
}
export declare function spacing(property: 'padding' | 'margin', ...values: Array<SpacingShortHand<number | string>>): {};
export {};

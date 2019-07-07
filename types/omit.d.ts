/**
 * Take all Keys of interface T except for keys K
 * See:
 * https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#predefined-conditional-types
 *
 **/

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

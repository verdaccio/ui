// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png';

declare module 'localstorage-memory' {
  const memoryStorage: Storage;
  export default memoryStorage;
}

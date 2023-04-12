declare module '*.svg?url' {
  declare const content: { src: string; width: number; height: number };
  export default content;
}

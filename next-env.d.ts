/// <reference types="next" />
/// <reference types="next/types/" />

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
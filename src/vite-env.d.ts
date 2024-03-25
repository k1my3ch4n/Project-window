/// <reference types="vite/client" />

declare module "@images";

declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const context: jest.Describe;

interface ImportMetaEnv {
  readonly VITE_URI?: string;
  readonly VITE_WS_URI?: string;
  readonly VITE_REST_URI?: string;
  readonly VITE_CLIENT_ID?: string;
  readonly VITE_CLIENT_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

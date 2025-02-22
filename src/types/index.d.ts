declare module "ad03components" {
  export interface ButtonProps {
    label: string;
    onClick: () => void;
    color: string;
  }

  export class Button {
    constructor(props: ButtonProps);
    render(): string;
  }

  // Si tienes más componentes o funciones, agrégales sus tipos aquí
}

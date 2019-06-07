/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface CcSideDrawer {
    'close': () => void;
    'open': () => void;
    'opened': boolean;
    'title': string;
  }
  interface CcSideDrawerAttributes extends StencilHTMLAttributes {
    'opened'?: boolean;
    'title'?: string;
  }

  interface CcToolTip {
    'title': string;
  }
  interface CcToolTipAttributes extends StencilHTMLAttributes {
    'title'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'CcSideDrawer': Components.CcSideDrawer;
    'CcToolTip': Components.CcToolTip;
  }

  interface StencilIntrinsicElements {
    'cc-side-drawer': Components.CcSideDrawerAttributes;
    'cc-tool-tip': Components.CcToolTipAttributes;
  }


  interface HTMLCcSideDrawerElement extends Components.CcSideDrawer, HTMLStencilElement {}
  var HTMLCcSideDrawerElement: {
    prototype: HTMLCcSideDrawerElement;
    new (): HTMLCcSideDrawerElement;
  };

  interface HTMLCcToolTipElement extends Components.CcToolTip, HTMLStencilElement {}
  var HTMLCcToolTipElement: {
    prototype: HTMLCcToolTipElement;
    new (): HTMLCcToolTipElement;
  };

  interface HTMLElementTagNameMap {
    'cc-side-drawer': HTMLCcSideDrawerElement
    'cc-tool-tip': HTMLCcToolTipElement
  }

  interface ElementTagNameMap {
    'cc-side-drawer': HTMLCcSideDrawerElement;
    'cc-tool-tip': HTMLCcToolTipElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
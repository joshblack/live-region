import { HTMLElement } from '@lit-labs/ssr-dom-shim';

let template: HTMLTemplateElement | null = null;

function getTemplate() {
  if (template) {
    return template;
  }
  template = document.createElement('template');
  template.innerHTML = `
    <style>
      :host {
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }
    </style>
    <div id="polite" aria-live="polite" aria-atomic="true"></div>
    <div id="assertive" aria-live="assertive" aria-atomic="true"></div>
  `;
  return template;
}

export type AnnounceOptions = {
  politeness?: 'polite' | 'assertive';
};

export class LiveRegionElement extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      const template = getTemplate();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  announce(message: string, options: AnnounceOptions = {}) {
    const { politeness = 'polite' } = options;
    const container = this.shadowRoot?.getElementById(politeness);
    if (!container) {
      // TODO: warn shadow dom corrupted
      return;
    }

    if (container.textContent === message) {
      container.textContent = `${message}\u00A0`;
    } else {
      container.textContent = message;
    }
  }
}

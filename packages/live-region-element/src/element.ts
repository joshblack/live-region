let template: HTMLTemplateElement | null = null;

const templateContent = `
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

function getTemplate() {
  if (template) {
    return template;
  }
  template = document.createElement('template');
  template.innerHTML = templateContent;
  return template;
}

export type AnnounceOptions = {
  politeness?: 'polite' | 'assertive';
};

class LiveRegionElement extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      const template = getTemplate();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  public announce(message: string, options: AnnounceOptions = {}) {
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

  public announceFromElement(
    element: HTMLElement,
    options: AnnounceOptions = {},
  ) {
    if (element.textContent) {
      this.announce(element.textContent, options);
    }
  }
}

export { LiveRegionElement, templateContent };

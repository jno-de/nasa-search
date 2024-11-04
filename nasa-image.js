import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.alt = '';
    this.secondaryCreator = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        alt: { type: String },
        secondaryCreator: { type: String, attribute: "secondary-creator" }
    };
  }

  static get styles() {
    return [css`
    

    .image {
    display: inline-block;
    background-color: var(--ddd-theme-default-beaverBlue);
    max-width: 240px;
    }

    .image:hover {
      background-color: var(--ddd-theme-default-slateGray);
    }

    .image div {
    max-width: 240px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 240px;
    height: auto;
    }

    `];
  }

  render() {
    return html`
    <a href="${this.source}" target="_blank">
      <div class="image">
          <img src="${this.source}" alt="${this.alt}" />
          <div>${this.title}</div>
          <div>${this.secondaryCreator}</div>
      </div>
    </a>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);
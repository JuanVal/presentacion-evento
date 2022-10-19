class SeccionCinco extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Montando sección cinco");
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${SeccionCinco.styles}</style>
      <h1>Información</h1>
      <a href="http://www.freepik.com">Designed by kjpargeter / Freepik</a>
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: block;
        width: 100%;
        height:  100%;
        background-color: transparent;
        color: #fff;
        padding: 4em 2rem;
      }
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección cinco");
    this.render();
  }
}
customElements.define("njv-seccion-cinco", SeccionCinco);

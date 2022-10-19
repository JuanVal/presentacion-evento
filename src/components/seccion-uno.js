class SeccionUno extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Montando sección uno");
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${SeccionUno.styles}</style>
      <h2>Try Outs</h2>
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: flex;
        justify-content: flex-end;
        width: 90%;
        height: 90%;
        color: #fff;
      }
      h2{
        font-size: 3em;
      }
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección uno");
    this.render();
  }
}
customElements.define("njv-seccion-uno", SeccionUno);

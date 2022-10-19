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
        color: white;
        text-shadow: 4px 4px 2px rgba(0,0,0,.8), 6px 6px 3px rgba(0,0,0,.8), 8px 8px 4px rgba(0,0,0,.8);
        font-weight: 900;
      }
      h2{
        font-size: 4em;
      }
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección uno");
    this.render();
  }
}
customElements.define("njv-seccion-uno", SeccionUno);

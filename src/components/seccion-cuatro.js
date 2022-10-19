class SeccionCuatro extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Montando sección cuatro");
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${SeccionCuatro.styles}</style>
      <button type="button">Inscripciones</button>
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 95%;
        height:  100%;
        color: #fff;
      
      }
      button{
        width: 12em;
        height: 3em;
        background-color: gold;
        color: white;
        font-weight: 900;
        cursor: pointer;
      }
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección cuatro");
    this.render();
  }
}
customElements.define("njv-seccion-cuatro", SeccionCuatro);

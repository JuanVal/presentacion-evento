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
      <h2>Información</h2>
    
     
   
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: grid;
        gap: 2em 0;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(24, 1fr);
        width: 100%;
        height:  265vh;
        background-color: #0008;
        color: #fff;
     
    
      }
      h2{
        grid-column: 1 / -1;
        text-align: center;
        font-size: 3em;
        margin: 0;
        padding: 0;
        text-shadow: 4px 4px 2px rgba(0,0,0,.8), 6px 6px 3px rgba(0,0,0,.8), 8px 8px 4px rgba(0,0,0,.8);
      }
     
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección cinco");
    this.render();
  }
}
customElements.define("njv-seccion-cinco", SeccionCinco);

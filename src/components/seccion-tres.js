class SeccionTres extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Montando sección tres");
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${SeccionTres.styles}</style>
      <article>
            <small>30</small>
            <strong>OCT</strong>
          </article>
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
       display: flex;
        width: 90%;
        height:  100%;
        background-color: white;
      }
      article{
        padding: 1rem ;
        
      }
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección tres");
    this.render();
  }
}
customElements.define("njv-seccion-tres", SeccionTres);

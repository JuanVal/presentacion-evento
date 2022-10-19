class SeccionDos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Montando sección dos");
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${SeccionDos.styles}</style>
    
        <article class="evento">
          <h1>Tutulo del evento</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, libero fugit dolore ipsam, ad nam perspiciatis dignissimos cumque velit, architecto qui eligendi quos? Necessitatibus maiores eos repellendus veritatis totam dicta beatae ea nostrum consequatur, asperiores cumque porro animi tempore facilis aut alias molestiae officiis, minima officia ad blanditiis nisi eaque mollitia voluptatum! Eum, distinctio odit. Natus iure atque animi, voluptas ducimus odit rem minus perferendis enim eius neque dolorum dolore cum dolorem nobis quasi veritatis maiores doloremque repellendus non fugiat! Voluptatum similique dolores accusantium tempore laboriosam, repellendus possimus optio, rerum amet sapiente vel dolorem quasi nesciunt numquam hic non blanditiis!
          </p>
          <span title="Maximo de participantes">Max Participante: </span> <strong title="15 participantes como.">15</strong>
        </article>
   
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: flex;
        width: 90%;
        height:  100%;
        overflow: hidden;
      }
      .evento{
         display: grid;
         align-items: center;
         width: 100%;
         height:  100%;
         background-color: white;
         padding: 1rem;
         border-radius: 8px;
         box-shadow: 5px 3px 16px 2px rgba(0,0,0,.9);
      }
    `;
  }
  disconnectedCallback() {
    console.log("Desmontando sección dos");
    this.render();
  }
}
customElements.define("njv-seccion-dos", SeccionDos);

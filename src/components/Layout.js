class Layout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    console.log("Montando el comonente");
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>${Layout.styles}</style>
      <section class="fixed">
        <h1>ASdadsadadjiajsdpioaudoiaudòiasduyio</h1>
      </section>
      <section class="seccion seccion-1">
        <njv-seccion-uno></njv-seccion-uno>
      </section>
      <section class="seccion seccion-2">
        <njv-seccion-dos ></njv-seccion-dos>
      </section>
      <section class="seccion seccion-3">
        <njv-seccion-tres ></njv-seccion-tres>
      </section>
      <section class="seccion seccion-4">
        <njv-seccion-cuatro ></njv-seccion-cuatro>
      </section>
      <section class="seccion seccion-5">
        <njv-seccion-cinco ></njv-seccion-cinco>
      </section>
    `;
  }
  static get styles() {
    return /*css*/ `
      :host{
        display: grid;
        width: 100%;
        height: 200vh;
        gap: 2px 0;
        grid-template-columns: repeat(24, 1fr);
        grid-template-rows: repeat(48, 1fr);
        color: #333;
        background-color: #333;
        background-image: url('https://i.pinimg.com/originals/be/9a/8e/be9a8e798b74b7d0e00fa6cb9ba4334e.jpg');
        background-repeat: none;
        background-size: cover;
        background-position: center;
         z-index:1;
         overflow: hidden;
         position: relative;
      }
      
      .seccion{
        display: flex;
        justify-content: center;
        z-index: 3;
      }
      .seccion-1{
    
        grid-column: 1 / -1;
        grid-row: 3;
      }
      .seccion-2{
        grid-column: 1 / span 10;
        grid-row: 6 / 19;
      }
      .seccion-3{
        grid-column: 16 / span 9;
        grid-row: 7 / 19;
      }
      .seccion-4{
        grid-column: 1 / -1 ;
        grid-row: 21 / 24;
      }
      .seccion-5{
        grid-column: 1 / -1 ;
        grid-row:  24 /-1;
      }
      .fixed{
       
        position: absolute;
        color: #333;
        background: rgba(255,0,0,.8);
        background: url('https://marketing.twitter.com/content/dam/marketing-twitter/latam/es/success-stories/coca-cola/cocacola-header.jpg.twimg.1920.jpg');
        background-position: center;
        background-repeat: none;
        height: 85%;
        width: 200%;
        z-index: 1;
        grid-column: 1 / -1 ;
        grid-row:  1 / -1;
        clip-path: inset(33% 0 33% 0);
        transition: transform 2s ease;
        top: 50%;
        box-shadow:0px 0px 2px 5px rgba(0,0,0,.9);
       
        transform: translate(-25%,-70%)  rotateX(-190deg) rotateY(-190deg) rotateZ(-190deg) ;
      }
    `;
  }
}
customElements.define("njv-layout", Layout);

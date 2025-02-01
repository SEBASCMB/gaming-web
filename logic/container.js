class CONTAINER extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        /* Component styles */
        this._style = `
        .container {
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        display: flex;
        align-content: center;
        flex-direction: column;
        position: relative;
        }
        `
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        ${this._style}

         <div class="container">
         <slot> </slot>
         </div>
      
      `;
    }
}

customElements.define("container", CONTAINER);

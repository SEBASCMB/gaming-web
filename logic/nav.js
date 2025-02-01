class NavItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        /* Component styles */
        this._style = `
        
          <style>
            header {
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 40px;
                z-index: 999;
                background-color: #4b4b4b5b;
            }

            .head-left {
                display: flex;
                align-items: center;
            }

            .head-left img {
                width: 40px;
                height: 40px;
                margin-right: 20px;
            }

            .head-left button {
                border: none;
                color: black;
                background-color: white;
                padding: 10px 30px;
                border-radius: 20px;
                font-weight: 700;
                cursor: pointer;
                transition: .3s;
            }

            .head-left button:hover {
                opacity: 0.7;
            }

            .head-right {
                display: flex;
            }

            .head-right a {
                text-decoration: none;
                padding-left: 25px;
                color: white;
                font-size: 15px;
            }
                    
              </style>    
        `
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        ${this._style}
        <header>
        <div class="head-left">
            <img src="img/logo.png" alt="Logo">
            <button>Products</button>
        </div>

        <div class="head-right">
            <p><a href="#">NEXUS</a></p>
            <p><a href="#">VAULT</a></p>
            <p><a href="#">ABOUT</a></p>
            <p><a href="services.html">SERVICES</a></p>
            <p><a href="#">CONTANT</a></p>
        </div>

        </header>
      
      `;
    }
}

customElements.define("nav-item", NavItem);

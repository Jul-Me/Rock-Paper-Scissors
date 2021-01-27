class Paper extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .paper > .iconContainer {
          background: floralwhite;
          padding: 20px;
          border-radius: 100%;
          box-shadow: inset 0px 5px 1px 0px #b8bed2;
        }

        .paper {
					padding: 20px;
					border-radius: 100%;
					box-shadow: inset 0px -7px 0px 0px #2945c3;
          background: radial-gradient(
            farthest-corner at bottom,
            hsl(230, 89%, 62%) 60%,
						hsl(230, 89%, 65%) 80%
					);
        }

        .paper .icon {
          background-size: auto;
          background-position: center;
          background-repeat: no-repeat;
          padding: 40px;
					background-image: url(images/icon-paper.svg);
        }

        .paper:hover {
          box-shadow: 0px 0px 20px 8px #2945c3;
          cursor: pointer;
        }
      </style>

      <div id="paper" class="paper">
      	<div class="iconContainer">
        	<div class="icon"></div>
      	</div>
    	</div>
    `;
  }
}

customElements.define('paper-component', Paper);

class Scissors extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .scissors > .iconContainer {
          background: floralwhite;
          padding: 20px;
          border-radius: 100%;
          box-shadow: inset 0px 5px 1px 0px #b8bed2;
        }

        .scissors {
          padding: 20px;
          border-radius: 100%;
          box-shadow: inset 0px -7px 0px 0px #c76c1b;
          background: radial-gradient(
            farthest-corner at bottom,
            hsl(39, 89%, 49%) 60%,
            hsl(40, 84%, 53%) 80%
          );
        }

        .scissors .icon {
          background-size: auto;
          background-position: center;
          background-repeat: no-repeat;
          padding: 40px;
          background-image: url(images/icon-scissors.svg);
        }

        .scissors:hover {
          box-shadow: 0px 0px 20px 8px #c76c1b;
          cursor: pointer;
        }
      </style>

      <div id="scissors" class="scissors">
        <div class="iconContainer">
          <div class="icon"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('scissors-component', Scissors);
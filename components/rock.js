class Rock extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .rock > .iconContainer {
          background: floralwhite;
          padding: 20px;
          border-radius: 100%;
          box-shadow: inset 0px 5px 1px 0px #b8bed2;
        }

        .rock {
          padding: 20px;
          border-radius: 100%;
          box-shadow: inset 0px -7px 0px 0px #9e1532;
          background: radial-gradient(
            farthest-corner at bottom,
            hsl(349, 71%, 52%) 60%,
            hsl(349, 70%, 56%) 80%
          );
        }

        .rock .icon {
          background-size: auto;
          background-position: center;
          background-repeat: no-repeat;
          padding: 40px;
          background-image: url(images/icon-rock.svg);
        }

        .rock:hover {
          box-shadow: 0px 0px 20px 8px #9e1532;
          cursor: pointer;
        }
      </style>

      <div id="rock" class="rock">
        <div class="iconContainer">
          <div class="icon"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('rock-component', Rock);
import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Drew Allar";
    this.image = "https://draftwire.usatoday.com/wp-content/uploads/sites/72/2025/01/2193204480.jpg?w=1000&h=600&crop=1";
    this.link = "https://gopsusports.com/sports/football/roster/player/drew-allar";
    this.fancy = false;
    this.description = "Drew Allar is the current Penn State starting QB";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
        background-color: lightblue;
        width: 400px;
        font-family: "Times New Roman", Times, serif;
        padding: 10px;
        border-radius: 10px;
        transition: 0.3s;
      }

      /* Fancy mode styling */
      .card.fancy {
        background-color: gold;
        color: darkblue;
        font-style: italic;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        border: 3px solid darkblue;
      }

      p {
        color: yellow;
        margin: 10px 25px 10px 25px;
        font-family: 'Times New Roman', Times, serif;
      }

      img { 
        width: 200px;
        border: 4px solid blue;
      }

      .btn {
        color: lightblue;
        background-color: white;
        font-size: 15px;
        margin: 0px 0px 5px 0px;
      }

      .btn:focus,
      .btn:hover {
        background-color: blue;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="card ${this.fancy ? 'fancy' : ''}">
        <h1 class="cardheader"><b>${this.title}</b></h1>
        <img src=${this.image} alt=${this.title} />
        <p>
          <slot></slot> ${this.description ? html`<em>${this.description}</em>` : ''}
        </p>
        <a href=${this.link} target="_blank">
          <button class="btn"><em>Details</em></button>
        </a>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
      description: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

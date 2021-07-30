import React, { Component } from "react";
import "./adminPanel.css";
function func() {
  console.log("waaaaa3");
}

export { func };

class AdminPanel extends Component {
  state = {
    // Here's a list of the cards you're using

    inputs: {
      1: {
        show: false,
      },
    },

    cards: {
      1: {
        show: true,
        text: "Thought Archives",
        src: "https://visualpharm.com/assets/224/Folder-595b40b85ba036ed117dd27b.svg",
      },
      2: {
        show: true,
        text: "Incoming Requests",
        src: "https://visualpharm.com/assets/168/Read%20Message-595b40b75ba036ed117d88f5.svg",
      },
      3: {
        show: true,
        text: "Create New",
        src: "https://visualpharm.com/assets/375/Create-595b40b75ba036ed117d7bbf.svg",
      },
      4: {
        show: true,
        text: "Your Community",
        src: "https://static.thenounproject.com/png/5040-200.png",
      },
    },
    showNav: false,
  };
  click = (id) => {
    const cards = Object.create(this.state.cards);
    let showNav = false;
    for (let key in this.state.cards) {
      // Here we just toggle the show property!
      if (key !== id) {
        cards[key].show = !cards[key].show;
        showNav = !cards[key].show;
      }
    }
    this.setState({ cards, showNav });
  };
  myinputs() {
    return <div>okkk</div>;
  }

  render() {
    const { cards, showNav, inputs } = this.state;
    console.log(this.state);
    let currentCards = [];
    for (let key in cards) {
      currentCards.push(
        <Card
          key={key}
          id={key}
          text={cards[key].text}
          show={cards[key].show}
          src={cards[key].src}
          click={this.click}
        />
      );
    }
    return (
      <div className="container">
        {showNav ? <nav>Your Nav(style it however your want!</nav> : null}
        <div className="grid-container">{currentCards}</div>
      </div>
    );
  }
}

export default AdminPanel;

function Card({ click, show, id, text, src }) {
  if (!show) return null;

  return (
    <div className="col-sm-6 ">
      <a href="#" />

      <div className="box-part text-center">
        <div className="title" onClick={(e) => click(id)}>
          <img className="card-img-top" src={src} alt=" image" />
        </div>
        <div className="text">
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
}

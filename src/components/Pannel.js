import React, { Component } from "react";
import Flippy from "react-flippy";
import "./style.css";
import "./adminPanel.css";
import Inpt from "./Minputs";


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
 <div className="grid-containing" style = {{ marginLeft: '11.9rem' }}>
<form>
                <h4 style = {{ textAlign: 'left' }}>Orange Digital<br></br> 
                    Center Virtual Tour</h4><h4 style = {{ color: 'orange', textAlign: 'left' }}>Tunisia</h4>
<p style = {{ textAlign: 'left' }}>Enable and edit the active programs avatars, add a chat file and events link and don't forget to update!</p>
                <div  style = {{ textAlign: 'left' }} className="form-group">
                    <label>Event Link</label>
                    <input type="text" className="form-control" placeholder="Enter link" />
                </div>

                

                <button type="submit"  style = {{background:'#FF7900',color:"black",border:"20px"}}  className="btn btn-primary btn-block">Update</button>
                
            </form>
     
    



      <div className="container">
        
        <div className="grid-container">
            
            
            {currentCards}
        
        {showNav ? <nav>
            <div className="gridding">
            <Inpt/>
            <Inpt/>
            <Inpt/>
            <Inpt/>
            <Inpt/>
            <Inpt/>

            </div>

        </nav> : null}
        </div>
      </div>
      </div>

    );
  }
}

export default AdminPanel;

function Card ({ click, show, id, text, src }) {
  if (!show) return null;

  return (
    <div className="col-sm-10 ">
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
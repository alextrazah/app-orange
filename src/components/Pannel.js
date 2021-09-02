import React, { Component } from "react";
//import Flippy from "react-flippy";
import "./style.css";
import "./adminPanel.css";
import Inpt from "./Minputs";
import Drop from "./Drop";


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
        src: "https://i.imgur.com/2WcqQ0j.png",
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
    const { cards, showNav } = this.state;
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
 <div className="grid-containing" style = {{ marginLeft: '15.9rem',marginTop: '6.9rem' }}>
<form style = {{marginTop: '4.9rem' }}>
                <h4 style = {{ textAlign: 'left' }}>Orange Digital<br></br> 
                    Center Virtual Tour</h4><h4 style = {{ color: 'orange', textAlign: 'left' }}>Tunisia</h4>
<p style = {{ textAlign: 'left' }}>Enable and edit the active programs avatars, add a chat file and events link and don't forget to update!</p>
                <div  style = {{ textAlign: 'left' }} className="form-group">
                    <label>Event Link</label>
                    <input style = {{color:"black",  borderRadius: "1px"}} type="text" className="form-control" placeholder="Enter link" />
                </div>

                

                <button type="submit"  style = {{background:'#FF7900',color:"black",border:"20px",  borderRadius: "1px"}}className="btn btn-primary btn-block">Update</button>
                
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
            <div > <span className="row" style = {{ marginRight: '180px', display: 'inline',fontWeight: 'bold'}}>Chat File</span>
            <Drop/>
            </div>
            <div > <span className="row" style = {{ marginRight: '180px',fontWeight: 'bold'}}>Online
            



           </span>
            
            <p style = {{fontSize: '11px'}}>Enable this status to add programs


            <label style={{marginLeft:"20px",margintTop:"200px"}} className="switch">
 

 <input type="checkbox"></input>
 <span class="slider"></span>
</label>
          

            
            </p>
            <button type="submit"  style = {{background:'black',color:"white",border:"20px"}}  className="btn btn-primary btn-block">Save</button>

            <button type="submit"  style = {{background:'white',color:"black",border:"20px"}}  className="btn btn-primary btn-block">Update</button>

            
            
            </div>
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
    <div style = {{ width: '250px' }} className="col-sm-11">
<h4>Coding School</h4>
    <h6 class="bubble bubble-outer-dot yarab"> &ensp; &ensp;  online</h6>
    

      <div className="box-part text-center">
        <div className="title" onClick={(e) => click(id)}>
          <img className="card-img-top" style = {{ width: '180px', height: '280px' }} src={src} alt="carding" />
        </div>
        <div>
        
          <button id="boutnas" onClick={(e) => click(id)} >Edit Avatar</button>
        </div>
      </div>
    </div>
  );
}
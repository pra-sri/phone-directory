import React, { Component } from "react";
import Header from "./Header";
import './App.css';

// let subscribers = [
    //   {
    //     id: 1,
    //     name: "Govind",
    //     phone: "1081081081"
    //   },
    //   {
    //     id: 2,
    //     name: "Krishna",
    //     phone: "7898765403"
    //   },
    //   {
    //     id: 3,
    //     name: "Murari",
    //     phone: "9812095689"
    //   }

    // ]

class App extends Component {

  constructor()
  {
    super();
    this.state = {
      subscribersListToShow : []
    }
  }
 
  render() {    
    return (
      <div>
        <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {
            this.state.subscribersListToShow.map(sub => {
              return <div className="grid-container" key={sub.id}>
                <span className="grid-item ">{sub.name}</span>
                <span className="grid-item ">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn"
                  >
                    Delete
                  </button>
                </span>
              </div>
            })
          }





        </div>
      </div>


    );
  }
}

export default App;

import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'abcd',
                phone: '889876677887'
            },
            {
                id: 2,
                name: 'efgh',
                phone: '1234567890'

            }
            ]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0 ;
        subscriberList.forEach( function (subscriber, index) {
            if (subscriber.id=subscriberId){
                subscriberIndex = index ;
            }
        }, this );

        let newSubscribers = subscriberList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState( {subscribers : newSubscribers} );
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length > 0) {
            newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        this.setState({ subscriberList: subscriberList });
    }

    render() {
        return (

            <Router>
                <div>
                <Routes >
                    <Route exact  path='/' element ={<ShowSubscribers subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path='/add' element ={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
                </Routes>
                </div>
            </Router>
        )
    }

}

export default PhoneDirectory;
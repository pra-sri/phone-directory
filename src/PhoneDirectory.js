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
                    <Route exact  path='/' element ={<ShowSubscribers subscriberList={this.state.subscriberList} />} />
                    <Route exact path='/add' element ={<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />} />
                </Routes>
                </div>
            </Router>
        )
    }

}

export default PhoneDirectory;
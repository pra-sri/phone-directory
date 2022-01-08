import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscribers";
class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscriberList: [{
                id:1,
                name:'abcd',
                phone: '889876677887'
            },
            {
                id : 2,
                name : 'efgh',
                phone : '1234567890'

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
        this.setState( {subscriberList: subscriberList});
        console.log(this.state.subscriberList);
    }

    render() {
        return (
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscriber subscriberList={this.state.subscriberList}/>
        )
    }

}

export default PhoneDirectory;
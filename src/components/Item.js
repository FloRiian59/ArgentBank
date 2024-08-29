import React from "react";
import '../css/Item.css'

function Item() {
    const featuresItem = [
        {
            "id": "1",
            "image": require("../assets/images/icon-chat.png"),
            "imageAlt": "Chat Icon",
            "title": "You are our #1 priority",
            "description": "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            "id": "2",
            "image": require("../assets/images/icon-money.png"),
            "imageAlt": "Money Icon",
            "title": "More savings means higher rates",
            "description": "The more you save with us, the higher your interest rate will be!"
        },
        {
            "id": "3",
            "image": require("../assets/images/icon-security.png"),
            "imageAlt": "Security Icon",
            "title": "Security you can trust",
            "description": "We use top of the line encryption to make sure your data and money is always safe."
        }
    ];

    return (
        <div className="feature-list">
            {featuresItem.map(item => (
                <div key={item.id} className="feature-item">
                    <img src={item.image} alt={item.imageAlt} className="feature-icon" />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Item;

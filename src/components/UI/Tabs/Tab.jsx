import React, { useState, useContext } from 'react';
import Button from "../../UI/Buttons/Button";
import './Tab.css';
import { CartContext } from '../../../context/CartContext'
import { OrderContext } from '../../../context/OrderContext'
import CartTotal from '../../Carts/CartTotal';

const Tabs = ({ tabs, defaultTab, children }) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);
    const { carts } = useContext(CartContext);
    const { orders } = useContext(OrderContext);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabContents = React.Children.toArray(children);
    const activeIndex = tabs.indexOf(activeTab);

    return (
        <section className="section">
            <div className="container">
                <div className='profile-action-box'>
                    <div className='profile-action'>
                        {tabs.map(tab => (
                            <Button
                                key={tab}
                                className={`tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </Button>
                        ))}
                    </div>
                    <div className="tab-content">
                        {tabContents[activeIndex]}
                    </div>
                </div>
                <div>
                    {(activeTab === "Carts" && carts.length > 0) && <CartTotal cartItems={carts} />}
                    {(activeTab === "Orders" && orders.length > 0) && <CartTotal cartItems={orders} />}
                </div>
            </div>
        </section>
    );
};

export default Tabs;

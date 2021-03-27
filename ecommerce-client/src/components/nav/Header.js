import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
        ReadOutlined, GiftOutlined, 
        HomeOutlined, NotificationOutlined, 
        ProfileOutlined, ShoppingCartOutlined, 
        MobileOutlined, UserOutlined, SkinOutlined,
        LaptopOutlined, UserAddOutlined
    } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu; 


const Header = () => {
    const [ current, setCurrent ] = useState('home');

    const handleClick = (e) => {
        setCurrent(e.key);
    };

    return (
            <Menu onClick={ handleClick } selectedKeys={[current]} mode="horizontal">
                <Item key="home" icon={<HomeOutlined />}>
                    <Link to = "/">Home</Link>
                </Item>
                <Item key="new" icon={<NotificationOutlined />}>
                    <Link to = "/newarrivals">New Arrivals</Link>
                </Item>
                <Item key="deals" icon={<GiftOutlined />}>
                    <Link to = "/deals">Today's Deals</Link>
                </Item>
                <Item key="electronics" icon={<LaptopOutlined />}>
                    <Link to = "/electronics">Electronics</Link>
                </Item>
                <Item key="fashion" icon={<SkinOutlined />}>
                    <Link to = "/fashion">Fashion</Link>
                </Item>
                <Item key="mobiles" icon={<MobileOutlined />}>
                    <Link to = "/mobiles">Mobiles</Link>
                </Item>
                <Item key="books" icon={<ReadOutlined />}>
                    <Link to = "/books">Books</Link>
                </Item>

                <Item key="cart" icon={<ShoppingCartOutlined />} className = "float-right">
                    <Link to = "/cart">Cart</Link>
                </Item>
                <Item key="register" icon={<UserAddOutlined />} className = "float-right" >
                <   Link to = "/register">Register</Link>
                </Item>
                <Item key="login" icon={<UserOutlined />} className = "float-right">
                    <Link to = "/login">Login</Link>
                </Item>
               
                <SubMenu key="SubMenu" icon={<ProfileOutlined /> } title="Username" className = "float-right">
                        <Item key="account">
                            <Link to = "/account">Your Account</Link>
                        </Item>
                        <Item key="orders">
                        <Link to = "/orders">Your Orders</Link>
                        </Item>
                </SubMenu>
            </Menu>
        )
};



export default Header;
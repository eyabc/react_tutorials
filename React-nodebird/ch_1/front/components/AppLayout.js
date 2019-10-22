import React from 'react'
import Link from 'next/link'
import { Menu, Input, Row, Col, Card, Avatar, } from 'antd'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
const dummy = {
    nickname: '제로초',
    Post: [],
    following: [],
    follower: [],
    isLoggedIn: false,
}
const AppLayout = ({ children }) => {
    return <div>
        <Menu mode="horizontal">
            <Menu.Item key="home"><Link href="/"><a>Nodebird</a></Link></Menu.Item>
            <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
            <Menu.Item key="search">
                <Input.Search enterButton style={{ verticalAlign: 'middle' }}></Input.Search>
            </Menu.Item>
        </Menu>
        <Row>
            <Col xs={24} md={6}>
                {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
            </Col>
            <Col xs={24} md={12}>{children} </Col>
            <Col xs={24} md={6}>
                <Link href="https://www.zerocho.com" ><a target="_blank">Made by Zerocho</a></Link>
            </Col>
        </Row>

    </div>
}

export default AppLayout
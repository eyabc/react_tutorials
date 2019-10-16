import React from 'react'
import Link from 'next/link'
import { Menu, Input, Button, Row, Col, Card, Avatar } from 'antd'

const dummy = {
    nickname: '제로초',
    Post: [],
    following: [],
    follower: []
}
const AppLayout = ({children}) => {
    return <div>
        <Menu mode="horizontal">
            <Menu.Item key="home"><Link href="/"><a>Nodebird</a></Link></Menu.Item>
            <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
            <Menu.Item key="search">
                <Input.Search enterButton style={{ verticalAlign: 'middle'}}></Input.Search>
            </Menu.Item>
        </Menu>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        <Row>
            <Col xs={24} md={6}>
                <Card
                    actions={[
                        <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                        <div key="following">following<br />{dummy.following.length}</div>,
                        <div key="follower">follower<br />{dummy.follower.length}</div>,
                    ]}
                >
                    <Card.Meta
                        avatar={<Avatar>{dummy.nickname[ 0]}</Avatar>}
                        title={dummy.nickname}
                    />
                </Card>
            </Col> 
            <Col xs={24} md={12}>{
                children}
            </Col> 
            <Col xs={24} md={6}>
                3번째
            </Col> 
        </Row>
        
    </div>
}

export default AppLayout
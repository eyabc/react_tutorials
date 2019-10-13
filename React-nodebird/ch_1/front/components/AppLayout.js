import React from 'react'
import Link from 'next/link'
import { Menu, Input, Button } from 'antd'

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
        {children}
    </div>
}

export default AppLayout
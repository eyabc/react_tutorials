import React from 'react'
import { Form, Input, Button, Card, Icon, Avatar } from 'antd'
import PropTypes from 'prop-types'
const PostCard = ({ post }) => {
    return (
        <>
            <Card
                key={+post.createdAt}
                cover={post.img && <img alt="example" src={post.img} />}
                actions={[
                    <Icon type="retweet" key="retweet" />,
                    <Icon type="heart" key="heart" />,
                    <Icon type="message" key="message" />,
                    <Icon type="ellipsis" key="ellipsis" />,
                ]}
                extra={<Button>팔로우</Button>}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.contents}
                />
            </Card>
        </>
    )
}
PostCard.PropTypes = {
    // 객체안에 상세적으로 
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object
    })
}
export default PostCard
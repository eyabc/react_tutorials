import React from 'react'

const UserProfile = () => {
    return
    <>
        <Card
            actions={[
                <div key="twit">짹짹<br />{dummy.Post.length}</div>,
                <div key="following">following<br />{dummy.following.length}</div>,
                <div key="follower">follower<br />{dummy.follower.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
            />
        </Card>
    </>
}

export default UserProfile
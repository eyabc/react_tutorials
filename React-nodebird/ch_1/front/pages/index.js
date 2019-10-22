import React from 'react'
import Link from 'next/link'
import { Form, Input, Button, Card, Icon, Avatar } from 'antd'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: "은영"
        },
        contents: '첫번쨰 게시글 ',
        img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F770139154898382848%2FndFg-IDH_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fgooglekorea&docid=guw9br3hJdUmtM&tbnid=YV4uASbvj1Ln4M%3A&vet=10ahUKEwi52qiQl6_lAhWH62EKHSyWBCEQMwhxKAIwAg..i&w=400&h=400&bih=726&biw=1535&q=%EA%B5%AC%EA%B8%80&ved=0ahUKEwi52qiQl6_lAhWH62EKHSyWBCEQMwhxKAIwAg&iact=mrc&uact=8'

    }]
};

const Home = () => {
    return (
        <div>
            {dummy.isLoggedIn && <PostForm dummy={dummy} />}
            {dummy.mainPosts.map(c => <PostCard key={c} post={c} />)}
        </div>
    )
}

export default Home
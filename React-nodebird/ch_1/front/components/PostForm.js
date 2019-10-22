import React from 'react'
import { Input, Icon, Form, Button, List, Card } from 'antd'

const PostForm = ({ dummy }) => {
    return (
        <Form encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" hidden />
                <Button>이미지 업로드 </Button>
                <Button type="primary" style={{ float: 'right' }}>짹쨱 </Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    return (
                        <div key={v} style={{ display: 'inline-block' }} >
                            <img src={'http://localhost:3000/' + v} stype={{ width: '200px' }} alt={v} />
                        </div>
                    )
                })}
                <Button>제거</Button>
            </div>
        </Form>
    )
}

export default PostForm
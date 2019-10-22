import React, { useState, useCallback } from 'react'
import {  Input, Button, Form } from 'antd'
import Link from 'next/link'
import { useInput } from '../pages/signup'
const LoginForm = () => {
    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('')
    const onSubmitForm = useCallback(e => {
        e.preventDefault()
        console.log({id, password})
    }, [id, [password]])
    return (
        <Form onSubmit={onSubmitForm}>
                        <div>
                            <label htmlFor="user-id">아이디</label>
                            <br />
                            <Input name="user-id" required></Input>
                            {/* <Input name="user-id" value={userId} onChange={onChangeId} required></Input> */}
                        </div>
                        <div>
                            <label htmlFor="user-pass">패스워드</label>
                            <br />
                            <Input name="user-pass" required></Input>
                            {/* <Input name="user-pass" value={userPass} onChange={onChangePassword} required></Input> */}
                        </div>
                        <div>
                            <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                        </div>
            </Form>
    )
}

export default LoginForm
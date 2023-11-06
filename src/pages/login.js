import { Button, Divider, Form, Input, Typography, message } from 'antd';
import React from 'react';
import '../styles/login.css';
import FormItem from 'antd/es/form/FormItem';
import { FacebookOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';

function Login() {
    const login = () => {
        message.success('Login success');
    }
    return (
        <div className="loginBg">
            <Form className='loginForm' onFinish={login}>
                <Typography.Title>Well come</Typography.Title>
                <FormItem rules={[{
                    required: true,
                    type: 'email',
                    message: 'Please enter valid email',
                },]} label='Email' name={'myEmail'}>
                    <Input placeholder="email" />
                </FormItem>
                <FormItem rules={[{
                    required: true,

                    message: 'Please enter valid password',
                },]} label='Password' name={'myPassword'}>
                    <Input.Password placeholder="password" />
                </FormItem>
                <Button type='primary' htmlType='submit' block>Login</Button>
                <Divider style={{ borderColor: 'black' }}>
                    or Login with
                </Divider>
                <div className='socialLogin'>
                    <GoogleOutlined className='socialIcon' onClick={login} style={{ color: 'red' }} />
                    <FacebookOutlined className='socialIcon' onClick={login} style={{ color: 'blue' }} />
                    <TwitterOutlined className='socialIcon' onClick={login} style={{ color: 'cyan' }} />
                </div>
            </Form>
        </div>
    );
}

export default Login;

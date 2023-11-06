import { Button, Col, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'

export default function Login() {
    return (
        <Row justify={'center'} style={{ height: 800 }}>
            <Col span={8}>
                <Title style={{ textAlign: 'center', }} level={3}>FunChat</Title>
                <Button style={{ width: '100%', marginBottom: 5 }}>Đăng nhập bằng Google</Button>
                <Button style={{ width: '100%' }}>Đăng nhập bằng facebook</Button>
            </Col>
        </Row>
    )
}

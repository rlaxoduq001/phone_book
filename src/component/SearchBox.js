import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'

export const SearchBox = () => {
  return (
    <div>
        <Row>
            <Col lg={8}>
                <Form.Control type="text" placeholder="이름을 입력하세요." />
            </Col>
            <Col lg={4}>
                <Button>찾기</Button>
            </Col>
        </Row>
    </div>
  )
}

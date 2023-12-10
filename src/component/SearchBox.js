import React, { useState } from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

export const SearchBox = () => {

    let [keyword, setKeyword] = useState("");
    let dispatch = useDispatch();
    
    const searchByName = () => {
        dispatch({ type: "SEARCH_USERNAME", payload: { keyword } });
    }

    return (
        <div>
            <Row>
                <Col lg={8}>
                    <Form.Control type="text" placeholder="이름을 입력하세요." onChange={(event) => setKeyword(event.target.value)}/>
                </Col>
                <Col lg={4}>
                    <Button onClick={()=>{searchByName()}}>찾기</Button>
                </Col>
            </Row>
        </div>
    )
}

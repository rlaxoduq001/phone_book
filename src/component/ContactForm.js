import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const [name, SetName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);

    const addContact = (e) => {
        e.preventDefault();
        dispatch({type:"ADD_CONTACT" ,payload:{name:name, phoneNumber:phoneNumber}})
    }

  return (
    <div>
        <Form onSubmit={(e)=>addContact(e)}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="이름을 입력하세요." 
                    onChange={(e)=>SetName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control 
                    type="number" 
                    placeholder="전화번호를 입력하세요." 
                    onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit" >
                추가
            </Button>
        </Form>
    </div>
  )
}

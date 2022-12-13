import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact.jpg';
import React from 'react'


export const Contact = () => {

    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const changeFirstName = (e) => {
        onFormUpdate('firstName', e.target.value)
    }
    const changeLastName = (e) => {
        onFormUpdate('lastName', e.target.value)
    }
    const changeEmailAddress = (e) => {
        onFormUpdate('email', e.target.value)
    }
    const changePhoneNum = (e) => {
        onFormUpdate('phone', e.target.value)
    }
    const changeMessage = (e) => {
        onFormUpdate('message', e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        })
        setButtonText("Send");
        let result = response.json;
        setFormDetails(formInitialDetails);
        if(result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully!'})
        }else {
            setStatus({ success: false, message: 'Something wrong, please try again later!'})
        }
    }

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='img' />
                </Col>
                <Col md={6}>
                    <h2>Contact me now</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={changeFirstName} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={changeLastName} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='email' value={formDetails.email} placeholder='Email Address' onChange={changeEmailAddress} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type='tel' value={formDetails.phone} placeholder='Phone Num.' onChange={changePhoneNum} />
                            </Col>
                            <Col>
                                <textarea rows={6} value={formDetails.message} placeholder='Message Please' onChange={changeMessage} />
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "Failed" : "Success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

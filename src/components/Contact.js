import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact.jpg';
import React from 'react'
import emailjs from '@emailjs/browser'


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

    const sendEmail = async (e) => {
        e.preventDefault()
        setButtonText("Sending...");
        const firstName = formDetails.firstName;
        const lastName = formDetails.lastName;
        const email = formDetails.email;
        const phone = formDetails.phone;
        const message = formDetails.message;
        const templateParams = {
            to_name: 'Wilson Shean',
            from_name: firstName + lastName,
            message: message,
            reply_to: email,
            phone: phone
        };
        let response = await emailjs.send("service_eo2czsu", "template_4qlvqcr", templateParams, "VACIso3FT4AJt_17d").then((res) => { console.log(res) });
        setButtonText("Send");
        let result = await response.status;
        setFormDetails(formInitialDetails);
        if (result === 200) {
            setStatus({ success: true, message: 'Message sent successfully'});
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        }
    }

  return (
    <section className='contact' id='contact' data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
    >
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={contactImg} alt='img' />
                </Col>
                <Col md={6}>
                    <h2>Contact me now</h2>
                    <form onSubmit={sendEmail}>
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

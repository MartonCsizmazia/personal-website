import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <ContactContainer>
            <div className="section-container">
                <h2>Kapcsolat</h2>
                <p>Keress bátran az alábbi csatornákon.</p>
                <div className="contact-methods">
                    <a className="contact" href="tel:+36303165634">
                        +36303165634
                        <FontAwesomeIcon icon={faPhone}/>
                    </a>
                    <a className="contact" href="https://www.m.me/csizmazia.marton/">
                        Messenger
                        <FontAwesomeIcon icon={faFacebookMessenger}/>
                    </a>
                    <a className="contact" href="https://www.instagram.com/csizmaziam/">
                        Instagram
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </div>
            </div>
        </ContactContainer>
    );
};

export default Contact;

const ContactContainer = styled.div`
    text-align: center;
    padding: 100px 0;
    background-color: #8490c8;
    font-family: 'Poppins', sans-serif;

    h2 {
        font-size: 3rem;
        color: #333;
        margin-bottom: 40px;
        font-weight: bold;
        font-family: 'Playfair Display',serif;
    }

    p {
        font-size: 2rem;
        margin: 40px 0;
        color: #fff;
    }

    .contact-methods{
        display: flex;
        justify-content: space-evenly;
        color: #fff;
    }

    .contact{
        display: flex;
        flex-direction: column-reverse;
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
    
    .svg-inline--fa{
        margin-bottom: 1rem;
        font-size: 35px;
    }
`;

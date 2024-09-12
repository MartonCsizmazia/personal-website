import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../biology/3a4de5.webp';

const Study = () => {
    return (
        <StudyContainer>
            <div className="section-container">
                <h2>Tanulás</h2>
                <p>Explore our comprehensive resources for high school biology.</p>
                {/*<button>Start Learning</button>*/}
            </div>
        </StudyContainer>
    );
};

export default Study;

const StudyContainer = styled.div`
    text-align: center;
    //background-color: #f0f4f8;
    background-image: url(${backgroundImage});
    padding: 100px 0;
    font-family: 'Poppins', sans-serif;

    h2 {
        font-size: 3rem;
        color: #333;
        margin-bottom: 20px;
        font-weight: bold;
        font-family: 'Playfair Display',serif;
    }

    p {
        font-size: 1.5rem;
        margin: 20px 0;
        color: #666;
    }

    button {
        padding: 10px 30px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

import React from 'react';

// Temporary will detaily updated
const ButtonScrollDown = ({ onClick }: any) => {
    return (
        <div className="scroll-down-wrapper">
            <span>Scroll Down</span>
            <button className="scroll-down-button" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-arrow-down-short scroll-down-icon" viewBox="3 4 10 10">
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4" />
                </svg>
            </button>
        </div>
    );
};

export default ButtonScrollDown;

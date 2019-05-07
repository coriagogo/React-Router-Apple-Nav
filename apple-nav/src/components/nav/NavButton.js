import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
    background-color: #313131;
    color: white;
    border: none;
    cursor: pointer;
    margin: 0 30px;
    font-size: 14px;

    &:hover {
        color: lightgray;
    }
    
`

const NavButton = props => {
    return (
        <ButtonStyles>
            {props.text}
        </ButtonStyles>
    )
}

export default NavButton;
import styled from 'styled-components';

export const Container = styled.button`
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.color};
    border-radius: 5px;
    background-color: transparent;
    color: ${props => props.color};
    width: 300px;
    height: 50px;
    outline: none;
    font-size: 24px;
    &:hover {
        font-weight: bold;
        border-width: 3px;
    }
`
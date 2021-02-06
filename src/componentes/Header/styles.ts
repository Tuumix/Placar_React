import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 10vh;
    background-color: ${({theme}) => theme.headerColor};
    padding: 16px;
    align-items: center;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
`

export const SubContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const BtnTheme = styled.button`
    background-color: inherit;
    border: none;
    cursor: pointer;
`

export const ScoreSpan = styled.span`
    font-size: 25px;
    color: ${({theme}) => theme.textColor};
`
import styled from 'styled-components';

export const ScoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.backgroundColor};
    width: 100%;
    height: 88vh;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

export const ButtonContainer = styled.div`
    margin-left: 20px;
    @media (max-width: 700px) {
        margin-top: 20px;
    }
`

export const DevelopedTitleContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: ${({theme}) => theme.backgroundColor};
    height: 2vh;
`

export const DevelopedTitle = styled.p`
    color: ${({theme}) => theme.textColor};
    font-size: 16px;
`
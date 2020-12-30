import styled from 'styled-components';

export const ScoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.backgroundColor};
    width: 100%;
    height: 90vh;

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
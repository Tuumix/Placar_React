import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 60vh;
    background-color: ${({theme}) => theme.headerColor};
    margin-left: 20px;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);

    @media (max-width: 700px) {
        height: 100%;
        width: 80%;
        margin-top: 50px;
    }
`;

export const SubContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const TextPoint = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: ${({theme}) => theme.textColor};
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content:space-around;
`

export const Title = styled.h1`
    font-weight: bold;
`
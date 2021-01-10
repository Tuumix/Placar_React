import React from 'react';
import Button from '@material-ui/core/Button';

import {
    Container,
    SubContainer,
    Pontuacao,
    ButtonContainer
} from './styles';

function Score(props) {
    const {pontuacao, callback} = props;

    console.log('renderinzando');
    return (
        <Container>
            <SubContainer>
                <Pontuacao>{pontuacao}</Pontuacao>
            </SubContainer>
            <ButtonContainer>
                <Button 
                    fullWidth={true}
                    variant="outlined" 
                    color="secondary" 
                    onClick={() => pontuacao > 0 && callback(pontuacao - 1)}
                >-</Button>  
                <Button 
                    style={{marginLeft: 10}}
                    fullWidth={true} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => callback(pontuacao + 1)}
                >+</Button>  
            </ButtonContainer>
        </Container>
    )
}

export default React.memo(Score);
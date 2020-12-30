import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {
    Container,
    SubContainer,
    Pontuacao,
    ButtonContainer
} from './styles';

export default function Score(props) {
    const {pontuacao, callback} = props;
    const [nomeTime, setNome] = useState('');

    return (
        <Container>
            <TextField id="standard-basic" label="Team Name" onChange={(e) => setNome(e.target.value)}/>
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
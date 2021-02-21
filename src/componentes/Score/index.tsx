import React from 'react';
import Button from '@material-ui/core/Button';
import {
    Container,
    SubContainer,
    Point,    
    ButtonContainer
} from './styles';
import { ScoreProps } from './types';

const Score: React.FC<ScoreProps> = ({ point, callback}) => {
    return (
        <Container>
            <SubContainer>
                <Point>{point}</Point>
            </SubContainer>
            <ButtonContainer>
                <Button 
                    fullWidth={true}
                    variant="outlined" 
                    color="secondary" 
                    onClick={() => point > 0 && callback(point - 1)}
                >
                    -
                </Button>  
                <Button 
                    style={{marginLeft: 10}}
                    fullWidth={true} 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => callback(point + 1)}
                >
                    +
                </Button>  
            </ButtonContainer>
        </Container>
    )
}

export default React.memo(Score);
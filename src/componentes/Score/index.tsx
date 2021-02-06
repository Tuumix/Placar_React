import React from 'react';
import Button from '../Button';
import {
    Container,
    SubContainer,
    ButtonContainer,
    TextPoint
} from './styles';

import { minusPointColor, increasePointcolor } from '../../Themes/palette'
import { ScoreProps } from './types';

const Score: React.FC<ScoreProps> = (props) => {
    const {point, callback} = props;

    return (
        <Container>
            <SubContainer>
                <TextPoint>
                    {point}
                </TextPoint>
            </SubContainer>
            <ButtonContainer>
                <Button title="-" color={minusPointColor} callback={() => point > 0 && callback(point - 1)}/>
                <Button title="+" color={increasePointcolor} callback={() => callback(point + 1)}/>
            </ButtonContainer>
        </Container>
    )
}

export default Score;
import React from 'react';
import {
    Container
} from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ title, callback }) => {
    return (
        <Container onClick={() => callback()}>
            <label>{title}</label>
        </Container>
    )
}

export default Button;
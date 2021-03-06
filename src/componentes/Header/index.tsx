import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import {
    Container,
    SubContainer,
    ScoreSpan,
    BtnTheme
} from './styles'
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = (props) => {
    const { value, callback } = props;

    return (
        <Container>
            <SubContainer>
                <ScoreSpan>Score</ScoreSpan>
                <BtnTheme onClick={() => callback(!value)}>
                    {value ? 
                        <EmojiObjectsIcon fontSize='large' style={{color: '#353b48'}}/> : <WbIncandescentIcon fontSize='large' style={{color: '#f5f6fa'}} />}
                </BtnTheme>
            </SubContainer>
        </Container>
    )
}

export default Header;
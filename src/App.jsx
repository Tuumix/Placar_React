import React, {useState} from 'react';
import Header from './componentes/Header';
import {GlobalStyle} from './Themes/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './Themes/theme';
import Score from './componentes/Score';
import {
    ScoreContainer,
    ButtonContainer,
    DevelopedTitleContainer,
    DevelopedTitle
} from './styles';
import Button from '@material-ui/core/Button';

export default function App(){
    const [ponto1, setPonto1] = useState(0);
    const [ponto2, setPonto2] = useState(0);
    const [theme, setTheme] = useState(false);

    function ZerarPontos() {
        setPonto1(0);
        setPonto2(0);
    }

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header value={theme} callback={setTheme}/>
            <ScoreContainer>
                <Score pontuacao={ponto1} callback={setPonto1} />
                <Score pontuacao={ponto2} callback={setPonto2} />
                <ButtonContainer>
                    <Button 
                        variant="contained"
                        size="small" 
                        color="primary" 
                        onClick={ZerarPontos}
                    >Reset</Button>
                </ButtonContainer>
            </ScoreContainer>
            <DevelopedTitleContainer>
                <DevelopedTitle>
                    Developed by Tuumi :)
                </DevelopedTitle>
            </DevelopedTitleContainer>
        </ThemeProvider>
    )
}
import React, {useState} from 'react';
import Header from './componentes/Header';
import {GlobalStyle} from './Themes/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './Themes/theme';
import Score from './componentes/Score';
import { 
    ScoreContainer,
    DevelopedTitleContainer,
    DevelopedTitle
 } from './styles';

export default function App(){
    const [point1, setPoint1] = useState(0);
    const [point2, setPoint2] = useState(0);
    const [theme, setTheme] = useState(false);

    // function ZerarPontos() {
    //     setPonto1(0);
    //     setPonto2(0);
    // }

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header value={theme} callback={setTheme}/>
            <ScoreContainer>
                <Score point={point1} callback={setPoint1} />
                <Score point={point2} callback={setPoint2} />
            </ScoreContainer>
            <DevelopedTitleContainer>
                <DevelopedTitle>
                    Developed by Tuumi :)
                </DevelopedTitle>
            </DevelopedTitleContainer>
        </ThemeProvider>
    )
}
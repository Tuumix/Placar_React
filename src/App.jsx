import React, {useState} from 'react';
import Header from './componentes/Header';
import {GlobalStyle} from './Themes/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './Themes/theme';
import Score from './componentes/Score';
import {ScoreContainer} from './styles';

export default function App(){
    const [team1, setTeam1] = useState('Team #1');
    const [team2, setTeam2] = useState('Team #2');
    const [ponto1, setPonto1] = useState(0);
    const [ponto2, setPonto2] = useState(0);

    const [theme, setTheme] = useState(false);

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header value={theme} callback={setTheme}/>
            <ScoreContainer>
                <Score pontuacao={ponto1} callback={setPonto1} />
                <Score pontuacao={ponto2} callback={setPonto2} />
            </ScoreContainer>
        </ThemeProvider>
    )
}
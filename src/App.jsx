import React, { useState } from 'react';
import Header from './componentes/Header';
import { GlobalStyle } from './Themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes/theme';
import Score from './componentes/Score';
import {
    ScoreContainer,
    DevelopedTitleContainer,
    DevelopedTitle
} from './styles';
import Button from './componentes/Button';

const App = () => {
    const [firstScore, setFirstScore] = useState(0);
    const [secondScore, setSecondScore] = useState(0);
    const [theme, setTheme] = useState(false);

    function resetPoints() {
        setFirstScore(0);
        setSecondScore(0);
    }

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header value={theme} callback={setTheme} />
            <ScoreContainer>
                <Score point={firstScore} callback={setFirstScore} />
                <Score point={secondScore} callback={setSecondScore} />
                <ButtonContainer>
                    <Button title="Reset" callback={resetPoints} />
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

export default App;
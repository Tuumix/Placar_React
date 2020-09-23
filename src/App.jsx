import React, {useState, useRef} from 'react'
import Placar1 from './componentes/placar'
import Placar2 from './componentes/placar'
import './App.css'
import {TextField, Button} from '@material-ui/core';

export default() => {
    const [team1, setTeam1] = useState('Team #1');
    const [team2, setTeam2] = useState('Team #2');
    const [pontuacao, setPonto] = useState(0);
    const childRef = useRef();

    function zerar(){
        setPonto(0);
    }

    return (
        <div className="Main">
            <div className="center">
                <div className="team_names">
                    <TextField
                        InputLabelProps={{
                            style: {
                                color: "#dff9fb"
                            }
                        }}
                        InputProps={{
                            style: {
                                color: "#dff9fb"
                            }
                        }}
                        inputProps={{
                            maxLength: 20
                        }}
                        label="Team #1"
                        id="filled-size-small"
                        variant="filled"
                        size="small"
                        onInput={e => setTeam1(e.target.value)}/>
                    <TextField
                        InputLabelProps={{
                            style: {
                                color: "#dff9fb"
                            }
                        }}
                        InputProps={{
                            style: {
                                color: "#dff9fb"
                            }
                        }}
                        inputProps={{
                            maxLength: 20
                        }}
                        label="Team #2"
                        id="filled-size-small"
                        variant="filled"
                        size="small"
                        maxLength="10"
                        onInput={e => setTeam2(e.target.value)}/>
                </div>
                <div className="placar-components">
                    <Placar1 color="#273c75" team={team1} ref={childRef} pontos={pontuacao}/>
                    <Placar2 color="#3c6382" team={team2} ref={childRef} pontos={pontuacao}/>
                </div>
            </div>
            {/* <Button size="small" onClick={() => childRef.current.zerar()}>Resetar</Button> */}
        </div>
    )
}
import React,{useState} from 'react'
import Placar1 from './componentes/placar'
import Placar2 from './componentes/placar'
import { Button } from '@material-ui/core';

import './App.css'

export default () =>{
    const [pontuacao,setPontos] = useState(0)

    return(
            <div className="Main">
                <div className="grid-placar">
                    <Placar1 color="#273c75" team="team#1" pontuacao={0}/>
                    <Placar2 color="#3c6382" team="team#2" pontuacao={0}/>
                </div>
            </div>
    )
}
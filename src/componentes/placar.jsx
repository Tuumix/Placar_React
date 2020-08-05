import React, {useState} from 'react'
import './placar.css'
import { Button } from '@material-ui/core';

export default (param) => {
    const [pontuacao,setPonto] = useState(0);

    return (
        <div className="placar" style={{backgroundColor: param.color}}>
            <h2>{param.team}</h2>
            <div className="placar-top">
                <h1>{pontuacao}</h1>
            </div>
            <div className="btn-placar">
                <Button style={{backgroundColor:'#f94144', fontSize:'60px'}} size="large" onClick={() => setPonto(pontuacao - 1)}>-</Button>
                <Button style={{backgroundColor:'#16db93', fontSize:'40px'}} size="large" onClick={() => setPonto(pontuacao + 1)}>+</Button>
            </div>
        </div>
    )
}
import React, {useState, useImperativeHandle, forwardRef} from 'react'
import './placar.css'
import { Button } from '@material-ui/core'

export default forwardRef((param, ref) => {
    const [pontuacao,setPonto] = useState(0);

    const zerar = () =>{
        setPonto(0);
    }

    useImperativeHandle(ref, () => {
        return {
         zerar: zerar
        }
     });

    function subtrai_ponto(){
        if(pontuacao > 0){
            setPonto(pontuacao - 1);
        }
    };

    return (
        <div className="placar" style={{backgroundColor: param.color}}>
            <h2>{param.team}</h2>
            <div className="placar-top">
                <h1>{pontuacao}</h1>
            </div>
            <div className="btn-placar">
                <Button style={{backgroundColor:'#f94144', fontSize:'60px'}} size="large" onClick={subtrai_ponto}>-</Button>
                <Button style={{backgroundColor:'#16db93', fontSize:'40px'}} size="large" onClick={() => setPonto(pontuacao + 1)}>+</Button>
            </div>
        </div>
    );
});

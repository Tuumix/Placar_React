import React from 'react'
import Placar1 from '../placar'
import Placar2 from '../placar'
import './cards.css'

export default () =>{
    return(
        <div className="Main">
            <div className="grid-placar">
                <Placar1 color="#273c75" team="team#1"/>
                <Placar2 color="#3c6382" team="team#2"/>
            </div>
        </div>
    )
}
import React, { Component } from 'react';
import twoclub from './PNG/twoclub.png';


class Solitaire extends Component{
    render(){
        return(
            <div class="gameboard">
            <div class="container">
                <div class="deck"></div>
                
                <div class="ace_stack">
                    <div id="spade"></div>
                    <div id="diamond"></div>
                    <div id="club"></div>
                    <div id="heart"></div>
                </div>
            </div>

                <div class="player_stack">
                    <div id="stack1"><img src={twoclub}></img></div>
                    <div id="stack2"><img src={twoclub}></img></div>
                    <div id="stack3"><img src={twoclub}></img></div>
                    <div id="stack4"><img src={twoclub}></img></div>
                    <div id="stack5"><img src={twoclub}></img></div>
                    <div id="stack6"><img src={twoclub}></img></div>
                    <div id="stack7"><img src={twoclub}></img></div>
                </div>
            
            </div>
        )
    }
}

export default Solitaire
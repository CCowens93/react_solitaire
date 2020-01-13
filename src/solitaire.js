import React, { Component } from 'react';


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
                    <div id="stack1"></div>
                    <div id="stack2"></div>
                    <div id="stack3"></div>
                    <div id="stack4"></div>
                    <div id="stack5"></div>
                    <div id="stack6"></div>
                    <div id="stack7"></div>
                </div>
            
            </div>
        )
    }
}

export default Solitaire
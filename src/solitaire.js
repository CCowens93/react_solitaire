import React, { Component } from 'react';


class Solitaire extends Component{
    render(){
        return(
            <div class="container">
                <div class="deck"></div>
                
                <div class="ace_stack">
                    <div id="spade"></div>
                    <div id="diamond"></div>
                    <div id="club"></div>
                    <div id="heart"></div>
                </div>
            
            </div>
        )
    }
}

export default Solitaire
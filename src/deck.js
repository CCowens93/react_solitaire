import React, { Component } from 'react';
import aceclub from './PNG/aceclub.png';
import acediamond from './PNG/aceclub.png';
import aceheart from './PNG/aceheart.png';
import acespade from './PNG/acespade.png';
import twoclub from './PNG/twoclub.png';
import twodiamond from './PNG/twodiamond.png';
import twoheart from './PNG/twodiamond.png';
import twospade from './PNG/twospade.png';
import threeclub from './PNG/threeclub.png';
import threediamond from './PNG/threediamond.png';
import threeheart from './PNG/threeheart.png';
import threespade from './PNG/threespade.png';
import fourclub from './PNG/fourclub.png';
import fourdiamond from './PNG/fourdiamond.png';
import fourheart from './PNG/fourheart.png';
import fourspade from './PNG/fourspade.png';
import fiveclub from './PNG/fiveclub.png';
import fivediamond from './PNG/fivediamond.png';
import fiveheart from './PNG/fiveheart.png';
import fivespade from './PNG/fivespade.png';
import sixclub from './PNG/sixclub.png';
import sixdiamond from './PNG/sixdiamond.png';
import sixheart from './PNG/sixheart.png';
import sixspade from './PNG/sixspade.png';
import sevenclub from './PNG/sevenclub.png';
import sevendiamond from './PNG/sevendiamond.png';
import sevenheart from './PNG/sevenheart.png';
import sevenspade from './PNG/sevenspade.png';
import eightclub from './PNG/eightclub.png';
import eightdiamond from './PNG/eightdiamond.png';
import eightheart from './PNG/eightheart.png';
import eightspade from './PNG/eightspade.png';
import nineclub from './PNG/nineclub.png';
import ninediamond from './PNG/ninediamond.png';
import nineheart from './PNG/nineheart.png';
import ninespade from './PNG/ninespade.png';
import tenclub from './PNG/tenclub.png';
import tendiamond from './PNG/tendiamond.png';
import tenheart from './PNG/tenheart.png';
import tenspade from './PNG/tenspade.png';
import jackclub from './PNG/jackclub.png';
import jackdiamond from './PNG/jackdiamond.png';
import jackheart from './PNG/jackheart.png';
import jackspade from './PNG/jackspade.png';
import queenclub from './PNG/queenclub.png';
import queendiamond from './PNG/queendiamond.png';
import queenheart from './PNG/queenheart.png';
import queenspade from './PNG/queenspade.png';
import kingclub from './PNG/kingclub.png';
import kingdiamond from './PNG/kingdiamond.png';
import kingheart from './PNG/kingheart.png';
import kingspade from './PNG/kingspade.png';

const images = [
    {src: aceclub}, {src: acediamond}, {src: aceheart}, {src: acespade}, {src: twoclub}, {src: twodiamond}, {src: twoheart}, {src: twospade}, {src: threeclub}, {src:threediamond}, {src: threeheart},
    {src: threespade}, {src:fourclub}, {src:fourdiamond}, {src:fourheart}, {src: fourspade}, {src: fiveclub}, {src: fivediamond}, {src: fiveheart}, {src: fivespade}, {src: sixclub}, {src: sixdiamond}, 
    {src: sixheart}, {src: sixspade}, {src: sevenclub}, {src: sevendiamond}, {src: sevenheart}, {src: sevenspade}, {src: eightclub}, {src: eightdiamond}, {src: eightheart}, {src: eightspade}, {src: nineclub}, {src: ninediamond},
    {src: nineheart}, {src: ninespade}, {src: tenclub}, {src: tendiamond}, {src: tenheart}, {src: tenspade}, {src: jackclub}, {src: jackdiamond}, {src: jackheart}, {src: jackspade}, {src: queenclub}, {src: queendiamond},
    {src: queenheart}, {src: queenspade}, {src: kingclub}, {src: kingdiamond}, {src: kingheart}, {src: kingspade}
]
class deck extends Component {

    render() {


        const imagemap = images.map((image) => 
            <img src={image.src} width={20} height={20} alt="card deck"></img>
        )

        return (
            <div>
                {imagemap}
            </div>
        )
    }
}

export default deck
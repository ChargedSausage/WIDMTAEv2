import './style.css';
import { useState } from 'react';

function PlayerButton(props) {

    const [player, setPlayer] = useState(props.player);

    return (
        <button className="playerButton"
         onClick={() => {props.onClick(props.index); console.log('eyyyy', props.index);}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="1rem" height="1rem" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <span className="name">{player.name}</span>
            <span>
            </span>
        </button>
    );
}

export default PlayerButton;

import './style.css';

import PlayerButton from '../PlayerButton';
import { useState } from 'react';

function PlayerEditor(props) {
    const [players, setPlayers] = useState(props.players);
    const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(players ? 0 : -1);
    const [inputName, setInputName] = useState(players[selectedPlayerIndex].name);

    const setPlayer = (playerIndex) => {
        setSelectedPlayerIndex(playerIndex);
        setInputName(players[playerIndex].name);
    }

    const generateName = () => {
        const names = ['James', 'Carl', 'Aagje', 'Pieter', 'Jan', 'Willem', 'Randy', 'Evelien',
                       'Gerard', 'Thomas', 'Jill', 'Klaas', 'Ron', 'Steffie', 'Prins', 'Lenart',
                        ],
              randomIndex = Math.floor(Math.random() * names.length),
              chosenName = names[randomIndex];

              console.log(randomIndex, chosenName);

        return chosenName;
        
    }

    const onSave = () => {
        const playerArray = [...players];
        playerArray[selectedPlayerIndex].name = inputName;
        setPlayers(playerArray);
    }

    const onDelete = () => {
        const playerArray = [...players];
        playerArray.splice(selectedPlayerIndex, 1)
        setPlayers(playerArray);
        setInputName('');
    }

    const onAdd = () => {
        const playerArray = [...players];
        const name = generateName();
        playerArray.push({
            name: name
        });
        console.log(name);
        setPlayers(playerArray);
    } 

    

    let playerIndex = -1;

    return (
        <>
            <div className="idCard">
                <div className="picture" url="http://www.educol.net/photo-nuages-dl28835.jpg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="75" height="75" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </div>
                <div className="info">
                    <label>naam</label>
                    <input 
                        className="name" 
                        value={inputName} 
                        placeholder={players[selectedPlayerIndex].name}
                        onChange={(event) => {
                            setInputName(event.target.value);
                        }}
                    ></input>
                </div>
                <div className="buttonContainer">
                    <button id="saveButton"
                            onClick={onSave}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-floppy" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                        <circle cx="12" cy="14" r="2" />
                        <polyline points="14 4 14 8 8 8 8 4" />
                    </svg>
                    </button>
                    <button id="deleteButton" onClick={onDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className="selector">
                {
                    players.map((player) => {
                        playerIndex++;
                        return (
                            <PlayerButton 
                            key ={player.name}
                            index={playerIndex}
                            onClick={(index) => {
                                setPlayer(index);
                            }} 
                            player={player}/>
                        );
                    })
                }
                <button className="playerButton add"
                       onClick={onAdd}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default PlayerEditor;

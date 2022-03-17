import './style.css';

import PlayerEditor from '../PlayerEditor';
import TestEditor from '../TestEditor';
import { useReducer, useState } from 'react';

function generateName() {
    const molNames = [
        "Yvon", "Milouska", "Inge",
        "Jon", "Kim", "Patrick", 
        "Anne-Marie", "Kees", "Susan",
        "Margriet", "Klaas", "Thomas",
        "Jan", "Merel", "Alina", 
        "Eline", "Pieter", "Hugo",
        "Magda", "Gilles", "Marc",
        "Elisabet", "Emma", "Joeri"
    ]
    const generatedName = molNames[Math.floor(Math.random() * molNames.length)];

    return generatedName;
}

function getUniqueName(names) {
    let looping = true;
    while (looping) {
        let name = generateName();
        if (!names.includes(name)) {
            looping = false;
            return name;
        }
    }
}

function getPlayerNameArray(players) {
    let playerNameArray = [];
    for (let player of players) {
        playerNameArray.push(player.name);
    }
    return playerNameArray;
}

function SeasonEditor() {
    const [players, setPlayers] = useState([]);
    const [activePlayerIndex, setActivePlayerIndex] = useState(null);
    const [templates, setTemplates] = useState([]);
    const [activeTemplate, setActiveTemplate] = useState(null);


    return (
        <div className="seasonEditor">
            <div className="playerColumn">
                <PlayerEditor
                    players={players}
                    activePlayerIndex={activePlayerIndex}
                    key={activePlayerIndex}
                    onPlayerSelect={(index) => {
                        setActivePlayerIndex(index);
                    }}
                    onPlayerSave={(player) => {
                        const playerArray = [...players];
                        playerArray[activePlayerIndex].name = player.name;
                        setPlayers(playerArray);
                    }}
                    onDelete={() => {
                        const playerArray = [...players];
                        playerArray.splice(activePlayerIndex, 1);
                        setPlayers(playerArray);
                    }}
                    onAdd={() => {
                        const name = getUniqueName(getPlayerNameArray(players));
                        const playerArray = [...players];
                        playerArray.push(
                            {
                                index: playerArray.length,
                                name: name
                            }
                        );
                        setPlayers(playerArray);
                    }}
                />
            </div>
            <div className="testColumn">
                <TestEditor
                    templates={templates}
                />
            </div>
        </div>
    );
}

export default SeasonEditor;

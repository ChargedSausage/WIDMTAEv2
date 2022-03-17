import './style.css';

import PlayerEditor from '../PlayerEditor';
import TestEditor from '../TestEditor';
import { useState } from 'react';

function generateName() {
    const molNames = [
        'Yvon',
        'Milouska',
        'Inge',
        'Jon',
        'Kim',
        'Patrick',
        'Anne-Marie',
        'Kees',
        'Susan',
        'Margriet',
        'Klaas',
        'Thomas',
        'Jan',
        'Merel',
        'Alina',
        'Eline',
        'Pieter',
        'Hugo',
        'Magda',
        'Gilles',
        'Marc',
        'Elisabet',
        'Emma',
        'Joeri',
    ];
    const generatedName = molNames[Math.floor(Math.random() * molNames.length)];

    return generatedName;
}

function getUniqueName(names) {
    let looping = true,
        index = 0;
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
    const [activePlayerNames, setActivePlayerNames] = useState(null);
    const [templates, setTemplates] = useState([]);
    const [activeTemplate, setActiveTemplate] = useState(null);

    return (
        <div className='seasonEditor'>
            <div className='playerColumn'>
                <PlayerEditor
                    players={players}
                    activePlayerNames={activePlayerNames}
                    key={activePlayerNames}
                    onPlayerSelect={(name, shiftDown) => {
                        console.log('name', name, 'addKeyDown', shiftDown);
                        if (shiftDown) {
                            if (activePlayerNames.includes(name)) {
                                setActivePlayerNames(activePlayerNames.filter((nameInstance) => nameInstance != name));
                            } else {
                                setActivePlayerNames([...activePlayerNames, name]);
                            }
                        } else {
                            setActivePlayerNames([name]);
                        }
                    }}
                    onPlayerSave={(player) => {
                        const playerArray = [...players];
                        const playerIndex = playerArray.findIndex(
                            (playerInstance) => playerInstance.name == activePlayerNames[0]
                        );

                        if (playerIndex != -1) {
                            playerArray[playerIndex].name = player.name;
                            setPlayers(playerArray);
                            setActivePlayerNames([player.name]);
                        } else {
                            //Hier uiteindelijk waarschuwing
                        }
                    }}
                    onDelete={() => {
                        const playerArray = [...players].filter((player) => {
                            return !activePlayerNames.includes(player.name);
                        });
                        setPlayers(playerArray);
                        setActivePlayerNames([]);
                    }}
                    onAdd={() => {
                        const name = getUniqueName(getPlayerNameArray(players));
                        const playerArray = [...players];
                        playerArray.push({
                            index: playerArray.length,
                            name: name,
                        });
                        setPlayers(playerArray);
                    }}
                />
            </div>
            <div className='testColumn'>
                <TestEditor templates={templates} />
            </div>
        </div>
    );
}

export default SeasonEditor;

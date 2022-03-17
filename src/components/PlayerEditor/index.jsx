import './style.css';

import { useState, useRef } from 'react';
import { SaveIcon, UserIcon, TrashIcon, PlusIcon } from '../icons';

function IdCard(props) {
    const nameInput = useRef(null);

    return (
        <div className="idCard">
            <div className="picture">
                <UserIcon/>
            </div>
            <div className="info">
                <label>naam</label>
                <input className="name" 
                       ref={nameInput}
                       defaultValue={props.name} 
                       placeholder={props.name}/>
            </div>
            <div className="buttonContainer">
                <button id="saveButton"
                        onClick={() => props.onPlayerSave({name: nameInput.current.value})}>
                    <SaveIcon/>
                </button>
                <button id="deleteButton" onClick={() => props.onDelete()}>
                    <TrashIcon/>
                </button>
            </div>
        </div>
    );
}

function PlayerButton(props) {
    return (
        <button className="playerButton"
         onClick={() => {props.onClick(props.index);}}>
            <UserIcon/>
            <span className="name">{props.name}</span>
            <span>
            </span>
        </button>
    );
}

function PlayerSelector(props) {
    return (
        <div className="selector">
            {
                props.players ?
                props.players.map((player) => {
                    return (
                        <PlayerButton 
                        key ={player.name}
                        index={player.index}
                        name={player.name}
                        onClick={() => props.onPlayerSelect(player.index)} />
                    );
                }) : ''
            }
            <button className="playerButton add" onClick={props.onAdd}>
                <PlusIcon/>
            </button>
        </div> 
    );
}

function PlayerEditor(props) {
    return (
        <>
            <IdCard name={props.players != undefined && props.activePlayerIndex != undefined ? props.players[props.activePlayerIndex].name : 'xx'}
                    onPlayerSave = {(player) => props.onPlayerSave(player)}
                    onDelete = {() => props.onDelete()}/>
            <PlayerSelector onPlayerSelect={(index) => {
                                                        props.onPlayerSelect(index);
                                                    }}
                            onAdd={() => props.onAdd()}
                            players={props.players}
            />
        </>
    );
}

export default PlayerEditor;

import './style.css';

import { useState, useRef } from 'react';
import { SaveIcon, UserIcon, TrashIcon, PlusIcon } from '../icons';
import { act } from '@testing-library/react';

function IdCard(props) {
    const nameInput = useRef(null);
    const activePlayerCount = props.activePlayerNames ? props.activePlayerNames.length : 0;

    let playerInputName = null;
    if (props.activePlayerNames) {
        if (props.activePlayerNames.length == 1) {
            playerInputName = props.activePlayerNames[0];
        }
    }

    return (
        <div className='idCard'>
            <div className='picture'>
                <UserIcon />
            </div>
            <div className='info'>
                <label>naam</label>
                <input
                    className='name'
                    ref={nameInput}
                    defaultValue={playerInputName}
                    placeholder={activePlayerCount == 1 ? playerInputName : activePlayerCount + ' spelers'}
                    disabled={activePlayerCount != 1}
                />
            </div>
            <div className='buttonContainer'>
                {activePlayerCount == 1 ? (
                    <button id='saveButton' onClick={() => props.onPlayerSave({ name: nameInput.current.value })}>
                        <SaveIcon />
                    </button>
                ) : (
                    ''
                )}
                {activePlayerCount > 0 ? (
                    <button id='deleteButton' onClick={() => props.onDelete()} disabled={false}>
                        <TrashIcon />
                    </button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

function PlayerButton(props) {
    return (
        <button
            className={'playerButton' + (props.isActive ? ' active' : '')}
            onClick={(event) => {
                props.onClick(props.name, event.shiftKey);
            }}
        >
            <UserIcon />
            <span className='name'>{props.name}</span>
            <span></span>
        </button>
    );
}

function PlayerSelector(props) {
    return (
        <>
            <div className='selector'>
                {props.players
                    ? props.players.map((player) => {
                          const isActive = props.activePlayerNames
                              ? props.activePlayerNames.includes(player.name)
                              : false;
                          return (
                              <PlayerButton
                                  key={player.name}
                                  index={player.index}
                                  name={player.name}
                                  isActive={isActive}
                                  onClick={(name, shiftDown) => {
                                      props.onPlayerSelect(name, shiftDown);
                                  }}
                              />
                          );
                      })
                    : ''}
            </div>
            <button className='playerButton add' onClick={props.onAdd}>
                <PlusIcon />
            </button>
        </>
    );
}

function PlayerEditor(props) {
    let playerInputName = null;
    if (props.activePlayerNames) {
        if (props.activePlayerNames.length == 1) {
            playerInputName = props.activePlayerNames[0];
        }
    }

    return (
        <>
            <IdCard
                activePlayerNames={props.activePlayerNames}
                onPlayerSave={(player) => props.onPlayerSave(player)}
                onDelete={() => props.onDelete()}
            />
            <PlayerSelector
                onPlayerSelect={(name, shiftDown) => {
                    console.log('selector', shiftDown);
                    props.onPlayerSelect(name, shiftDown);
                }}
                onAdd={() => props.onAdd()}
                players={props.players}
                activePlayerNames={props.activePlayerNames}
            />
        </>
    );
}

export default PlayerEditor;

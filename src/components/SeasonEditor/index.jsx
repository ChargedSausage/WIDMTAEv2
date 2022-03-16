import './style.css';

import PlayerEditor from '../PlayerEditor';
import TestEditor from '../testEditor';

function SeasonEditor() {
    return (
        <div className="seasonEditor">
            <div className="playerColumn">
                <PlayerEditor
                    players={
                        [
                            {
                                name: 'Thomas'
                            },
                            {
                                name: 'Tim'
                            },
                            {
                                name: 'Loes'
                            },
                            {
                                name: 'Jill'
                            },
                            {
                                name: 'Max'
                            },
                            {
                                name: 'Annemiek'
                            },
                            {
                                name: 'Maurice'
                            },
                            {
                                name: 'Alexi'
                            }
                        ]
                    }
                />
            </div>
            <div className="testColumn">
                <TestEditor/>
            </div>
        </div>
    );
}

export default SeasonEditor;

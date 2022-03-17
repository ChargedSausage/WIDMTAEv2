import QuestionEditor from '../QuestionEditor';
import './style.css';
import { PlusIcon, ListIcon } from '../icons';

function Choice(props) {
    return (
        <button className="choice">
            <ListIcon/>
            <span>{props.test.index}</span>
        </button>
    );
}

function TestSelector(props) {
    return (
        <div className="testSelector">
            { props.tests ?
            props.tests.map((test) => {
                return <Choice test={test}></Choice>;
            }) : ''}
            <button className="choice add">
                <PlusIcon/>
            </button>
        </div>
    )
}

function TestEditor() {
    return (
        <div className="testEditor">
            <div className="header"> 
                <h2>Test {'x'}:</h2>
                <input type="text" maxLength="25"/>
            </div>
            <div className="questions">
                <QuestionEditor/>
            </div>
            <div className="footer">
                <TestSelector/>
            </div>
        </div>
    )
}

export default TestEditor;
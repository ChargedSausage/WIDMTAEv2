import QuestionEditor from '../QuestionEditor';
import TestSelector from '../testSelector';
import './style.css';

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
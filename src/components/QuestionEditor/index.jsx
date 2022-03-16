import { useState } from 'react';
import './style.css';

function Answer(props) {
    const [isCorrect, setCorrect] = useState(props.correct);

    return (
        <div className="answer">
            <button className={isCorrect ? 'correct' : 'false'}
                    onClick={() => {
                        setCorrect(!isCorrect);
                    }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l5 5l10 -10" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path rotate="45deg" stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
            <input type="text" />
        </div>
    );
}

function AddAnswer() {
    return (
        <div className="addAnswer">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path rotate="45deg" stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </div>
    );
}

function Question(props) {
    return (
        <div className="question">
            <div className="header">
                <span><span className="nr">{props.nr}</span> <span className="question">{props.question}</span></span>
                <span className="buttonContainer"></span>
            </div>
            <div className="answers">
                <Answer answer="Ja" correct={false}/>
                <Answer answer="Nee" correct={true}/>
                <Answer answer="Nee" correct={true}/>
                <Answer answer="Nee" correct={true}/>
                <Answer answer="Nee" correct={true}/>
                <AddAnswer></AddAnswer>
            </div>
        </div>
    );
}

function QuestionEditor() {
    return (
        <>
            <Question nr="1" question="Wat is een vraag?"></Question>
            <Question nr="2" question="Wat is een vraag v2?"></Question>
        </>
    );
}

export default QuestionEditor;
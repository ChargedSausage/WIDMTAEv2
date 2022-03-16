import './style.css';

function Choice(props) {
    return (
        <button className="choice">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list" width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="9" y1="6" x2="20" y2="6" />
                <line x1="9" y1="12" x2="20" y2="12" />
                <line x1="9" y1="18" x2="20" y2="18" />
                <line x1="5" y1="6" x2="5" y2="6.01" />
                <line x1="5" y1="12" x2="5" y2="12.01" />
                <line x1="5" y1="18" x2="5" y2="18.01" />
            </svg>
            <span>{props.number}</span>
        </button>
    );
}

function TestSelector() {
    return (
        <div className="testSelector">
            <Choice number="1"></Choice>
            <Choice number="2"></Choice>
            <Choice number="3"></Choice>
            <Choice number="4"></Choice>
            <Choice number="5"></Choice>
            <Choice number="6"></Choice>
            <Choice number="7"></Choice>
            <Choice number="8"></Choice>
            <Choice number="9"></Choice>
            <Choice number="10"></Choice>
            <button className="choice add">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </button>
        </div>
    )
}

export default TestSelector;
import './style.css';

function Card() {
    return (
        <div className='seasonCard'>
            <div className='cardContent'>
                <div className="userCount counter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--color-main)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    <span>12</span>
                </div>
                <div className="testCount counter">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clipboard-list" width="70" height="70" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--color-main)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                    <line x1="9" y1="12" x2="9.01" y2="12" />
                    <line x1="13" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="9.01" y2="16" />
                    <line x1="13" y1="16" x2="15" y2="16" />
                </svg>
                <span>14</span>
                </div>
            </div>
            <h1>Title</h1>
        </div>
    );
}

export default Card;

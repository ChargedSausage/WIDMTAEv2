import './style.css';

import SeasonCard from '../SeasonCard';

function WelcomePage() {
    return (
        <div className='seasonPage'>
            <div className='header'>
                <h1>
                    <span className='topText'>welkom in</span>
                    <span className='botText'>molhub</span>
                </h1>
            </div>
            <div className='seasonsContainer'>
                <SeasonCard></SeasonCard>
                <SeasonCard></SeasonCard>
                <SeasonCard></SeasonCard>
            </div>
        </div>
    );
}

export default WelcomePage;

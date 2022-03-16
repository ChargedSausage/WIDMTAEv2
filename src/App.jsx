import './colors/mainThemeColors.css';
import './App.css';
import SeasonPage from './components/SeasonPage';
import SeasonEditor from './components/SeasonEditor';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route index element={<SeasonPage/>}></Route>
                    <Route path="/season" element={<SeasonEditor/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import {InitialPage} from "./components/IninialPage";
import {GamePage} from "./components/GamePage";
import {ResultsPage} from "./components/ResultsPage";
import {AppRoute} from "./settings";


function App({results = [], getImages}) {
    const [page, setPage] = React.useState(AppRoute.Initial);
    const [result, setResult] = React.useState(0);
    const [images, setImages] = React.useState([])
    const [typeOfGame, setTypeOfGame] = React.useState()
    const showResults =(stepsCount) => {
        setResult(stepsCount)
        setPage(AppRoute.Results)
    }
    const handleReset = () => {
        setPage(AppRoute.Initial)
    }

    const handleStart = (type) => {
        const images = getImages(type);
        setImages(images)
        setPage(AppRoute.Game)
        setTypeOfGame(type)
    }
    const getPage = (route) => {
        switch (route) {
            case AppRoute.Initial:
                return <InitialPage onStart={handleStart} />
            case AppRoute.Game:
                return <GamePage images={images} onShowResults={showResults} typeOfGame={typeOfGame}/>
            case AppRoute.Results:
                return <ResultsPage
                    results={results}
                    stepsCount={result}
                    onResetGame={handleReset}
                />
            default:
                return null;
        }
    };
    return getPage(page)
}

export default App;
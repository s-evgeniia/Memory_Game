import React from "react";
import {Progress} from "./Progress";
import {Grid} from "./Grid";
import {Modal} from "./Modal";
import {useGame} from "./hooks/useGame";

export  function GamePage({images, onShowResults, typeOfGame}) {
    const {
        finishedItems,
        stepsCount,
        visibleItems,
        isGameOver
    } = useGame(images)

    const handleResultsClick = () => {
        onShowResults(stepsCount)
    }

    return (
        <section className="game container">
            <Progress value={finishedItems.length/2} max={images.length/2}/>
            <div className="steps">Шаг {stepsCount}</div>
            <Grid
                images={images}
                visibleItems={visibleItems}
                finishedItems={finishedItems}
                typeOfGame={typeOfGame}
            />
            {isGameOver && (
                <Modal>
                    <h3 className="modal-caption">Победа!</h3>
                    <p className="modal-description">Теперь давайте узнаем результат этой партии</p>
                    <button onClick={handleResultsClick} className="button modal-button" type="button">Результаты</button>
                </Modal>
            )}
        </section>
    )
}
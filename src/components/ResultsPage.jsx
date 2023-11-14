import React from "react";
import {ResultsTable} from "./ResultsTable";
import getDeclension from '@dubaua/get-declension';
import getDeclensionMin from "@dubaua/get-declension/dist/get-declension.min.mjs";

export function ResultsPage({results, stepsCount, onResetGame}) {

    const imagesDeclension = getDeclensionMin({
        count: stepsCount,
        one: 'шаг', few: 'шага', many: 'шагов'
    });

    return (
        <section className="result container">
            <h2>Лучшие результаты:</h2>
            <p>Вы завершили игру за <b>{imagesDeclension}</b>, так держать!</p>
            <ResultsTable current={stepsCount} results={results} />
            <p>Хотите попробовать ещё раз?</p>
            <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
        </section>
    )
}
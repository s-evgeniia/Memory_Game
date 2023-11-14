import React from "react";

export function ResultsTable({results, current}) {
    const sortedResults = [
        ...results,
        {name: 'Ваш результат', stepsCount: current}
    ].sort((a, b) => a.stepsCount - b.stepsCount);
    const resultsRows = sortedResults.map(({name, stepsCount}, index) => (
        <tr key={name} className={`result-table-row ${stepsCount === current ? 'active' : ''}`}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{stepsCount}</td>
        </tr>
    ))
    return (
        <table className="result-table">
            <thead>
            <tr className="result-table-row">
                <th>Место</th>
                <th>Имя</th>
                <th>Шаги</th>
            </tr>
            </thead>
            <tbody>
            {resultsRows}
            </tbody>
        </table>
    )
}
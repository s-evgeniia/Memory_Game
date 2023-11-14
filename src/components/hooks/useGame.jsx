import React from "react";

export const useGame = (images) => {
    const [finishedItems, setFinishedItems] = React.useState([])
    const [stepsCount, setStepsCount] = React.useState(0)

    const visibleItems = (firstItem, secondItem) => {
        const firstImg = images.find(({id}) => id === firstItem)
        const secondImg = images.find(({id}) => id === secondItem)
        if(firstImg.url === secondImg.url) {
            setFinishedItems((items) => [...items, firstItem, secondItem])
        }
        setStepsCount((i) => i + 1)
    }

    const isGameOver = finishedItems.length > 0 && finishedItems.length === images.length;

    return {
        finishedItems,
        stepsCount,
        visibleItems,
        isGameOver
    }
}
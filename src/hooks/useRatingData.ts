import React from "react";

function useRatingData(ratingValue: number): boolean[] {

    const arrayRatingData: boolean[] = [];

    return ratingValue === 5 ? arrayFormation(true, 5) : arrayFormation(true, ratingValue)

    function arrayFormation(value: boolean, count: number):boolean[] {
        for (let i = 0; i < count; i++) {
            arrayRatingData.push(value)
        };
        return arrayRatingData.length < 5 ? arrayFormation(false, 5 - arrayRatingData.length) : arrayRatingData
    }
}

export default useRatingData;
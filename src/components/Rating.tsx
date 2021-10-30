import React from "react";
import useRatingData from "./../hooks/useRatingData";

function Rating(props: RatingPropsType) {
    const ratingDataArray = useRatingData(props.value)
    return <div>{ratingDataArray.map((item, index) => <Star key={index} selected={item}/>)}</div>
}

const Star = (props: StarPropsType) => props.selected ? <span><b>Star</b></span> : <span>Star</span>

export default Rating;

type StarPropsType = {
    selected: boolean
}
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
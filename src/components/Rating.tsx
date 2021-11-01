import React from "react";
import useRatingData from "./../hooks/useRatingData";
import StarSvg from "./../img/star.svg";
import StarGoldSvg from "./../img/starGold.svg";

import "./../App.css";

function Rating({value}: RatingPropsType) {

    const ratingDataArray = useRatingData(value)

    return <div>{ratingDataArray.map((item, index) => <Star key={index} selected={item}/>)}</div>
}

export const Star = ({selected}: StarPropsType) => selected ? <img className="rating__star" src={StarGoldSvg} alt="Star"/> : <img className="rating__star" src={StarSvg} alt="Star"/>

export default Rating;

type StarPropsType = {
    selected: boolean
}
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
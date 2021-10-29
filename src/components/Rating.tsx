import React from "react";

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

function Star(props: StarPropsType) {
    return props.selected ? <span><b>Star</b></span>
                          : <span>Star</span>
}

export default Rating;

type StarPropsType = {
    selected: boolean
}

type RatingPropsType = {
    value: number
}
import React, { useState } from "react";

function Accordion(props: AccordionPropsType) {

    const [isShow, setIsShow] = useState(false)

    const clickHundler = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <AccordionTitle isShow={clickHundler} title={props.title}/>
            <AccordionBody isShow={isShow}/>
        </div>
    );
}

function AccordionTitle(props: AccordionTitleDataProps) {
    return (
        <h3 onClick={() => props.isShow()}>
            Меню
        </h3>
    );
}

function AccordionBody(props:AccordionBodyPropsType) {

    if(props.isShow) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        );
    } else {
        return <></>
    }
}

export default Accordion;

type AccordionBodyPropsType = {
    isShow: boolean
}
type AccordionPropsType = {
    title: string
}
type AccordionTitleDataProps = {
    title: string
    isShow: () => void
}
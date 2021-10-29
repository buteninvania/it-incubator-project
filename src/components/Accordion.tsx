import React from "react";

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody />
        </div>
    );
}

function AccordionTitle(props: AccordionTitleDataProps) {
    return (
        <h3>
            Меню
        </h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    );
}

export default Accordion;

type AccordionPropsType = {
    title: string
}
type AccordionTitleDataProps = {
    title: string
}
import React, {useState} from "react";

function Accordion({title}: AccordionPropsType) {

    const [isShow, setIsShow] = useState(false)

    const accordionClickHundler = () => setIsShow(!isShow)

    return (
        <div>
            <AccordionTitle isShow={accordionClickHundler} title={title}/>
            {isShow ? <AccordionBody /> : null}
        </div>
    );
}

function AccordionTitle({isShow}: AccordionTitleDataProps) {
    return (
        <h3 onClick={isShow} >
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
    isShow: () => void
}
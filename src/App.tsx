import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

function App() {
    return (
        <div className="wrapper">
            <PageTitle title="App titile"/>
            <Rating value={3}/>
            <Accordion title={"Меню"}/>
            <Rating value={4}/>
        </div>
    );
}

function PageTitle({title}: PageTitlePropsType) {
    return (
        <h1 className="wrapper__title">{title}</h1>
    );
}

export default App;

type PageTitlePropsType = {
    title: string
}
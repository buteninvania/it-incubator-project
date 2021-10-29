import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

function App() {
    return (
        <div>
            <PageTitle title="App titile" />
            <Rating value={3}/>
            <Accordion title={"Меню"}/>
            <Rating value={4}/>
        </div>
    );
}

function PageTitle(props: PageTitle) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;

type PageTitle = {
    title: string
}
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.'
    },
    {
        title: 'Why use React?',
        content: 'Build Business Apps With React Fast & Easy: KendoReact UI Components and Data Viz Library. The One React UI Library You Need to Build Your Business App. Stop Sweating Over the UI! You Need One Library. Detailed Docs & Demos. Advanced UI Components.'
    },
    {
        title: 'How do you use React?',
        content: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'
    }
];

const options = [
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Red',
        value: 'red'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}></Accordion>
            </Route>
            <Route path="/list">
                <Search ></Search>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                ></Dropdown>
            </Route>
            <Route path="/translate">
                <Translate ></Translate>
            </Route>
        </div>
    );
};
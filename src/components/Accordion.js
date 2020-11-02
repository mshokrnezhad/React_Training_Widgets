import React, {useState} from 'react';

const Accordion = props =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const OnItemClick = (index) => {
        setActiveIndex(index);
    };

    const RenderedItems = props.items.map((item, index)=> {
        const active = index === activeIndex ? 'active' : '';
        return(
            <React.Fragment key={item.title}>
                <div 
                className={active + " title"}
                onClick={() => OnItemClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={active + "content"}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return(
        <div className="ui styled accordion" >
            {RenderedItems}
        </div>
    );
};

export default Accordion;

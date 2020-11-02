import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Welcome');
    const [results, setResults] = useState([]);
    
    useEffect(()=>{
        const TempSearch = async () => {
            const {data} = await Axios.get('https://en.wikipedia.org/w/api.php?',{
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    origin: '*',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        }

        if(term && !results.length)
        {
            TempSearch();
        }
        else{
            const timeoutId = setTimeout(() => {
                if(term){
                    TempSearch();
                }
            }, 1000);
    
            return () => {
                clearTimeout(timeoutId);
            };
        }
    },[term]);

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className="ui input" style={{marginTop:"20px", marginLeft:"20px"}}>
                <label>Enter search term:</label>
            </div>
            <div className="ui input" style={{marginTop:"20px", marginLeft:"20px"}}>
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;
import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import Card from "../card/Card";
import { useQuery } from "react-apollo";

export default function GraphHome() {
    let [chars, setChars] = useState([]);
    let query = gql`
    {
        characters {
            results {
                name
                image
            }
        }
    }`;
    let { loading, error, data } = useQuery(query);

    useEffect(() => {
        if(data && !loading && !error) {
            setChars([...data.characters.results]);
        }
    }, [data]);

    function nextCharacter() {
        chars.shift();
        setChars([...chars]);
    }

    if(loading) return <p>Loading...</p>
    return (<Card
        leftClick={nextCharacter}
       // rightClick={addToFav} 
        {...chars[0]}  
        />)
}
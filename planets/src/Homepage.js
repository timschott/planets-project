import { useEffect, useState } from 'react';

function Homepage() { 
    
    const [mercury, setMercury] = useState([]);
    const [venus, setVenus] = useState([]);
    const [earth, setEarth] = useState([]);
    const [mars, setMars] = useState([]);
    const [jupiter, setJupiter] = useState([]);
    const [saturn, setSaturn] = useState([]);
    const [uranus, setUranus] = useState([]);
    const [neptune, setNeptune] = useState([]);
    const [pluto, setPluto] = useState([]);

    // passing an empty array as the second argument
    // means this is only called on an initial render
    useEffect(() => {
        fetch('https://api.le-systeme-solaire.net/rest/bodies')
        .then(results => results.json())
        .then(data => {
            console.log(data)
        })
    }, []);

    return (
        <div className = "homepage_contents">
            <div className = "homepage_welcome">
                <p>Planets!</p>
            </div>
        </div>
    )
}

export {Homepage};
import { useEffect } from 'react';

function Homepage() { 

    // call the API in useEffect
    // passing an empty array as the second argument
    // means this is only called on an initial render
    // for each planet of interest, save data to local storage
    // so it can be accessed by the description pages
    useEffect(() => {
        fetch('https://api.le-systeme-solaire.net/rest/bodies')
        .then(results => results.json())
        .then(data => {
            for (const val in data['bodies']) {
                // TODO: per planet, add the code to populate the DOM w/ its info
                // add something like, planet name, some short description, then a link out to the description page (once that's setup)
                // could encapsulate in a table (like HW1) 
                // or have them all arranged horizontally (in a row)
                // possibly add an image/icon per planet as well
                if (data['bodies'][val].id === 'mercure') {
                    const m = data['bodies'][val];
                    localStorage.setItem("mercury", JSON.stringify(m));
                    // example
                    document.getElementById("merc").innerHTML += m.englishName;
                }
                if (data['bodies'][val].id === 'venus') {
                    const v = data['bodies'][val];
                    localStorage.setItem("venus", JSON.stringify(v));
                }
                if (data['bodies'][val].id === 'terre') {
                    const e = data['bodies'][val];
                    localStorage.setItem("earth", JSON.stringify(e));
                }
                if (data['bodies'][val].id === 'mars') {
                    const m = data['bodies'][val];
                    localStorage.setItem("mars", JSON.stringify(m));
                }
                if (data['bodies'][val].id === 'jupiter') {
                    const j = data['bodies'][val];
                    localStorage.setItem("jupiter", JSON.stringify(j));
                }
                if (data['bodies'][val].id === 'saturne') {
                    const s = data['bodies'][val];
                    localStorage.setItem("saturn", JSON.stringify(s));
                }
                if (data['bodies'][val].id === 'uranus') {
                    const u = data['bodies'][val];
                    localStorage.setItem("uranus", JSON.stringify(u));
                }
                if (data['bodies'][val].id === 'neptune') {
                    const n = data['bodies'][val];
                    localStorage.setItem("neptune", JSON.stringify(n));
                }
                if (data['bodies'][val].id === 'pluton') {
                    const p = data['bodies'][val];
                    localStorage.setItem("pluton", JSON.stringify(p));
                }
            }
        })
    }, []);

    return (
        <div className = "homepage_contents">
            <div className = "homepage_welcome">
                <p>Planets!</p>
            </div>
            <div className = "homepage_planets_test">
                <p id = "merc"></p>
            </div>
        </div>
    )
}

export {Homepage};
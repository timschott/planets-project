import { useEffect } from 'react';

function Homepage() { 

    // passing an empty array as the second argument
    // means this is only called on an initial render
    useEffect(() => {
        fetch('https://api.le-systeme-solaire.net/rest/bodies')
        .then(results => results.json())
        .then(data => {
            for (const val in data['bodies']) {
                if (data['bodies'][val].id === 'mercure') {
                    const m = data['bodies'][val];
                    localStorage.setItem("mercury", JSON.stringify(m));
                    document.getElementById("merc").innerHTML += m.id;
                }
                if (data['bodies'][val].id === 'venus') {
                    const v = data['bodies'][val];
                    localStorage.setItem("venus", JSON.stringify(v));
                    document.getElementById("venus").innerHTML += v.id;
                }
                if (data['bodies'][val].id === 'terre') {
                    const e = data['bodies'][val];
                    // setEarth(e);
                }
                if (data['bodies'][val].id === 'mars') {
                    const m = data['bodies'][val];
                    // setMars(m);
                }
                if (data['bodies'][val].id === 'jupiter') {
                    const j = data['bodies'][val];
                    // setJupiter(j);
                }
                if (data['bodies'][val].id === 'saturne') {
                    const s = data['bodies'][val];
                    // setSaturn(s);
                }
                if (data['bodies'][val].id === 'uranus') {
                    const u = data['bodies'][val];
                    // setUranus(u);
                }
                if (data['bodies'][val].id === 'neptune') {
                    const n = data['bodies'][val];
                    // setNeptune(n);
                }
                if (data['bodies'][val].id === 'pluton') {
                    const p = data['bodies'][val];
                    // setPluto(p);
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
                <p id = "venus"></p>
            </div>
        </div>
    )
}

export {Homepage};
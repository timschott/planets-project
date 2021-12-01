import { useEffect } from "react";

function Homepage() {
    // call the API in useEffect
    // passing an empty array as the second argument
    // means this is only called on an initial render
    // for each planet of interest, save data to local storage
    // so it can be accessed by the description pages
    useEffect(() => {
        fetch("https://api.le-systeme-solaire.net/rest/bodies")
            .then((results) => results.json())
            .then((data) => {
                for (const val in data["bodies"]) {
                    if (data["bodies"][val].id === "mercure") {
                        const m = data["bodies"][val];
                        localStorage.setItem("mercury", JSON.stringify(m));
                    }
                    if (data["bodies"][val].id === "venus") {
                        const v = data["bodies"][val];
                        localStorage.setItem("venus", JSON.stringify(v));
                    }
                    if (data["bodies"][val].id === "terre") {
                        const e = data["bodies"][val];
                        localStorage.setItem("earth", JSON.stringify(e));
                    }
                    if (data["bodies"][val].id === "mars") {
                        const m = data["bodies"][val];
                        localStorage.setItem("mars", JSON.stringify(m));
                    }
                    if (data["bodies"][val].id === "jupiter") {
                        const j = data["bodies"][val];
                        localStorage.setItem("jupiter", JSON.stringify(j));
                    }
                    if (data["bodies"][val].id === "saturne") {
                        const s = data["bodies"][val];
                        localStorage.setItem("saturn", JSON.stringify(s));
                    }
                    if (data["bodies"][val].id === "uranus") {
                        const u = data["bodies"][val];
                        localStorage.setItem("uranus", JSON.stringify(u));
                    }
                    if (data["bodies"][val].id === "neptune") {
                        const n = data["bodies"][val];
                        localStorage.setItem("neptune", JSON.stringify(n));
                    }
                    if (data["bodies"][val].id === "pluton") {
                        const p = data["bodies"][val];
                        localStorage.setItem("pluto", JSON.stringify(p));
                    }
                }
            });
    }, []);

    return (
        <div className="homepage_contents">
            <img src="/solar-system.png" usemap="#image-map" />
            <map name="image-map">
                <area
                    target=""
                    alt="Mercury Wiki"
                    title="Mercury Wiki"
                    href="/planets/mercury"
                    coords="336,552,21"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Venus Wiki"
                    title="Venus Wiki"
                    href="/planets/venus"
                    coords="413,551,39"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Earth Wiki"
                    title="Earth Wiki"
                    href="/planets/earth"
                    coords="519,551,44"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Mars Wiki"
                    title="Mars Wiki"
                    href="/planets/mars"
                    coords="623,551,38"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Jupiter Wiki"
                    title="Jupiter Wiki"
                    href="/planets/jupiter"
                    coords="767,551,83"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Saturn Wiki"
                    title="Saturn Wiki"
                    href="/planets/saturn"
                    coords="951,551,67"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Uranus Wiki"
                    title="Uranus Wiki"
                    href="/planets/uranus"
                    coords="1111,552,49"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Neptune WIki"
                    title="Neptune WIki"
                    href="/planets/neptune"
                    coords="1231,552,45"
                    shape="circle"
                />
                <area
                    target=""
                    alt="Pluto Wiki"
                    title="Pluto Wiki"
                    href="/planets/pluto"
                    coords="1328,550,20"
                    shape="circle"
                />
            </map>
        </div>
    );
}

export { Homepage };

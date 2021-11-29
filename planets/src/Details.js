import {useParams} from "react-router-dom";

function Details() {
    const {planet} = useParams()
    const planetJson = localStorage.getItem(planet)
    const planetData = JSON.parse(planetJson);

    // 2-column table
    return <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(planetData).map((key) => {
                    if (typeof planetData[key] !== 'object') {
                        var isPlanet_value = null
                        //display boolean value of isPlanet atrribute
                        if(key === 'isPlanet'){
                            if (planetData[key] === true){
                                isPlanet_value = 'true'
                            }
                            else{
                                isPlanet_value = 'false'
                            }
                            return (
                                <tr>
                                    <td>{key}</td>
                                    <td>{isPlanet_value}</td>
                                </tr>
                            )
                        }
                        return (
                            <tr>
                                <td>{key}</td>
                                <td>{planetData[key]}</td>
                            </tr>
                        )
                    }
                    if (typeof planetData[key] === 'object'){
                        if (planetData[key] === null){
                            return(
                                <tr>
                                    <td>{key}</td>
                                    <td>{planetData[key]}</td>
                                </tr>
                            )
                        }
                        //'moons' attribute gets a special if-statement
                        // because it is an array of objects
                        if (key === 'moons'){
                            let moon_list = []
                            for (var i = 0; i < planetData[key].length; i++){
                                moon_list.push(planetData[key][i]['moon'])
                            }
                            return(
                                <tr>
                                    <td>{key}</td>
                                    <td>{
                                        moon_list.map((name, i) =>
                                            moon_list[i] + "\n"
                                        )
                                    }</td>
                                </tr>
                            )
                        }
                        else{
                            var object_vals = Object.keys(planetData[key]).map((key2) => {return (key2)})
                            return (
                                object_vals.map((value, i) =>
                                    <tr>
                                        <td>{object_vals[i]}</td>
                                        <td>{planetData[key][object_vals[i]]}</td>
                                    </tr>
                                )
                        )}
                    }
                })
            }
        </tbody>
        </table>
}

export { Details }
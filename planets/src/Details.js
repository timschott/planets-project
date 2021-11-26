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
                        return (
                            <tr>
                                <td>{key}</td>
                                <td>{planetData[key]}</td>
                            </tr>
                        )
                    }
                })
            }
        </tbody>
        </table>
}

export { Details }
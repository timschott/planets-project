import {useParams} from "react-router-dom";
import "./Details.css"
import earth from './resources/earth.jpg'
import venus from './resources/venus.jpg'
import neptune from './resources/neptune.jpg'
import mars from './resources/mars.jpg'
import mercury from './resources/mercury.jpg'
import uranus from './resources/uranus.jpg'
import pluto from './resources/pluto.jpg'
import saturn from './resources/saturn.jpg'
import jupiter from './resources/jupiter.jpg'

const imgKey = {
    'earth' : earth,
    'venus' : venus,
    'neptune' : neptune,
    'mars' : mars,
    'mercury' : mercury,
    'uranus' : uranus,
    'pluto' : pluto,
    'saturn' : saturn,
    'jupiter' : jupiter
}

const keyLabel = {
    'englishName' : 'name',
    'semimajorAxis' : 'semi-major axis',
    'perihelion' : 'perihelion',
    'aphelion' : 'aphelion',
    'eccentricity' : 'eccentricity',
    'inclination' : 'inclination',
    'density' : 'density',
    'gravity' : 'gravity',
    'escape' : 'escape speed',
    'meanRadius' : 'mean radius',
    'equaRadius' : 'equator radius',
    'polarRadius' : 'polar radius',
    'sideralOrbit' : 'orbital period',
    'sideralRotation' : 'rotational period',
    'axialTilt' : 'axial tilt',
    'mainAnomaly' : 'mean anomaly',
    'argPeriapsis' : 'argument of periapsis',
    'longAscNose' : 'longitude of ascending nose'
}

const units = {
    'englishName' : '',
    'semimajorAxis' : 'km',
    'perihelion' : 'km',
    'aphelion' : 'km',
    'eccentricity' : '',
    'inclination' : 'degrees',
    'density' : 'g/cm³',
    'gravity' : 'm/s²',
    'escape' : 'm/s',
    'meanRadius' : 'km',
    'equaRadius' : 'km',
    'polarRadius' : 'km',
    'sideralOrbit' : 'earth days',
    'sideralRotation' : 'hours',
    'axialTilt' : 'degrees',
    'mainAnomaly' : 'degrees',
    'argPeriapsis' : 'degrees',
    'longAscNose' : 'degrees'

}

function Details() {
    const {planet} = useParams()
    const planetJson = localStorage.getItem(planet)
    const planetData = JSON.parse(planetJson);

    // 2-column table
    return (
    <div>
    <h1 class="planet-header">{planetData['englishName']}</h1>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Property</th>
                <th>Value</th>
                <th>Units</th>
            </tr>
        </thead>
        <tbody>
            {
                Object.keys(planetData).map((key) => {
                    if ((typeof planetData[key] !== 'object') && (key in keyLabel)) {
                        return(
                            <tr>
                                <td className="row-label">{keyLabel[key]}</td>
                                <td>{planetData[key]}</td>
                                <td>{units[key]}</td>
                            </tr>
                        )
                    }
                })
            }
        </tbody>
    </table>
    <img className="planet-image" src={imgKey[planetData['englishName'].toLowerCase()]} />
    </div>
    )
}

export { Details }
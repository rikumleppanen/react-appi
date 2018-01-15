import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const sisalto = {
        osa1: 'Reactin perusteet',
        osa2: 'Tiedonvälitys propseilla',
        osa3: 'Komponenttien tila',
        tehtavia1: 10, tehtavia2: 7, tehtavia3: 14
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto sisalto={sisalto} />
            <Yhteensa summa={sisalto.tehtavia1 + sisalto.tehtavia2 + sisalto.tehtavia3} />
        </div>
    )

}
const Yhteensa = (props) => {
    return (
        <div>
            <p>yhteensä {props.summa} tehtävää</p>
        </div>
    )
}
const Osa = (props) => {
    return (
        <div>
            <p>{props.osa} {props.tehtava}</p>
        </div>
    )
}
const Sisalto = (props) => {
    const sis = props.sisalto
    return (
        <div>
            <Osa osa={sis.osa1} tehtava={sis.tehtavia1} />
            <Osa osa={sis.osa2} tehtava={sis.tehtavia2} />
            <Osa osa={sis.osa3} tehtava={sis.tehtavia3} />
        </div>
    )
}
const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>

    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

import './App.css';

function Superheroes(props) {
    return(
        <div className="superheroes-card">
        <div className="superheroes-name">{props.name}</div>
        <img src = {props.url}></img>
        <div className="superheroes-universe">{props.universe}</div>
        <div className="superheroes-superpower"><span>Суперсила</span>: {props.superpower}</div>
        <div className="superheroes-information">{props.information}</div>
        </div>
    )
}

export default Superheroes;


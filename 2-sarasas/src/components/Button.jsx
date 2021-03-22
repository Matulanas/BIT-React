
const Button = props => {
    return (
        <button className="button" onClick={props.action}>{props.name}</button>
    )
}

export default Button;

const BoxDigit = props => { // <-- Komponentas
    return (
      <span style={props.boxStyle}>
        {props.number}
      </span>
    )
}

export default BoxDigit;

const Li = props => { // <-- Komponentas
    return (
      <li style={{color: props.color}}>
        LI: {props.li}
      </li>
    )
}

export default Li;
import BoxDigit from './BoxDigit';


const BoxUniversal = props => { // <-- Komponentas
    return (
      <div className="box" style={{borderColor:props.color}}>
        <BoxDigit number={props.number} boxStyle={props.boxStyle} />
      </div>
    )
}

export default BoxUniversal;
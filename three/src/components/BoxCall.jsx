
const BoxCall = props => {


    return (
        <div className="box">
            <span>La la la</span>
            <button 
                onClick={props.onClick}
                style={{backgroundColor: 'yellow', borderRadius: '5px', color: 'black', padding: '5px', outline: 'none', marginTop: '10px'}}
                >Click!</button>
        </div>
    )
}


export default BoxCall;
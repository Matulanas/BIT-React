
const ClassicForm = props => {

    const callBackMethod = (event) => {
        props.dataFromChild(event.target.value);
    }

    return (
        <form>
            <textarea rows="8" value={props.value} onChange={callBackMethod} placeholder="Text..."></textarea>
        </form>
    )
}

export default ClassicForm;
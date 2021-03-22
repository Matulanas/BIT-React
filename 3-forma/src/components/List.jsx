import { v4 as uuidv4 } from 'uuid';

const List = props => {

    if (props.array === '') {
        return '';
    } else {
        return (
            <ol className="list-box">
                {
                    props.array.map(item => <li key={uuidv4()} > {item} </li>)
                }
            </ol>
        )
    }
}

export default List;
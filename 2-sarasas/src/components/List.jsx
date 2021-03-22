import { v4 as uuidv4 } from 'uuid';

const List = props => {
    return (
        <ul className="list-box">
            {
                props.array.map(item => <li key={uuidv4()} style={{color: props.color}}>{item.id}- {item.item} </li>)
            }
        </ul>
    )

}

export default List;

const withZooBoxList = (Component) => (props) => 
    <div className="big-box">
    <ul>
        {props.zooList.map(animal => <li key={animal.id}>
                <span className="post-id">{animal.id}.</span> 
                <span className="post-title">{animal.name}</span>
            </li>
        )}
    </ul>
    </div>

export default withZooBoxList;
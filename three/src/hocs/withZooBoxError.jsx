
// function withZooBoxError(Components) {
//     return function (props) {
//         return !props.zooList
//         /?   <div className="box"><h3 style={{ color: 'red' }}>Error</h3></div>
//         : <Component {...props} />
//     }
// }

import ErrorComponent from "../components/ErrorComponent";

const withZooBoxError = (Component) => (props) => 
    !props.zooList || props.zooList === null
        ? <ErrorComponent />
        : <Component {...props} />


export default withZooBoxError;
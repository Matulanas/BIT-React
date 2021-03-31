import EmptyComponent from "../components/EmptyComponent";


const withZooBoxEmpty = (Component) => (props) => 
!props.zooList.length
    ? <EmptyComponent />
    : <Component {...props} />

export default withZooBoxEmpty;
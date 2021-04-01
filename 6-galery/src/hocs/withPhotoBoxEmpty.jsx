

const withPhotoBoxEmpty = (Component) => (props) =>
!props.images.length ? 'Error' : <Component {...props} />

export default withPhotoBoxEmpty;

const Photo = (props) => {

    return (
        <div className="photos-block">
            {props.images.map(photo => 
                <div className="photo" key={photo.id} style={{ backgroundImage: `url(${photo.download_url})`}}>
                    <span className="photo-author">{photo.author}</span>
                </div>
            )}
        </div>
    )
}

export default Photo;
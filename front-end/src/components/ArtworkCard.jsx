const ArtworkCard = ({ artwork }) => {
	const getImageURL = () => {
		return 'https://i.ibb.co/' + artwork.imageId;
	};

	return (
		<div className="card">
			<img
				className="artwork-card-image"
				src={getImageURL()}
				alt={`Image of ${artwork.title} by ${artwork.artist}`}
			/>
			<div className="artwork-card-text">
				<h2 className="artwork-card-title">{artwork.title}</h2>
				<h3 className="artwork-card-artist">{artwork.artist}</h3>
			</div>
		</div>
	);
};

export default ArtworkCard;

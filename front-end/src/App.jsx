import './App.css';
import ArtworkCard from './components/ArtworkCard';
import Footer from './components/Footer';
import Header from './components/Header';
import { mockArtworks } from './mock-data/mockArtworks';

// TODO #1: Create two new components, HomePage and ArworksPage, and import above.

function App() {
	// TODO: #4: Add a state variable, currentPage, that will control which page is displaying.

	const allArtworks = [...mockArtworks];

	const artworksJSX = allArtworks.map(artwork => {
		return <ArtworkCard key={artwork.id} artwork={artwork} />;
	});

	return (
		<div id="body-container">
			{/* TODO #6: Pass the setter for the state variable to both Header and HomePage so the
            user can switch pages when interacting with child components */}
			<Header />
			{/* TODO #2: Move the artworksJSX code along with the entire <main> section below to
             the ArtworksPage component. Make sure ArtworkCard is imported there instead of here. */}
			<main className="main-content">
				<h1>Artworks</h1>
				<div className="artwork-card-container">{artworksJSX}</div>
			</main>
			{/* TODO #3: Place an instance of HomePage and ArtworksPage where <main>
             was before. Pass down allArtworks to ArtworksPage using a prop called artworks and update
             the code in ArtworksPage to use the data from the prop. */}
			{/* TODO #5: Use the state variable with conditional rendering to display either
             the home page or artworks page */}
			<Footer />
		</div>
	);
}

export default App;

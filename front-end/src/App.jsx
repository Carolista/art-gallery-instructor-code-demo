import './App.css';
import ArtworkCard from './components/ArtworkCard';
import Footer from './components/Footer';
import Header from './components/Header';
import { mockArtworks } from './mock-data/mockArtworks';

function App() {
	return (
		<div id="body-container">
			<Header />
			<main className="main-content">
				<h1>Artworks</h1>
				<div className="artwork-card-container">
					<ArtworkCard artwork={mockArtworks[0]} />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default App;
g
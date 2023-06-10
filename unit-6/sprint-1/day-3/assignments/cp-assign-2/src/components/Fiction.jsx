import fictionData from '../fiction.json';
import BookCard from './BookCard';

export default function Fiction() {
	return (
		<div data-testid="books-fiction">
			<h1 data-testid="books-container-title" style={{ textAlign: 'center' }}>
				Fictional Books
			</h1>

			<div
				className="books-container"
				style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '15px' }}
			>
				{/* Map all Fictional Books here */}
				{fictionData.map(e => {
					return (
						<BookCard
							key={e.title}
							title={e.title}
							author={e.author}
							year={e.year}
							price={e.price}
							img={e.img}
						/>
					);
				})}
			</div>
		</div>
	);
}

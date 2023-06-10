import NonfictionData from '../nonfiction.json';
import BookCard from './BookCard';

export default function NonFiction() {
	return (
		<div data-testid="books-nonfiction">
			<h1 data-testid="books-container-title" style={{ textAlign: 'center' }}>
				Non-Fiction Books
			</h1>

			<div
				className="books-container"
				style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '15px' }}
			>
				{/* Display all Non-Fiction books here */}
				{NonfictionData.map(el => {
					return (
						<BookCard
							key={el.title}
							title={el.title}
							author={el.author}
							year={el.year}
							price={el.price}
							img={el.img}
						/>
					);
				})}
			</div>
		</div>
	);
}

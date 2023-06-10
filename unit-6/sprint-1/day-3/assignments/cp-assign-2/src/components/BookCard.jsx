export default function BookCard({ title, year, img, author, price }) {
	return (
		<div
			data-testid="book-card"
			style={{
				boxShadow: '0 0 10px black',
				margin: 'auto',
				textAlign: 'center',
				padding: '10px',
				height: '450px',
				width: '80%',
			}}
		>
			<img src={img} alt={title} width="60%" />
			<b>
				<div data-testid="book-card-title">
					{title}
					<span>({year})</span>
				</div>
			</b>
			<div data-testid="book-card-author">{author}</div>
			<div data-testid="book-card-price">{price}</div>
		</div>
	);
}

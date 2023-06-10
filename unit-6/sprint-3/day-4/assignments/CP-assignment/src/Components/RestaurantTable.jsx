import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data = []}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e,i)=>(
        <RestaurantCard 
        name={e.name} 
        type={e.type} 
        price={e.price_starts_from} 
        rating={e.rating} 
        key={e.id}
        id={e.id}
        />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;

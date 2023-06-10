import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";

function Restaurants() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const FetchAPI = async (page) => {
    setLoading(true);
    const resp = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)

    const data = await resp.json()
    setData(data.data)

    setTotalPage(data.totalPages)
    setLoading(false);
  }

  const changePage = (pages) => {
    setPage(pages);
  }
  useEffect(() => {
    FetchAPI(page)
  }, [page])

  if (loading) {
    return <LoadingIndicator />;
  } else {
    return (
      <div>
        <h1 data-testid="restaurants-header">Restaurants List</h1>
        <div data-testid="restaurants-container">
          {data.map((elem)=>(

          <RestaurantCard 
          name={elem.name}
           image={elem.image}
            type={elem.type} 
            rating={elem.rating}
             price_starts_from={elem.price_starts_from}
              number_of_votes={elem.number_of_votes}/>
          ))}
        </div>
        <div>
          <Pagination totalPages={totalPage} 
          currentPage={page} 
          handlePageChange={changePage} />
        </div>
      </div>
    );
  }
}

export default Restaurants;
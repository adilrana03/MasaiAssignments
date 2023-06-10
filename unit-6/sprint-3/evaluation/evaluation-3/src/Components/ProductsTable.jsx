import ProductCard from "./ProductCard"
function ProductsTable({data}){
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((item,i) => {
                       return <ProductCard key={i+5} 
                       brand={item.brand} price={item.price}
                        id={item.id} category={item.category}/>
                    })
                    }
                </tbody>
            </table>
    )
}

export default ProductsTable
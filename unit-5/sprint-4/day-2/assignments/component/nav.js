
let nav=()=>{
return `<div><h3><a href="index.html">Search</a> </h3></div> 
       <div><h3><a href="recipeofday.html">Recipes of the day</a></h3></div> 
       <div><h3><a href="random.html"> Random Racipes</a></h3></div>
       <div><h4><a id="user-info" href="signup.html"></a></h4></div>`
}

let fetchData=async (url)=>{
       let res=await fetch(url);
       let data=await res.json();
       return data;

}
export {nav, fetchData};


let trending=()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=23.766778%2C+78.52139&locationRadius=800km&maxResults=20&order=viewCount&regionCode=IN&type=video&videoDuration=short&key=AIzaSyBO5nsp_57gca34cwmQk8jG1WP9anKMi7w`)
        .then((res)=>{
                return res.json();
        }).then((data)=>{
                 console.log(data)
                 displayData(data.items);
        }).catch((error)=>{
                console.log("eroor");
        })
}


let fetchData=async ()=>{
        let query=document.getElementById("query").value;
        if(!query){
                query="cricket"
        }
        url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyBO5nsp_57gca34cwmQk8jG1WP9anKMi7w`
        let res=await fetch (url);
        let jsondata= await res.json();
        let data=jsondata.items; 
        displayData(data)
        console.log(data);
        console.log("guifojbciuag8ashicbqiuv")
}

let displayData=(data)=>{
        let container=document.getElementById("cont");
        container.innerHTML="";
        data.map((elem) => {
                let { snippet: { thumbnails : {medium :{url}},title }} = elem ;
                let div=document.createElement("div");
                let img=document.createElement("img");
                img.setAttribute("id","video-img")
                img.src=url;
                let Title=document.createElement('h2');
                Title.innerText= title;
                div.append(img,Title);
                div.onclick= () => {
                        addTolocalstorage(elem);
                }
                container.append(div);
        });
}
let addTolocalstorage=(elem)=>{
        console.log("adding to local storage")
        localStorage.setItem("myvideo", JSON.stringify(elem));
        window.location.href="video.html"

}

var filter=document.getElementById("select");
filter.addEventListener("change", filterbyname)
function filterbyname(){
        console.log("working")
       fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=${filter.value}&q=${query}&key=AIzaSyBO5nsp_57gca34cwmQk8jG1WP9anKMi7w`)
       .then(function(res){
        return res.json();
       }).then(function(data){
        displayData(data.items);
       })
}
// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=India&maxResults=20&order=viewCount&q`https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=23.766778%2C+78.52139&locationRadius=800km&maxResults=20&order=viewCount&regionCode=IN&type=video&videoDuration=short&key=AIzaSyBO5nsp_57gca34cwmQk8jG1WP9anKMi7w`&key=[YOUR_API_KEY]'




// 'https://youtube.googleapis.com/youtube/v3/search?&location=28.6139%C2%B0%20N%2C%2077.2090%C2%B0%20E&locationRadius=500km&maxResults=20&order=viewCount&type=video&videoDuration=short&key=AIzaSyBO5nsp_57gca34cwmQk8jG1WP9anKMi7w' 



// https://youtube.googleapis.com/youtube/v3/search?channelType=channelTypeUnspecified&location=23.766778%2C+78.52139&locationRadius=500km&maxResults=20&order=viewCount&regionCode=IN&type=video&videoDuration=short&key=AIzaSyBO5nsp_57gca34cwmQk8jG1WP9anKMi7w
var Input = ["assignment", "problem", "media", "upload"];

var result=Input.filter(function(el){
    return el.charAt(0)=="a" || el.charAt(el.length-1)=="a";
})
.map(function(e){
    return e;
});
console.log(result);

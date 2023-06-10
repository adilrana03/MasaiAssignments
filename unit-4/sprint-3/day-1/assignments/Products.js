var name = ["Rice", "Dal", "Salt"];
var quantity=["2", "3", "1"];
var price= [60, 50, 20];

var data=[];
for(var i=0; i<quantity.length; i++){
    var object={};
    object["name"]=name[i];
    object["quantity"]=quantity[i];
    object["price"]=price[i];
    data.push(object);
}
var sum=0;
var cart={
    total : function(){
        for(var i=0; i<data.length; i++)
        {
            sum+=data[i].quantity * data[i].price;
        }
        console.log(sum);
        return;
    }
}
cart.total();
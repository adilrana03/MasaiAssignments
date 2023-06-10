var data=[];
var object={};
object["Length"]=20;
object["breath"]=30;
data.push(object);

totalArea=0;
var total={
    area : function(){
        for(var i=0; i<data.length; i++)
        {
            totalArea+=data[i].Length * data[i].breath;
        }
        console.log(totalArea);
        return;
    } 
}
total.area();

totalPeri=0;
var total={
    Perimeter : function(){
        for(var i=0; i<data.length; i++)
        {
            totalPeri+=2*((data[i].Length) + (data[i].breath));
        }
        console.log(totalPeri);
        return;
    } 
}
total.Perimeter();


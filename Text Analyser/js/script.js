$("#goButton").on("click", function(){
    
    //wanted items' array
    var mapArray = new Map();
    $(".text2").val().split("").forEach(function(n){
    mapArray.set(n,0);
    });          
    
    // main string array
    var arr = []; 
    arr = $(".text1").val().split("");//make an array

    //index calculater
    setCalculate(arr, mapArray);
});

/* This function searches @param arr, main array's each element, in wanted item's map array @param mapArray and if found, increase the value of the key in map
*/
function setCalculate(arr, mapArray){

    arr.forEach(function(item){
        for (var key of mapArray.keys()) {
            if (item === key) {     
            let ind = mapArray.get(key);
            mapArray.set(key, ++ind);
        }//if..
            
     }//for..
        
}); 

    addChart(mapArray);
}

/* This function draw a chart regarding @param mapArray
   variable
*/
function addChart(mapArray){
 
    var big = 0; 
    var len = 0;
    var index = 0;
    var color = ['red','blue','gold','brown','green'];  
    var cnvs = $('#canvas1')[0];
    var ctx = cnvs.getContext('2d');
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);    
    ctx.beginPath();  
    ctx.font="italic bold 15px sans-serif";
    
    // draw chart 
   mapArray.forEach(function(value, key) {
       
        ctx.fillStyle="black";
        ctx.fillText(key,10,(index+1)*30);       
        ctx.fillStyle=color[(index%5)];
        ctx.fillRect(40,10+(index*30),value*15,25);
        big = (value>big) ? value:big;
        index++;
        });
   
        // draw axises
           len = mapArray.size;
           ctx.lineWidth = 1;
           ctx.fillStyle="black";   
        // draw y axis
            ctx.moveTo(30, 0);
            ctx.lineTo(30, (len+2)*30);
        // draw x axis
            ctx.moveTo(0, (len+1)*30);
            ctx.lineTo(100+big*15, (len+1)*30);
            ctx.stroke();
            ctx.font="italic bold 10px sans-serif";
        
        // fill x axis numbers  
            while(big>=0){
               ctx.fillText(big,35+big*15,
                           20+(len+1)*30);
                --big;
            }
    
    ctx.closePath();
}

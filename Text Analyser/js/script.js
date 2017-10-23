$("#goButton").on("click",function(){
    var arr = []; // main array
    arr = $(".text1").val().split("");//make an array
    var control = []; //wanted items' array
    control = $(".text2").val().split("");//make an array
    setCalculate(arr, control);
});


function setCalculate(arr, control){
   var conArr = new Array(control.length);//container array for
                                    //quantity of wanted items
    
    //initializing container array in order to operate math func.
    for(i=0;i< control.length;i++){
        conArr[i]=0;
    }

    arr.forEach(function(item){
             control.forEach(function find(element, index, control){
            if (item === element) conArr[index] +=1;
        }); //search main array's each element in wanted array
         // if found, get index of wanted array's element //corresponding container array
    });
 
    addChart(control, conArr);
}

function addChart(control, conArr){
 
    var big =0; 
    var color = ['red','blue','gold','brown','green'];  
    var cnvs = $('#canvas1');
    var ctx = cnvs[0].getContext('2d');
    ctx.clearRect(0, 0, cnvs[0].width, cnvs[0].height);    
    ctx.beginPath();  
    ctx.font="italic bold 15px sans-serif";
    
    // draw chart 
    control.forEach(function find(element, index, control){
   
        ctx.fillStyle="black";
        ctx.fillText(element,10,(index+1)*30);       
        ctx.fillStyle=color[(index%5)];
        ctx.fillRect(40,10+(index*30),conArr[index]*15,25);
        big = (conArr[index]>big) ? conArr[index]:big;
        });
    
        // draw axises

           ctx.lineWidth = 1;
           ctx.fillStyle="black";   
        // y axis
            ctx.moveTo(30, 0);
            ctx.lineTo(30, (control.length+2)*30);
        // x axis
            ctx.moveTo(0, (control.length+1)*30);
            ctx.lineTo(100+big*15, (control.length+1)*30);
            ctx.stroke();
            ctx.font="italic bold 10px sans-serif";
        
        // x axis numbers  
            while(big>=0){
               ctx.fillText(big,35+big*15,
                           20+(control.length+1)*30);
                --big;
            }
    
    ctx.closePath();
}

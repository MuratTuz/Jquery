$("#findHerescop").on("click",function(){
    var value = $(".button1").val();
    setHerescop(value);
});

$(".button1").click(function(){
    $(".resimcerveve").html(" ");
});

function setHerescop(value){
    //console.log(value);
    let tarih = new Date(value);
    let gun = tarih.getDate();
    let ay = tarih.getMonth() + 1; //aylar 0 dan başlıyor
    console.log(tarih);
    if ( !isNaN(gun) && !isNaN(ay)){ 
    //console.log(tarih.getDate());
    //console.log(tarih.getMonth());
 var burcNumber = ay*100 + gun; 
 var burcText ="null";
        console.log(burcNumber);
        if (burcNumber>=121 && burcNumber<=218)
                    burcText = "kova";
        if (burcNumber>=219 && burcNumber<=320)
                    burcText = "balik";
        if (burcNumber>=321 && burcNumber<=420)
                    burcText = "koc";                
        if (burcNumber>=421 && burcNumber<=520)
                    burcText = "boga";
        if (burcNumber>=521 && burcNumber<=621)
                    burcText = "ikizler";
        if (burcNumber>=622 && burcNumber<=722)
                    burcText = "yengec";    
        if (burcNumber>=723 && burcNumber<=822)
                    burcText = "aslan";
        if (burcNumber>=923 && burcNumber<=1023)
                    burcText = "terazi";
        if (burcNumber>=1024 && burcNumber<=1122)
                    burcText = "akrep";   
        if (burcNumber>=1123 && burcNumber<=1221)
                    burcText = "yay";
        if (burcNumber>=1222 || burcNumber<121)
                    burcText = "oglak";
                   
    $(".resimcerveve").html(findBurc(burcText));
   }// if ( !isNaN(gun).....
   
    else{
       alert("Lütfen tarihi Yıl-Ay-Gün olarak giriniz!");
    }
}

function findBurc(x){
   let t = '<h5> Burcunuz '+ x.toString().toUpperCase()+
    '</h5>'+
    '<img id="resim" src="images/'+x+'.jpg">';
    
    return t;
}

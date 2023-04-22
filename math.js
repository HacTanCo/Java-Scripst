const PI=3.14;
let pelement=document.getElementById('ketqua');

function stron(bankinh){
    let s= bankinh*bankinh*PI;
    // alert("Diện tích hình tròn là: "+ s);
    pelement.innerHTML="<b>" + "Diện tích hình tròn có bán kính "+ bankinh +" là: "+s +"</b>";
}

let cchunhat=(dai,rong)=>{
    let a=(dai+rong)*2;
    // alert("Chu vi hình chữ nhật là: "+ a);
    pelement.innerHTML="<b>"+ "Chu vi hình chữ nhật là: "+ a + "</b>";
}





let a=document.getElementById('result');
let cong=()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let Cong = num1 + num2;
    a.innerHTML="Tổng là: "+ Cong;
}
let tru=()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let Tru = num1 - num2;
    a.innerHTML="Hiệu là: "+ Tru;
}
let nhan=()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let Nhan = num1 * num2;
    a.innerHTML="Tích là: "+ Nhan;
}
let chia=()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let Chia = num1 / num2;
    a.innerHTML="Hiệu là: "+ Chia;
}

let Shinhtron=()=>{
    let bankinh=parseInt(document.getElementById('bankinh').value);
    let s = bankinh*bankinh*PI;
    let b=document.getElementById('cricle');
    b.innerHTML="Diện tích hình tròn là: "+ s;
}
let Shinhchunhat=()=>{
    let rong=parseInt(document.getElementById('rong').value);
    let dai=parseInt(document.getElementById('dai').value);
    let s = dai*rong;
    let c=document.getElementById('chunhat');
    c.innerHTML="Diện tích hình chữ nhật là: "+s+" mét vuông";
}

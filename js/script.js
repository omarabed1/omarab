let stdArr = [];
function send(){
    let flag=0;
    let name=document.getElementById("name");
    let price=document.getElementById("price");
    let prc=document.getElementById("prci");
    let img=document.getElementById("img");
    let x=name.value;
    let y=price.value;
    let z=prc.value;
    let i=img.value;
    if(x=='')flag+=1;
    if(y=="")flag+=2;
    if(z=="select") flag+=4;
    if(i=="") flag+=8;

    if(flag==1)alert("eror name");   
    if(flag==2)alert("eror price");
    if(flag==3)alert("eror price and name");
    if(flag==4)alert("eror prc");
    if(flag==5)alert("eror prc and name");  
    if(flag==6)alert("eror prc and price");  
    if(flag==7)alert("eror prc and price and name");                      
    if(flag==8)alert("eror img");
    if(flag==9)alert("eror img and name");
    if(flag==10)alert("eror img and price");
    if(flag==11)alert("eror img and price and name");
    if(flag==12)alert("eror img and prc");
    if(flag==13)alert("eror img and prc and name");
    if(flag==14)alert("eror img and prc and price");
    if(flag==15)alert("eror img and prc and price and name");

    if(flag==0)
    {
       
     addToTable(name.value, Number.parseInt(price.value),prc.value,img.value);
     
     var obj={
        p_name:x,
        p_price:Number.parseInt(y),
        p_prc:z,
        p_img:i,
    };
    
    name.value='';
    price.value='';
    prc.value='select';
    img.value='';
        saveToStorage(obj);
    }
 

}

function addToTable(name,price,prc,img){
    let Tbodyy = document.getElementById("tbobyy");

    let tr = document.createElement("tr");
    let nameTd = document.createElement("td");
    let priceTd = document.createElement("td");
    let prcTd = document.createElement("td");
    let imgTd = document.createElement("td");

    let nameLabel = document.createElement("label");
    let priceLabel = document.createElement("label");
    let prcLabel = document.createElement("label");
    let imgLabel = document.createElement("img");

    nameLabel.textContent = name;
    priceLabel.textContent = price;
    prcLabel.textContent = prc;
    imgLabel.src=img;

    nameTd.appendChild(nameLabel);
    priceTd.appendChild(priceLabel);
    prcTd.appendChild(prcLabel);
    imgTd.appendChild(imgLabel);

    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(prcTd);
    tr.appendChild(imgTd);

    Tbodyy.appendChild(tr);

    tr.classList.add("card");
    imgLabel.classList.add("card-img");
    nameLabel.classList.add("card-name");
    prcLabel.classList.add("card-name");
    priceLabel.classList.add("card-price",);
    imgTd.classList.add("card-img-td");
    priceTd.classList.add("card-prc-td");
    prcTd.classList.add("card-prc-td");
    nameTd.classList.add("card-prc-td");

} 

 function saveToStorage(obj){
        stdArr.push(obj);
        localStorage.setItem("full_p",JSON.stringify(stdArr));
    }

function getLocalStorage(){
    if(localStorage.getItem("full_p"))
    {
        stdArr=JSON.parse(localStorage.getItem("full_p"));
        for(let i of stdArr)
        {
            addToTable(
                i.p_name,
                i.p_price,
                i.p_prc,
                i.p_img
            );
        }
    }
}
getLocalStorage();


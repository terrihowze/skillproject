const CompanyA = document.getElementById("CompanyA");
const CompanyB = document.getElementById("CompanyB");
const CompanyC = document.getElementById("CompanyC");
CompanyA.value = "CompanyA";
CompanyA.onclick = getProduct;
CompanyB.value = "CompanyB";
CompanyB.onclick = getProduct;
CompanyC.value = "CompanyC";
CompanyC.onclick = getProduct;


function deleteProduct(e){
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.response));
        if(xhr.status === 200){
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    }
    xhr.open('DELETE', `/product/${e.target.value}`);
    xhr.send();
}

function changeValue(e){
    const xhr = new XMLHttpRequest();
    const id = e.target.value;
    const x = document.getElementById("NC");
    const y = x.value;
    console.log(id);
    console.log(y);
    xhr.open('PUT',`/product/${id}`)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({name: y}));
    
}
// dynamically create a form for user to change product name or costs
function updateButton(e){
    const tail = e.target.value;
    const form = document.createElement("form");
    form.setAttribute("id", "forms")
    const nameCHange = document.createElement("input");
    nameCHange.setAttribute("type", "text");
    nameCHange.setAttribute("id", "NC");
    const s = document.createElement("button");
    s.value = tail;
    s.innerText = "Submit";
    form.appendChild(nameCHange);
    form.appendChild(s);
    const formContainer = document.getElementById('updateform');
    formContainer.appendChild(form);
    s.onclick = changeValue;

} 

function getProduct(e){
    const name = e.target.value;
    console.log(name);
    getcontainer = document.getElementById('getcontainer');
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
    const warehouse = JSON.parse(xhr.response);
    console.log(warehouse)   
    const div = document.createElement('div');
    //json.stringify
    //div.innerText = warehouse.name;
        for(x of warehouse.units)
            // if(xhr.status === 200){
            //     for(x of warehouse){                 
               
            //     div.innerText = `Warehouse: ${x.name}`;
            //     // const button = document.createElement('button');
            //     // const button2 = document.createElement('button');
            //     // button.value = x.productName;
            //     // button2.value = x._id;
            //     // button2.setAttribute("id", "buttonid")
            //     // button2.innerText = "Update Product";
            //     // button.innerText = "DELETE Product";
            //     // div.append(button);
            //     // div.append(button2);
            //     // productContainer.append(div);
            //     // button2.onclick = updateButton;
            //     // button.onclick = deleteProduct;
            //     }
            // }
            // else{
            //    Console.log("err");
            // }
    }
    xhr.open('GET', `/warehouse/${name}`);
    xhr.send();
}
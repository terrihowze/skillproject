// grABBING THE BUTTION FROM CARDS AND SETTING VALUES
const CompanyA = document.getElementById("CompanyA");
const CompanyB = document.getElementById("CompanyB");
const CompanyC = document.getElementById("CompanyC");
CompanyA.value = "CompanyA";
CompanyA.onclick = getProduct;
CompanyB.value = "CompanyB";
CompanyB.onclick = getProduct;
CompanyC.value = "CompanyC";
CompanyC.onclick = getProduct;


// delete product functions
function formdelete(e){
    const uid = e.target.value;
    const form = document.getElementById("forms");
    form.setAttribute("class", "form-group")
    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("id", "delete");
    const s = document.createElement("button");
    s.value = uid;
    s.innerText = "Submit";
    form.appendChild(name);
    form.appendChild(s);
    s.onclick = deleteProduct; 
}

function deleteProduct(e){
    const uid = e.target.value;
    const name = document.getElementById("delete");
    const y = name.value;
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE','/product')
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({id: uid, name: y}));
    document.getElementById("forms").innerHTML = null;
}
// end of delete product functions

//add product functions
function addbackendprod(e){
    const uid = e.target.value;
    const name = document.getElementById("NC");
    const quant = document.getElementById("QC");
    const q = quant.value;
    const y = name.value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST','/product')
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(JSON.stringify({id: uid, name: y, quantity: q}));
    xhr.send(JSON.stringify({id: uid, name: y, quantity: q}));
    document.getElementById("forms").innerHTML = null;

}
function addProduct(e){
    const uid = e.target.value;
    console.log(uid);
    const form = document.getElementById("forms");
    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("id", "NC");
    const quant = document.createElement("input");
    quant.setAttribute("type", "number");
    quant.setAttribute("id", "QC");
    const s = document.createElement("button");
    s.setAttribute("id", "send")
    s.value = uid;
    s.innerText = "Submit";
    form.appendChild(name);
    form.appendChild(quant);
    form.appendChild(s);
    s.onclick = addbackendprod; 
}
//end of delete product functions

// update quantity functions
function updateQuantity(e){
    const uid = e.target.value;
    const name = document.getElementById("UN");
    const quant = document.getElementById("UQ");
    const q = quant.value;
    const y = name.value;
    const xhr = new XMLHttpRequest();
    xhr.open('PUT','/product')
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({id: uid, name: y, quantity: q}));
    document.getElementById("forms").innerHTML = null;


}
function quantity(e){
    const uid = e.target.value;
    const form = document.getElementById("forms");
    const name = document.createElement("input");
    name.setAttribute("type", "text");
    name.setAttribute("id", "UN");
    const quant = document.createElement("input");
    quant.setAttribute("type", "number");
    quant.setAttribute("id", "UQ");
    const s = document.createElement("button");
    s.setAttribute("id", "update")
    s.value = uid;
    s.innerText = "Submit";
    form.appendChild(name);
    form.appendChild(quant);
    form.appendChild(s);
    s.onclick = updateQuantity; 
}





// end of update product functions
function getProduct(e){
    const name = e.target.value;
    console.log(name);
    y = document.getElementById('getcontainer');
    y.innerHTML = null;
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
    const company = JSON.parse(xhr.response);
    if(xhr.status === 200){     
        for(x of company.units){
            const div = document.createElement('div');
            div.setAttribute("class", "d-flex p-2");
            div.innerText = `${x.name}`;
            const button = document.createElement('button');
            const button2 = document.createElement('button');
            const button3 = document.createElement('button');
            button.value = x._id;
            button2.value = x._id;
            button3.value = x._id;
            button.innerText = "Add product to this warehouse";
            button2.innnerText = "Delete product from this warehouse";
            button3.innnerText = "Update quantity of product";
            div.append(button);
            div.append(button2);
            div.append(button3);
            y.append(div);
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
            button.onclick= addProduct;
            button2.onclick = formdelete; 
            button3.onclick = quantity;
                 }
            }
            else{
              Console.log("err");
             }
    }
    xhr.open('GET', `/warehouse/${name}`);
    xhr.send();
}
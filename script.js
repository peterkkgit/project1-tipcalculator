function checkDollarInput(num) {
    if (isNaN(num)) {
        return 0;
    } else {
        //num = num.replace(/^[[0-9]+(\.[0-9]{1,2})?$]/gm,""); //review and sanitize properly
        return num;
    }
}


document.getElementById('container').onchange = function() {
    bill = Number(sanitizeDollarInput(document.getElementById('billTotal').value));
    tipPercent = document.getElementById("tipInput").value;
    split = document.getElementById("splitInput").value;
    tipValue = bill * (tipPercent/100);
    newBillEach = (bill + tipValue) / split; //is there a better way than declaring with global scope?
    tipEach = tipValue / split;
    
    document.getElementById("tipOutput").innerHTML = tipPercent + "%";
    document.getElementById("splitOutput").innerHTML = split;
    document.getElementById("newBill").innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML = "$" + tipEach.toFixed(2);
}


var savedBills = [];

function saveFunction() {
    savedBills.unshift(newBillEach.toFixed(2));
    //alert(savedBills[0]);
    var ul = document.getElementById("theList");
    var li = document.createElement("li");
    var textnode = document.createTextNode("$"+savedBills[0]);
    li.appendChild(textnode);
    ul.insertBefore(li,ul.childNodes[0]);
}








/*
document.getElementById('saveButton').onclick = function() {
    }

    //Could add attribute such as ID to new li items
    li.setAttribute("id", "could put ID label here");

    //Try this again
    document.getElementById("theList").innerHTML += "<li>"+savedBills[0]+"</li>";



    //How I originally tried it - but not in reverse order
    var savedBills = [];
function saveFunction() {
    var billLatest = Number(document.getElementById('billTotal').value); //how can I not repeat inside of this function?
    savedBills.unshift(billLatest);
    var ul = document.getElementById("theList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("$"+savedBills[0]));
    ul.appendChild(li);
}


 */
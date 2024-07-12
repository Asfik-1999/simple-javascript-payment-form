function processFormData() {
    let form = document.getElementById('myForm');
  
    let cardNumber = form.elements['number'].value;
    let holder = form.elements['holder'].value;
    let method = form.elements['pay'].value;
  
    // Insert data into the table
    insertdata(cardNumber, holder, method);
      
    // Clear the form fields
    clearFormData();
}

function insertdata(cardNumber, holder, method) {
    let table = document.getElementById('dataTable');
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = cardNumber;
    cell2.innerHTML = holder;
    cell3.innerHTML = method;
}

function clearFormData() {
    document.getElementById('myForm').reset();
}

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["tit"] = document.getElementById("tit").value;
    formData["type"] = document.getElementById("type").value;
    formData["emp"] = document.getElementById("emp").value;
    formData["num"] = document.getElementById("num").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tit;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.type;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.emp;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.num;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("tit").value = "";
    document.getElementById("type").value = "";
    document.getElementById("emp").value = "";
    document.getElementById("num").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tit").value = selectedRow.cells[0].innerHTML;
    document.getElementById("type").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emp").value = selectedRow.cells[2].innerHTML;
    document.getElementById("num").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tit;
    selectedRow.cells[1].innerHTML = formData.type;
    selectedRow.cells[2].innerHTML = formData.emp;
    selectedRow.cells[3].innerHTML = formData.num;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("tit").value == "") {
        isValid = false;
        document.getElementById("titValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titValidationError").classList.contains("hide"))
            document.getElementById("titValidationError").classList.add("hide");
    }
    return isValid;
}
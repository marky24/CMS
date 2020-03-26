var persons = []
var table_pregen = " <table id = \"mytable\" style=\"width:100%\"><tr><th>Iddd</th><th>Firstname</th><th>Lastname</th><th>Telephone</th><th>Action button</th></tr><tr><td></td><td><input id = \"name\" type=\"text\"></td><td><input id = \"surname\" type=\"text\"></td><td><input id = \"phone\" type=\"text\"></td><td align = \"center\" ><button id = \"add\" onclick=\"addFunction()\">Add new</button> </td></tr>";

function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

function generate_lines(){
	returned = "";
	var name = document.getElementById("name").value;
  	var surname = document.getElementById("surname").value;
  	var phone = document.getElementById("phone").value;
  	persons.push([name, surname, phone]);
  	//alert("kkk")
  	for (var i=0; i<persons.length; i++){
  		returned = returned + "<tr><td>" + i +"</td><td>"+ persons[i][0] +"</td><td>"+ persons[i][1] +"</td><td>"+ persons[i][2] +"</td><td align = \"center\" ><button id = \"delete it!\" onclick=\"deleteFunction(this)\">Delete it</button></td></tr>";
  	}
	return returned;
}

function no_add_generate_lines(){
	returned = "";
	var name = document.getElementById("name").value;
  	var surname = document.getElementById("surname").value;
  	var phone = document.getElementById("phone").value;
  	//persons.push([name, surname, phone]);
  	//alert("kkk")
  	for (var i=0; i<persons.length; i++){
  		returned = returned + "<tr><td>" + i +"</td><td>"+ persons[i][0] +"</td><td>"+ persons[i][1] +"</td><td>"+ persons[i][2] +"</td><td align = \"center\" ><button id = \"delete it!\" onclick=\"deleteFunction(this)\">Delete it</button></td></tr>";
  	}
	return returned;
}

function update_table(){
	//alert ("lll")
	var lines = no_add_generate_lines()
	//document.write("<p>keeeeeeeek</p>")
	var tableRef = document.getElementById("mytable");
	//alert (tableRef.innerHTML);
	tableRef.innerHTML =  table_pregen + lines + "</table>";

}

function add_update_table(){
	//alert ("lll")
	var lines = generate_lines()
	//document.write("<p>keeeeeeeek</p>")
	var tableRef = document.getElementById("mytable");
	//alert (tableRef.innerHTML);
	tableRef.innerHTML =  table_pregen + lines + "</table>";

}


function addFunction() {
  //document.getElementById("name").text = "red";
  //document.write()
  //alert ("jjj");
  var tableRef = document.getElementById("mytable");
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var phone = document.getElementById("phone").value;
  //addRow("mytable", name, surname, phone)
  //var btn = document.createElement("BUTTON");
  //buttonCell.style.textAlign = "center"; 
  //persons.push([name, surname, phone, btn]);
  //alert (persons);
  //table = makeTableHTML(persons);
  // tableRef.innerHTML = table;
  add_update_table();
  //alert("KEK")
}


function addRow(tableID, name, surname, phone) {
  // Get a reference to the table

  var tableRef = document.getElementById(tableID);

  // Insert a row in the table at row index 0
  var newRow = tableRef.insertRow();

  var lastRow = tableRef.rows[ tableRef.rows.length - 2 ];
  // Insert a cell in the row at index 0
  var idCell = newRow.insertCell();
  var nameCell = newRow.insertCell();
  var surnameCell = newRow.insertCell();
  var phoneCell = newRow.insertCell();
  var buttonCell = newRow.insertCell();

  var lastid = parseInt(lastRow.cells[0].innerHTML) + 1;
  //var lastid = "1"
  //alert (lastid)
  var newText = document.createTextNode(lastid);
  idCell.appendChild(newText)
  // Append a text node to the cell
  var newText = document.createTextNode(name);
  nameCell.appendChild(newText);

  var newText = document.createTextNode(surname);
  surnameCell.appendChild(newText);

  var newText = document.createTextNode(phone);
  phoneCell.appendChild(newText);

  var btn = document.createElement("BUTTON");
  btn.innerText = "Delete it!";
  btn.onclick = function() { delete_row_by_id(lastid); };
  //43 need fix
  buttonCell.style.textAlign = "center"; 

  //btn.setAttribute('text-align:center;');
  buttonCell.appendChild(btn);


}


function deleteFunction(e){
	//var num_to_delete = parseInt(document.getElementById("input_delete").value)
	//document.getElementById("mytable").deleteRow(num_to_delete + 1); 
	//update_id_in_table ()
	name_to_delete = e.parentElement.parentElement.cells[1].innerHTML;
	surname_to_delete = e.parentElement.parentElement.cells[2].innerHTML;
	num_to_delete = e.parentElement.parentElement.cells[3].innerHTML;
	const index = isItemInArray(persons, [name_to_delete, surname_to_delete, num_to_delete]);
	//alert ([name_to_delete, surname_to_delete, num_to_delete]);
	//alert (index);
	persons.splice(index, 1);
	update_table();
}

function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][0] == item[0] && array[i][1] == item[1] && array[i][2] == item[2]) {
            return i;   // Found it
        }
    }
    return -1;   // Not found
}

function update_id_in_table(){
	var table = document.getElementById("mytable");	
	var id_ = 1;
	//alert (id_);
	for (var i = 2, row; row = table.rows[i]; i++) {
		//alert (row.cells[0].innerHTML);
		row.cells[0].innerHTML = parseInt(id_)
		//row[i].Text = parseInt(id_);
		id_ = id_ + 1;
		//alert (id_);
	}

	
}

function delete_row_by_id (id_) {
	document.getElementById("mytable").deleteRow(id_); 
	update_id_in_table()
}

class Person {
  constructor(name, surnmae, phone) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
  }
}

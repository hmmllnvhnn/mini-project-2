function validateForm() {
  var customer = document.getElementById("customer").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var contact = document.getElementById("contact").value;
  var city = document.getElementById("city").value;
  var province = document.getElementById("province").value;
  var postal = document.getElementById("postal").value;

  if (customer == "") {
    alert("Customer ID is required");
    return false;
  }

  if (name == "") {
    alert("Name is required");
    return false;
  }

  if (email == "") {
    alert("Email is required");
    return false;
  }

  if (contact == "") {
    alert("Contact is required");
    return false;
  }

  if (city == "") {
    alert("City is required");
    return false;
  }

  if (province == "") {
    alert("Province is required");
    return false;
  }

  if (postal == "") {
    alert("Postal Code is required");
    return false;
  }

  return true;
}
// function to show data
function showData() {
  var customerList;
  if (localStorage.getItem("customerList") == null) {
    customerList = [];
  } else {
    customerList = JSON.parse(localStorage.getItem("customerList"));
  }

  var html = "";

  customerList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.customer + "</td>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.contact + "</td>";
    html += "<td>" + element.city + "</td>";
    html += "<td>" + element.province + "</td>";
    html += "<td>" + element.postal + "</td>";
    html +=
      '<td><button onclick="updateData(' +
      index +
      ')" class="btn" data-modal-target="#modal" id="updateBtn">Edit</i></button><button onclick="deleteData(' +
      index +
      ')" class="btn" id="deleteBtn">Delete</i></button</td>';
    html += "</tr>";
  });

  document.querySelector("#myTable tbody").innerHTML = html;
}

// Loads all data when document or page loaded
document.onload = showData();

// function to add data to local storage
function AddData() {
  if (validateForm() == true) {
    var customer = document.getElementById("customer").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var name = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var postal = document.getElementById("postal").value;

    var customerList;
    if (localStorage.getItem("customerList") == null) {
      customerList = [];
    } else {
      customerList = JSON.parse(localStorage.getItem("customerList"));
    }

    customerList.push({
      customer: customer,
      name: name,
      email: email,
      contact: contact,
      city: city,
      province: province,
      postal: postal,
    });

    localStorage.setItem("customerList", JSON.stringify(customerList));
    showData();
    document.getElementById("customer").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("city").value = "";
    document.getElementById("province").value = "";
    document.getElementById("postal").value = "";
  }
}

// fucntion to delete Data from local storage

function deleteData(index) {
  var customerList;
  if (localStorage.getItem("customerList") == null) {
    customerList = [];
  } else {
    customerList = JSON.parse(localStorage.getItem("customerList"));
  }

  customerList.splice(index, 1);
  localStorage.setItem("customerList", JSON.stringify(customerList));
  showData();
}

// function to update/edit data in local storage
function updateData(index) {
  // submit button will hide and Update button will show for updating Data in Local Storage
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var customerList;
  if (localStorage.getItem("customerList") == null) {
    customerList = [];
  } else {
    customerList = JSON.parse(localStorage.getItem("customerList"));
  }

  document.getElementById("customer").value = customerList[index].customer;
  document.getElementById("name").value = customerList[index].name;
  document.getElementById("email").value = customerList[index].email;
  document.getElementById("contact").value = customerList[index].contact;
  document.getElementById("city").value = customerList[index].city;
  document.getElementById("province").value = customerList[index].province;
  document.getElementById("postal").value = customerList[index].postal;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() == true) {
      customerList[index].customer = document.getElementById("customer").value;
      customerList[index].name = document.getElementById("name").value;
      customerList[index].email = document.getElementById("email").value;
      customerList[index].contact = document.getElementById("contact").value;
      customerList[index].city = document.getElementById("city").value;
      customerList[index].province = document.getElementById("province").value;
      customerList[index].postal = document.getElementById("postal").value;

      localStorage.setItem("customerList", JSON.stringify(customerList));

      showData();

      document.getElementById("customer").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contact").value = "";
      document.getElementById("city").value = "";
      document.getElementById("province").value = "";
      document.getElementById("postal").value = "";

      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}
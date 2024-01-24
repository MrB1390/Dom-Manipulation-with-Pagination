let currentPage = 1;
const itemsPerPage = 10;
let details = []; 

function fetchData() {
    fetch("data.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            details = data; 
            updateTable();
            updatePagination();
        });
}

function updateTable() {
    let Detvalue = document.querySelector("#data-table");
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let newd = "";

    for (let i = startIndex; i < endIndex && i < details.length; i++) {
        let det = details[i];
        newd += `
            <tr>
                <td>${det.id}</td>
                <td>${det.name}</td>
                <td>${det.email}</td>
            </tr>`;
    }

    Detvalue.innerHTML = newd;
}

function updatePagination() {
    document.getElementById("currentPage").textContent = currentPage;
}

document.getElementById("prevBtn").addEventListener("click", function () {
    if (currentPage > 1) {
        currentPage--;
        updateTable();
        updatePagination();
    }
});

document.getElementById("nextBtn").addEventListener("click", function () {
    if ((currentPage * itemsPerPage) < details.length) {
        currentPage++;
        updateTable();
        updatePagination();
    }
});

fetchData();
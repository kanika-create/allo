const tables = document.querySelectorAll('table');

function updateTables(data) {
  tables.forEach((table, index) => {
    const tableData = data[index] || []; // Use empty array if no data
    const tableBody = document.createElement('tbody');
    tableData.forEach(row => {
      const tableRow = document.createElement('tr');
      row.forEach(cell => {
        const tableCell = document.createElement('td');
        tableCell.textContent = cell;
        tableRow.appendChild(tableCell);
      });
      tableBody.appendChild(tableRow);
    });
    table.appendChild(tableBody);
  });
}

function fetchData() {
  // Replace with the URL of your deployed Google Apps Script web app
  const url = "https://script.googleusercontent.com/a/macros/26milescapital.com/echo?user_content_key=wzp-zwyyl0LV3GsAA_N374ZI0mUAQGAhwHE4KUBYZ8uIY0lEK6fHKz7mF8wdREtd4uDufgr0EbZR0EPz86QRn9P1xeBp356IOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKDzOw5y8jaqiOTd2Wg404kcEyMxDDgvZjKas4LIvasN6s6Yvrei_R1nXJUOtP0R9ro19VfERhbkvwAi4OnHbzPmdjc_FAmfeGVVElZ85508AYp3MdhkiIbvnthWqxbJl8MOL9m-W1cW1w&lib=MsPjsZPSxYL12cAubIFTWmSkC8p6K_I1v";
  fetch(url)
    .then(response => response.json())
    .then(data => updateTables(data))
    .catch(error => console.error("Error fetching data:", error));
}

fetchData();

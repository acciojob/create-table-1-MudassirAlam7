function insert_Row() {
    // Get the table element by ID
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert cells in the new row
    let cell1 = newRow.insertCell(0); // First cell
    let cell2 = newRow.insertCell(1); // Second cell

    // Set the text content of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}

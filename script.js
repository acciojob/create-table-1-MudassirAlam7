let btn = document.querySelector('input')
let table = document.querySelector('#sampleTable')


let count = 1
function insert_Row() {
  let newRow = document.createElement('tr')
            let cell1 = document.createElement('td')
            let cell2 = document.createElement('td')
            cell1.textContent = `New Cell${count}`
            cell2.textContent = `New Cell${count}`
            newRow.appendChild(cell1)
            newRow.appendChild(cell2)

	let firstrow = table.firstChild;
    table.insertBefore(newRow, firstrow)

	
            count++  
	
  
  
}

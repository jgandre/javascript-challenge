// const tableData = data
// const tbody = d3.select('tbody')

// function buildTable(data) {
//     tbody.html('')  // Clear existing data

//     data.forEach(row => {
//         const currentRow = tbody.append('tr')  // append row
//         Object.values(row).forEach(value => {
//             const cell = currentRow.append('td')
//             cell.text(value)
//         })
//     })
// }

// const handleClick = () => {
//     d3.event.preventDefault()

//     const date = d3.select('#datetime').property('value')
//     let filteredData = tableData;

//     if (date)
//         filteredData = filteredData.filter(row => row.datetime === date)
    
//     tbody.html('')  // Clear existing data

//     data.forEach(row => {
//         const currentRow = tbody.append('tr')  // append row
//         Object.values(row).forEach(value => {
//             const cell = currentRow.append('td')
//             cell.text(value)
//         })
//     })
// }

// d3.selectAll('#filter-btn').on('click', handleClick)
// // buildTable(tableData)

// / Julie
function showData() {
    
    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove()
    
    let headerRow = table.append("tr")

    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Comments")

    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        // row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)
    })
}

// showData(data);

function handleClick() {
    let date = d3.select("#date-filter-input").property("value")
    let filteredData = data.filter((d) => d.datetime === date)
    // let filteredData = data

    // showStats(filteredData)
    showData(filteredData)
    console.log(filteredData)
    
}

// d3.select("#table-button").on("click", handleClick)
d3.selectAll('#filter-btn').on('click', handleClick)
























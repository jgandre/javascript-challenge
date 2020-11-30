function showData(data) {
    
    let table = d3.select("#ufo-table")

    table.selectAll("tr").remove()
    
    let headerRow = table.append("tr")

    headerRow.append("th").text("Date")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration Minutes")
    headerRow.append("th").text("Comments")

    let tableBody = table.append("tbody")

    data.forEach((d) => {
        let row = tableBody.append("tr")
        row.append("td").text(d.datetime)
        row.append("td").text(d.city)
        row.append("td").text(d.state)
        row.append("td").text(d.country)
        row.append("td").text(d.shape)
        row.append("td").text(d.durationMinutes)
        row.append("td").text(d.comments)
    })
}

// function showStats(data) {
//     let ul = d3.select("#stats");

//     ul.selectAll("li").remove()

//     let ages = data.map((d) => d.age)

//     ul.append("li").text(`Mean: ${math.mean(ages)}`)
//     ul.append("li").text(`Median: ${math.median(ages)}`)
//     ul.append("li").text(`Mode: ${math.mode(ages)}`)
//     ul.append("li").text(`Variance: ${math.var(ages)}`)
//     ul.append("li").text(`Standard Deviation: ${math.std(ages)}`)

//     ul.selectAll("li").classed("list-group-item", true)

// }

function handleClick() {
    let datetime = d3.select("#dateime").property("value")
    let filteredData = data.filter((d) => d.datetime === datetime)

    // showStats(filteredData)
    showData(filteredData)
}

d3.select("#table-button").on("click", handleClick)
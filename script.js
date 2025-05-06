const data = [
  { "CLASS NAME": "AGRICULTURE", "LOSS": 33274.56819, "GAIN": 42073.45383, "CHANGE INDEX": 0.60594958, "UNCHANGED": 14520.82143 },
  { "CLASS NAME": "FALLOW LAND", "LOSS": 5112.064099, "GAIN": 1178.488268, "CHANGE INDEX": -16.28209217, "UNCHANGED": 241.58909 },
  { "CLASS NAME": "LOW DENSITY URBAN", "LOSS": 25097.41785, "GAIN": 33366.01973, "CHANGE INDEX": 1.207186054, "UNCHANGED": 6849.484265 },
  { "CLASS NAME": "HIGHLY DENCE URBAN", "LOSS": 19810.99853, "GAIN": 29765.3822, "CHANGE INDEX": 0.659809224, "UNCHANGED": 15086.76041 },
  { "CLASS NAME": "WATER BODY", "LOSS": 946.2888771, "GAIN": 1065.817935, "CHANGE INDEX": 0.252361307, "UNCHANGED": 473.6425693 },
  { "CLASS NAME": "SHRAB", "LOSS": 24265.81787, "GAIN": 10876.56743, "CHANGE INDEX": -1.833989475, "UNCHANGED": 7300.614658 },
  { "CLASS NAME": "FOREST", "LOSS": 12331.70022, "GAIN": 7662.068626, "CHANGE INDEX": -1.411986633, "UNCHANGED": 3307.135838 },
  { "CLASS NAME": "VEGITATION", "LOSS": 15196.78024, "GAIN": 10047.83786, "CHANGE INDEX": -3.490233083, "UNCHANGED": 1475.243132 }
];

// Populate Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row["CHANGE INDEX"].toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});











  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
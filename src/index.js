document.addEventListener("DOMContentLoaded", () => {
  console.log('This is a fully operational battle station');

  let width = 1280, height = 720;

  let svg = d3.select("body").append("svg")
    .attr("class", "map")
    .attr("width", width)
    .attr("height", height);

  document.querySelector('.map').addEventListener("click", e => {
    e.preventDefault();
    console.log(e.target.dataset.state);
  })

  d3.json('./src/counties.json', res => {
    console.log(res);
    let proj = d3.geo.albersUsa().translate([width/2, height/2]).scale(1500);  
    let path = d3.geo.path().projection(proj);
    // svg.append("path")
    //   .datum(res)
    //   .attr("d", path);
    svg.selectAll(".subunit")
      .data(res.features)
      .enter().append("path")
        .attr("class", d => "subunit " + d.properties.REGION)
        .attr("d", path)
        .attr("data-state", d => d.properties.REGION)
  })
});
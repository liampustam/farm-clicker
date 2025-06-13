let points = 0

let pointCounter = document.getElementById("pointCounter")

function changePoint(amount) {

  points = points + amount

  console.log(points)
  
  pointCounter.innerText = points.toFixed(2) + ' Points'
}

function addPoint() {
  points = points + 1 
  console.log(points)
  document.getElementsById("counter").innerText - "ANIMALS" + points ;
}


function bigClick() {
  let basePoint = 1



  changePoint(basePoint)
}

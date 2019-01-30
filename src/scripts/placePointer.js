function placePointer(el) {
  let points = JSON.parse(window.localStorage.getItem("points"))
  points.push([el.screenX, el.screenY])
  window.localStorage.setItem("points", JSON.stringify(points))
  console.log("placing point " + el.screenX + ' ' + el.screenY)
}

export { placePointer }

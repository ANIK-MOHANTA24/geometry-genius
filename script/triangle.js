function caculationTriangleArea() {
  // console.log('function');
  // get triangle base
  const triangleBaseInput = document.getElementById('input-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  // console.log(base);

  //get tringle hight
  const triangleHightInput = document.getElementById('input-hight');
  const triangleHightText = triangleHightInput.value;
  const hight = parseFloat(triangleHightText);
  // console.log(hight);

  // get  area
  const area = 0.5 * base * hight;
  console.log(area);

  // display result
  const triangleAreaSpan = document.getElementById('triangle-area');
  triangleAreaSpan.innerText = area;
}

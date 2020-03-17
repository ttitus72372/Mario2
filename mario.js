function printPyramid() {
  let height = parseInt(document.getElementById("layers").value)
  let x = height;
  let pyramid = ["##"];
  let brick ="#";
  
  while(pyramid.length < x){
    let current_layer = pyramid[pyramid.length - 1]
    let build = current_layer.concat(brick)
    pyramid.push(build);
  }

  for(i=0;i<pyramid.length;i++){
    var para = document.createElement("P");
    para.innerHTML = pyramid[i];
    document.getElementById("pyramid").appendChild(para);
  }
}
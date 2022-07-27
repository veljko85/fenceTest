function addDefaultMaterial(
  fenceBoards,
  fenceBoardMat,
  sturmankersVorderseite,
  rightPosts,
  leftPosts,
  fenceBoardMat,
  fencePostMat,
  addFenceSings,
  preckes,
  preckeMat
) {
  sturmankersVorderseite.forEach((elm) => {
    elm.material = fencePostMat;
  });
  //posts material
  rightPosts.forEach((elm) => {
    elm.material = fencePostMat;
  });
  leftPosts.forEach((elm) => {
    elm.material = fencePostMat;
  });
  //boards material
  fenceBoards.forEach((elm) => {
    elm.forEach((elmInside) => {
      elmInside.material = fenceBoardMat;
    });
  });
  //sings material
  addFenceSings.forEach((elm) => {
    elm.isVisible = false;
  });
  //precke material
  preckes.forEach((elm) => {
    elm.forEach((elmInside) => {
      elmInside.material = preckeMat;
    });
  });
}

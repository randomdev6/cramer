const calcButton = document.querySelector(".calc-btn");
const eqnInputs = document.querySelectorAll("input[type=number]");

function getDataArray() {
  const equationsData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 12; i++) {
    let eqnNum = Math.floor(i / 4);
    let dataValue = parseInt(eqnInputs[i].value == "" ? 0 : eqnInputs[i].value);
    console.log(typeof dataValue);
    equationsData[eqnNum][i % 4] = dataValue;
  }
  return equationsData;
}

calcButton.onclick = () => {
  const dataArray = getDataArray();
};

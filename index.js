const headerButton = document.getElementById("header-button");
const input = document.getElementById("header-input");
const meterEl = document.getElementById("meter-result");
const literEl = document.getElementById("liter-result");
const kilogramEl = document.getElementById("kilogram-result");

headerButton.addEventListener("click", () => {
  renderResult();
});

const renderResult = () => {
  const inputValue = input.value;
  const meterResult = (inputValue * 3.28084).toFixed(3);
  const feetResult = (inputValue / 3.28084).toFixed(3);
  const literResult = (inputValue * 0.264172).toFixed(3);
  const gallonResult = (inputValue / 0.264172).toFixed(3);
  const kilogramResult = (inputValue * 2.20462).toFixed(3);
  const poundResult = (inputValue / 2.20462).toFixed(3);

  meterEl.innerHTML = `${inputValue} meters = ${meterResult} feet | ${inputValue} feet = ${feetResult} meters`;
  literEl.innerHTML = `${inputValue} liters = ${literResult} gallons | ${inputValue} gallons = ${gallonResult} liters`;
  kilogramEl.innerHTML = `${inputValue} kilos = ${kilogramResult} pounds | ${inputValue} pounds = ${poundResult} kilos`;
  meterEl.innerHTML = `${inputValue} meters = ${meterResult} feet | ${inputValue} feet = ${feetResult} meters`;
  literEl.innerHTML = `${inputValue} liters = ${literResult} gallons | ${inputValue} gallons = ${gallonResult} liters`;
  kilogramEl.innerHTML = `${inputValue} kilos = ${kilogramResult} pounds | ${inputValue} pounds = ${poundResult} kilos`;
};

renderResult();

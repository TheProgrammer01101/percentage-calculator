let percentInput = document.querySelector('input#percent-number');
let valueInput = document.querySelector('input#whole-number');
let labelResult = document.querySelector('label#result')
let calculate_button = document.querySelector('input[type="button"]');

calculate_button.addEventListener('click', calculate);


function calculate() {
  let result;
  if(percentInput.value > 100) 
    percentInput.value = 100;

    result = percentInput.value * valueInput.value;
    result = result / 100;
    labelResult.innerHTML = `( ${percentInput.value}% of ${valueInput.value} is <em>${result} )</em> <br> <br>
    <em> meaning if a price of a jacket is $${valueInput.value}, 
    but you get a discount of ${percentInput.value}%, you <strong>save $${result}</strong> that means you get the <strong>jacket for $${parseFloat(valueInput.value - result).toFixed(2)}</strong></em> ;D`;
}



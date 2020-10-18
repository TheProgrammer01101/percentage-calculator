let percent_textbox = document.querySelector('.percent-tb');
let value_textbox = document.querySelector('.value-tb');
let label_result = document.querySelector('label[for="result"]')
let calculate_button = document.querySelector('input[type="button"]');

function DoIt() {

  function remove_non_numeric() {
    percent_textbox.value = percent_textbox.value.replace(/[^\d.-]/g, '');
    value_textbox.value = value_textbox.value.replace(/[^\d.-]/g, '');
  }
  percent_textbox.addEventListener('change', remove_non_numeric);
  value_textbox.addEventListener('change', remove_non_numeric);

  function calculation_process () {
    var calculation;
    if(percent_textbox.value > 100)
      {percent_textbox.value = 100;}

      calculation = percent_textbox.value * value_textbox.value;
      calculation = calculation / 100;
      label_result.innerHTML = "Result: " + calculation;
    }


  calculate_button.addEventListener('click', calculation_process);
}

DoIt();


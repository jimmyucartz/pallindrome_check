const checkfunc = (e) => {
  e.preventDefault();

  let input_value = document.forms["check_pallindrome"].input_str.value;
  let result;

  let input_type;
  if (document.forms["check_pallindrome"].str_type.value == "string") {
    input_type = "string";
  } else {
    input_type = "number";
  }

  switch (input_type) {
    case "string":
      if (input_value.split("").reverse().join("") === input_value) {
        result = "String is Pallindrome";
        break;
      }
      result = "String is not Pallindrome";
      break;
    case "number":
      let number = Number(input_value);
      let new_number = 0;
      let old_num = Number(input_value);

      while (number > 1) {
        new_number = new_number * 10 + Math.floor(number % 10);
        number = number / 10;
      }

      if (old_num === new_number) {
        result = "Number is Pallindrome";
        break;
      }
      result = "Number is not Pallindrome";
      break;
  }

  let output = document.getElementById("result");
  output.innerText = result;
};

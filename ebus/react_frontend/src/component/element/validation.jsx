export function validateEmail(email) {
  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const isEmail = emailRegExp.test(email);
  const emailLength = email.length;
  let text = "";
  if (emailLength === 0) {
    text = "Email порожній";
  } else if (!isEmail) {
    text = "Email некоректний";
  } else {
    text = "";
  }
  return text;
}

export function validatePassword(password) {
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  const minLengthRegExp = /.{6,}/;
  const passwordLength = password.length;
  const uppercasePassword = uppercaseRegExp.test(password);
  const lowercasePassword = lowercaseRegExp.test(password);
  const digitsPassword = digitsRegExp.test(password);
  const specialCharPassword = specialCharRegExp.test(password);
  const minLengthPassword = minLengthRegExp.test(password);

  let text = "";
  if (passwordLength === 0) {
    text = "Пароль порожній";
  } else if (!uppercasePassword) {
    text = "Пароль повинен містити хоча б одну велику літеру";
  } else if (!lowercasePassword) {
    text = "Пароль повинен містити хоча б одну малу літеру";
  } else if (!digitsPassword) {
    text = "Пароль повинен містити хоча б одну цифру";
  } else if (!specialCharPassword) {
    text = "Пароль повинен містити хоча б один спеціальний символ";
  } else if (!minLengthPassword) {
    text = "Пароль повинен містити мінімум 6 символів";
  } else {
    text = "";
  }
  return text;
}

export function validateSearch(from, to, date, person) {
  if (from === "" || to === "" || date === new Date()) {
    return false;
  } else {
    return true;
  }
}

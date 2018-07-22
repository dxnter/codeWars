// https://www.codewars.com/kata/driving-license/train/javascript

function driver(data) {
  const [firstName, middleName, lastName, DOB, gender] = data;
  const dateObj = new Date(DOB);
  const year = dateObj.getFullYear().toString();
  const decadeDigit = DOB.charAt(DOB.length - 2);

  const foreName = lastName.length >= 5 ? lastName.toUpperCase() : lastName.toUpperCase().padEnd(5, 9);
  const parsedMonth = (dateObj.getMonth() + 1).toString().padStart(2, 0);
  const birthMonth = gender === 'M' ? parsedMonth : `${parseInt(parsedMonth.charAt(0)) + 5}${parsedMonth.substr(1)}`;
  const birthDay = dateObj
    .getDate()
    .toString()
    .padStart(2, 0);
  const initials = `${firstName.charAt(0)}${middleName === '' ? 9 : middleName.charAt(0)}`;

  const licenseNumber = `${foreName}${decadeDigit}${birthMonth}${birthDay}${year.charAt(
    year.length - 1
  )}${initials}9AA`;
  return licenseNumber;
}

const data1 = ['John', 'James', 'Smith', '01-Jan-2000', 'M'];
console.log(driver(data1));

const data2 = ['Johanna', '', 'Gibbs', '13-Dec-1981', 'F'];
console.log(driver(data2));

const data3 = ['Andrew', 'Robert', 'Lee', '02-September-1981', 'M'];
console.log(driver(data3));

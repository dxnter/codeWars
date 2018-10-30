/*
Coding Meetup #2 - Higher-Order Function Series - Greet developers
===
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?
*/

const list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' },
];

const greetDevelopers = arr => {
  const newUsers = [];
  arr.map(user =>
    newUsers.push({ ...user, greeting: `Hi ${user.firstName}, what do you like most about ${user.language}?` })
  );
  return newUsers;
};

console.log(greetDevelopers(list1));

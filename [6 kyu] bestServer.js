/*
Fake website #2: Choose a best server to create website
===
What is a best server? John mainly from two aspects to consider:

One is the performance, including network delay and disconnection
rate; The other is the price. that is, the annual rent of the server.

John has selected some servers, asked the annual rental price of these servers, and each server for 1 day of performance testing (24 hours).
Get one test data per hour, test data is the value of network delay. Unit: millisecond.
Please help John write the function bestServer to find the best choice.
Function bestServer accept 1 parameter servers, it is an array of servers data.
 */

function bestServer(servers) {
  const serverList = servers
    .map(server => {
      const { price, name, testdata: dailyNetworkDelay } = server;
      const disconnections = dailyNetworkDelay.filter(networkResponse => networkResponse === -1);
      const disconnectionRate = Number((disconnections.length / 24 * 100).toFixed(2));
      const averageNetworkDelay =
        dailyNetworkDelay.filter(networkResponse => networkResponse !== -1).reduce((a, b) => a + b) /
        (24 - disconnections.length);
      const delayExceeding = dailyNetworkDelay.filter(networkResponse => networkResponse > 300).length;
      return {
        name,
        delayExceeding,
        data: {
          price,
          disconnectionRate,
          averageNetworkDelay,
        },
      };
    })
    .filter(server => server.data.disconnectionRate <= 20 && server.delayExceeding === 0 && server.data.price <= 500);

  if (serverList.length === 0) return '';

  const summedData = serverList.map(server => Object.values(server.data)).map(server => server.reduce((a, b) => a + b));
  const lowestSum = summedData.indexOf(Math.min(...summedData));

  return serverList[lowestSum].name;
}

const sv1 = {
  name: 'server1',
  price: 300,
  testdata: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
};
const sv2 = {
  name: 'server2',
  price: 400,
  testdata: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
};
const sv3 = {
  name: 'server3',
  price: 300,
  testdata: [-1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
};
const sv4 = {
  name: 'server4',
  price: 300,
  testdata: [-1, -1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
};
const sv5 = {
  name: 'server5',
  price: 400,
  testdata: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
};
const sv6 = {
  name: 'server6',
  price: 300,
  testdata: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
};
const sv7 = {
  name: 'server7',
  price: 200,
  testdata: [-1, -1, -1, -1, -1, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
};
const sv8 = {
  name: 'server8',
  price: 200,
  testdata: [301, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
};
const sv9 = {
  name: 'server9',
  price: 501,
  testdata: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
};

console.log(bestServer([sv1, sv2]));
console.log(bestServer([sv3, sv4]));
console.log(bestServer([sv1, sv5]));
console.log(bestServer([sv5, sv6]));
console.log(bestServer([sv1, sv7]));
console.log(bestServer([sv7, sv8, sv9]));

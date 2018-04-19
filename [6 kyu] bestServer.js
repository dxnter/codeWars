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

var sv1 = { name: "server1", price: 300, testdata: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
  sv2 = { name: "server2", price: 400, testdata: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
  sv3 = { name: "server3", price: 300, testdata: [-1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
  sv4 = { name: "server4", price: 300, testdata: [-1, -1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50] },
  sv5 = { name: "server5", price: 400, testdata: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
  sv6 = { name: "server6", price: 300, testdata: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
  sv7 = { name: "server7", price: 200, testdata: [-1, -1, -1, -1, -1, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
  sv8 = { name: "server8", price: 200, testdata: [301, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] },
  sv9 = { name: "server9", price: 501, testdata: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40] };

// https://www.codewars.com/kata/player-contact-manager/train/javascript

function playerManager(players) {
  if (players === '' || !players) return [];
  const arr = players.split(', ');
  const res = [];
  while (arr.length > 0) {
    res.push({ player: arr.shift(), contact: arr.shift() * 1 });
  }
  return res;
}

console.log(playerManager('John Doe, 8167238327, Jane Doe, 8163723827'));

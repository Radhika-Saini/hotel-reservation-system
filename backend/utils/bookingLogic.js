function getTravelTime(rooms) {
  if (rooms.length === 0) return 0;
  const floors = rooms.map(r => Math.floor(r / 100));
  const minFloor = Math.min(...floors);
  const maxFloor = Math.max(...floors);
  const vertical = (maxFloor - minFloor) * 2;
  const horizontal = rooms[rooms.length-1]-rooms[0];
  // console.log(rooms,vertical+horizontal)
  return vertical + horizontal;
}

function findBestRooms(hotel, count) {
  const availableRooms = Object.entries(hotel)
    .filter(([_, v]) => !v.occupied)
    .map(([room]) => parseInt(room))
    .sort((a, b) => a - b);

  let bestTime = Infinity;
  let bestCombo = null;

  for (let i = 0; i <= availableRooms.length - count; i++) {
    const combo = availableRooms.slice(i, i + count);
    // console.log(combo)

    const time = getTravelTime(combo);

    if (time < bestTime) {
      bestTime = time;
      bestCombo = combo;
    }
  }

  return bestCombo;
}

module.exports = { findBestRooms };
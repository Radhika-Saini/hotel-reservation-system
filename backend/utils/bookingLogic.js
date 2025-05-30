function getTravelTime(rooms) {
  if (rooms.length === 0) return 0;
  const floors = rooms.map(r => Math.floor(r / 100));
  const minFloor = Math.min(...floors);
  const maxFloor = Math.max(...floors);
  const vertical = (maxFloor - minFloor) * 2;

  let horizontal = 0;
  const groupedByFloor = {};
  rooms.forEach(r => {
    const floor = Math.floor(r / 100);
    if (!groupedByFloor[floor]) groupedByFloor[floor] = [];
    groupedByFloor[floor].push(r % 100);
  });

  Object.values(groupedByFloor).forEach(roomNums => {
    const min = Math.min(...roomNums);
    const max = Math.max(...roomNums);
    horizontal += (max - min);
  });

  return vertical + horizontal;
}

function combinations(arr, k) {
  if (k === 0) return [[]];
  if (arr.length < k) return [];
  const [first, ...rest] = arr;
  const withFirst = combinations(rest, k - 1).map(c => [first, ...c]);
  const withoutFirst = combinations(rest, k);
  return withFirst.concat(withoutFirst);
}

function findBestRooms(hotel, count) {
  const availableRooms = Object.entries(hotel)
    .filter(([_, v]) => !v.occupied)
    .map(([room]) => parseInt(room));

  const groupedByFloor = {};
  for (let room of availableRooms) {
    const floor = Math.floor(room / 100);
    if (!groupedByFloor[floor]) groupedByFloor[floor] = [];
    groupedByFloor[floor].push(room);
  }

  // Priority 1: Same floor rooms
  for (let floor in groupedByFloor) {
    if (groupedByFloor[floor].length >= count) {
      const combos = combinations(groupedByFloor[floor], count);
      let bestCombo = null;
      let bestTime = Infinity;
      for (let c of combos) {
        const time = getTravelTime(c);
        if (time < bestTime) {
          bestCombo = c;
          bestTime = time;
        }
      }
      if (bestCombo) return bestCombo;
    }
  }

  // Priority 2: Any floor, minimal travel time
  const allCombos = combinations(availableRooms, count);
  let bestCombo = null;
  let bestTime = Infinity;
  for (let combo of allCombos) {
    const time = getTravelTime(combo);
    if (time < bestTime) {
      bestTime = time;
      bestCombo = combo;
    }
  }

  return bestCombo;
}

module.exports = { findBestRooms };




// function getTravelTime(rooms) {
//   if (rooms.length === 0) return 0;
//   const floors = rooms.map(r => Math.floor(r / 100));
//   const minFloor = Math.min(...floors);
//   const maxFloor = Math.max(...floors);
//   const vertical = (maxFloor - minFloor) * 2;
//   const horizontal = rooms.length - 1;
//   return vertical + horizontal;
// }

// function findBestRooms(hotel, count) {
//   let availableRooms = Object.entries(hotel)
//     .filter(([_, value]) => !value.occupied)
//     .map(([room]) => parseInt(room));

//   let bestCombo = null;
//   let bestTime = Infinity;

//   function combinations(arr, k) {
//     if (k === 0) return [[]];
//     if (arr.length < k) return [];
//     const [first, ...rest] = arr;
//     const withFirst = combinations(rest, k - 1).map(c => [first, ...c]);
//     const withoutFirst = combinations(rest, k);
//     return withFirst.concat(withoutFirst);
//   }

//   const combos = combinations(availableRooms, count);
//   for (let combo of combos) {
//     const time = getTravelTime(combo);
//     if (time < bestTime) {
//       bestTime = time;
//       bestCombo = combo;
//     }
//   }

//   return bestCombo;
// }

// module.exports = { findBestRooms };

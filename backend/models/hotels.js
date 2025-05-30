let hotel = {};
for (let floor = 1; floor <= 10; floor++) {
  const numRooms = floor === 10 ? 7 : 10;
  for (let i = 1; i <= numRooms; i++) {
    const roomNumber = floor === 10 ? 1000 + i : floor * 100 + i;
    hotel[roomNumber] = { occupied: false };
  }
}
module.exports = hotel;
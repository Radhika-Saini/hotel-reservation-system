const hotel = require('../models/hotels');
const { findBestRooms } = require('../utils/bookingLogic');

exports.bookRooms = (req, res) => {
  const { count } = req.body;
  if (!count || count < 1 || count > 5) {
    return res.status(400).json({ message: 'Can book 1 to 5 rooms only.' });
  }

  const rooms = findBestRooms(hotel, count);
  if (!rooms) return res.status(400).json({ message: 'Not enough rooms.' });

  rooms.forEach(r => hotel[r].occupied = true);
  res.json({ bookedRooms: rooms });
};

exports.randomOccupy = (req, res) => {
  const keys = Object.keys(hotel);
  for (let r of keys) hotel[r].occupied = false;
  const n = Math.floor(Math.random() * 30) + 10;
  for (let i = 0; i < n; i++) {
    const rand = keys[Math.floor(Math.random() * keys.length)];
    hotel[rand].occupied = true;
  }
  res.json({ message: 'Random occupancy generated' });
};

exports.resetHotel = (req, res) => {
  for (let room in hotel) hotel[room].occupied = false;
  res.json({ message: 'Hotel reset' });
};

exports.getHotel = (req, res) => {
  res.json(hotel);
};

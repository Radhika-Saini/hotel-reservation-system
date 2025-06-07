//const BASE_URL = 'http://localhost:5000/api/book';
//To Deploy
const BASE_URL = 'https://hotel-backend-lhgv.onrender.com/api/book';

export const getHotel = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const resetHotel = async () => {
  await fetch(`${BASE_URL}/reset`, { method: 'POST' });
};

export const randomOccupy = async () => {
  await fetch(`${BASE_URL}/random`, { method: 'POST' });
};

export const bookRooms = async (count) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count })
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Booking failed');
  }

  return res.json();
};

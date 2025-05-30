import React, { useEffect, useState } from 'react';
import RoomGrid from './components/RoomGrid';
import Controls from './components/Controls';
import { bookRooms, getHotel, resetHotel, randomOccupy } from './services/api';

const App = () => {
  const [hotel, setHotel] = useState({});

  const fetchHotel = async () => {
    const data = await getHotel();
    setHotel(data);
  };

  useEffect(() => {
    fetchHotel();
  }, []);

//   const handleBook = async (count) => {
//     await bookRooms(count);
//     fetchHotel();
//   };

const handleBook = async (count) => {
  try {
    await bookRooms(count);
    fetchHotel();
  } catch (error) {
    alert(error.message); 
  }
};


  const handleReset = async () => {
    await resetHotel();
    fetchHotel();
  };

  const handleRandom = async () => {
    await randomOccupy();
    fetchHotel();
  };

  return (
    <div className="container">
      <h1>Hotel Room Reservation System</h1>
      <Controls onBook={handleBook} onReset={handleReset} onRandom={handleRandom} />
      <RoomGrid hotel={hotel} />
    </div>
  );
};

export default App;
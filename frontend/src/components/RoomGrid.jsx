import React from 'react';

const RoomGrid = ({ hotel }) => {
  const floors = {};
  Object.entries(hotel).forEach(([room, status]) => {
    const floor = Math.floor(room / 100);
    if (!floors[floor]) floors[floor] = [];
    floors[floor].push({ room, ...status });
  });

  return (
    <div className="grid">
      {Object.entries(floors).map(([floor, rooms]) => (
        <div key={floor} className="floor">
          <h3>Floor {floor}</h3>
          <div className="rooms">
            {rooms.map(({ room, occupied }) => (
              <div key={room} className={`room ${occupied ? 'occupied' : 'available'}`}>{room}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;
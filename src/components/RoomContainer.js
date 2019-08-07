import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomList from './RoomsList';

export default function RoomsContainer() {
    return (
        <div>
            Hello from rooms RoomsContainer
            <RoomsFilter />
            <RoomList />
        </div>
    );
}

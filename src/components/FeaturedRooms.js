import React, { Component } from 'react';
import {RoomContext} from "../context";
import Title from './Title';
import Room from "./Room";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
      const {  FeaturedRooms : Rooms } =
       this.context;
      rooms = rooms.map(room => {
     return <Room key={room.id} room={room} />;
      });

      return (      
         <section className = "featured-rooms">
           <Title title="featured rooms" />
           <div className ="featured-rooms-center">
      {loading ? <Loading /> : rooms}
           </div>
           <Loading />

         </section>
         
         
        
      );
}
}
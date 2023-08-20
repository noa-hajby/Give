import React from 'react';
import '../cardsalbum/volunteerings.css';
import CardVoluntiring from '../cardVolunteering/cardVoluntiring';


export default function ListCards({ kindVolunteerings,city, age, minDuringTime, maxDuringTime, numDayOfWeek }) {
  console.log(kindVolunteerings?.length)
  
  return (
    <div>
      {
        kindVolunteerings?.length && kindVolunteerings.map((kindVolunteering => {
          return <CardVoluntiring kindVolunteering={kindVolunteering}/>
        }))
      }
    </div>
  );
}
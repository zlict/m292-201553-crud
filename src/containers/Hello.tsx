import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { CounterContext } from '../App';

type RouteParams = {
    name: string;
}

export const HelloContainer: React.FC = () => {
  const params = useParams<RouteParams>();  
  const value = useContext(CounterContext);
  return (
    <>
      Hallo {params.name}!
      Counter: {value}
      <Link to="/users">Zu den Benutzern</Link>
    </>
  );
};

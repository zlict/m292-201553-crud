import React from 'react';
import { Link, useParams } from "react-router-dom";

type RouteParams = {
    name: string;
}

export const HelloContainer: React.FC = () => {
  const params = useParams<RouteParams>();  
  return (
    <>
      Hallo {params.name}
      <Link to="/users">Zu den Benutzern</Link>
    </>
  );
};

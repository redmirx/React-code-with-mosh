import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/posts"></Link>
        </li>
        <li>
          <Link to="/admin/users"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;

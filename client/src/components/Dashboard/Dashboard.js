import React from "react";
import dashboardImg from "../../assets/img/dashboard.jpg";

export default function Dashboard() {
  return (
    <div>
      <img
        className="dashboard_content"
        src={dashboardImg}
        alt="dashboard logo"
      />
    </div>
  );
}

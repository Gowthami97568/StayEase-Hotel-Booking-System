import "./DashboardCard.css";

function DashboardCard({ title, value, icon, color }) {
  return (
    <div className={`dashboard-card ${color}`}>
      <div className="dashboard-card-icon">
        {icon}
      </div>

      <div className="dashboard-card-content">
        <h3>{title}</h3>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;
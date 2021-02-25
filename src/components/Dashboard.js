import { useSelector } from 'react-redux';
import Map from './Map';
import Clock from 'react-live-clock';

function Dashboard() {
  const {
    baseData,
    loading
  } = useSelector(state => state.baseResolver);

  return (
    <div style={{ "minHeight": "100vh", "overflow": "auto" }} className="main-sub-div-famtrack">
      <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "left", "padding": "2rem 2rem 1rem 2rem" }}>
        <h1 className="dashboard-title-text-famtrack">Dashboard</h1>
      </div>
      <div className="dashboard-content-container-famtrack">
        <div className="dashboard-map-container-famtrack">
          <Map />
        </div>
        <div className="dashboard-detail-container-famtrack">
          <div className="admin-dashboard-famtrack">
            <h3 style={{ "margin": "0", "fontSize": "20px" }}>Vendor Travel</h3>
          </div>
          <div className="people-dashboard-famtrack">
            <h3 style={{ "margin": "0", "fontSize": "35px" }}><b>{baseData.length}</b></h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
          <div className="time-dashboard-famtrack">
            <h3 style={{ "margin": "0", "fontSize": "25px", "fontWeight": "300" }}><Clock  format={'HH:mm:ss'} ticking={true} timezone={'Asia/Riyadh'} /></h3>
            <p style={{ "margin": "0" }}><i><Clock format={'dddd, MMMM Do YYYY'} timezone={'Asia/Riyadh'}/></i></p>
          </div>
          <div className="schedule-dashboard-famtrack">
            <h3 style={{ "margin": "0", "fontSize": "25px", "fontWeight": "500" }}>Schedule</h3>
            <div className="schedule-list-famtrack">
              <p style={{ "margin": "0" }}>19:00 - Dinner</p>
              <p style={{ "margin": "0" }}>20:00 - Back to hotel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

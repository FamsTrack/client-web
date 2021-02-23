import '../assets/Groups.css';

function Groups() {
  return (
    <div style={{"height": "100vh", "overflow": "auto"}} className="main-sub-div-famtrack">
      <div className="groups-title-famtrack">
        <h1 style={{"fontWeight": "200"}}>Groups</h1>
        <button className="btn add-button-famtrack">Add</button>
      </div>
      <div className="groups-container-famtrack">
        <div className="groups-list-famtrack">
          <h1>Test</h1>
        </div>
        <div className="ungrouped-list-famtrack">
          <h1>Test</h1>
        </div>
      </div>
    </div>
  );
}

export default Groups;

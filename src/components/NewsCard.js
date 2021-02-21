import './News.css';

function NewsCard() {
  return (
    <div className="news-cars-container-famtrack">
      <div>
        <div>
          <img className="img-news-famtrack" src="https://images.unsplash.com/photo-1612831457091-ffd909920941?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" width="100%" height="auto" />
        </div>
        <div>
          <div className="news-card-text">
            <p style={{"margin": "3px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor arci, risus auctor felis.</p>
            <p style={{"margin": "0"}}><i>Time</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

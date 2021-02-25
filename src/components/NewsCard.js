import { useHistory } from 'react-router';
import '../assets/News.css';

function NewsCard(props) {
  const {
    name,
    image,
    id
  } = props.news;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/news/${id}`);
  }

  return (
    <div className="news-cars-container-famtrack" style={{cursor:'pointer'}} onClick={handleClick}>
      <div>
        <div>
          <img className="img-news-famtrack" src={image} width="100%" height="auto" />
        </div>
        <div>
          <div className="news-card-text">
            <p style={{"margin": "3px", "fontSize": "15px"}}>{name}</p>
            <p style={{"marginBottom": "2px", "marginLeft": "2px", "fontSize": "15px"}}><i>Time</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

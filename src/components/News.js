import NewsCard from "./NewsCard";
import '../assets/News.css';

function News() {
  return (
    <div style={{"height": "100vh", "overflow": "auto"}} className="main-sub-div-famtrack">
      <div className="news-marg-famtrack">
        <div className="news-title-famtrack">
          <h1 className="news-title-text-famtrack">News</h1>
          <button className="btn add-button-famtrack">Add</button>
        </div>
        <div className='news-list-famtrack'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}

export default News;

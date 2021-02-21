import NewsCard from "./NewsCard";
import './News.css';

function News() {
  return (
    <div style={{"height": "100vh", "overflow": "auto"}}>
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
  );
}

export default News;

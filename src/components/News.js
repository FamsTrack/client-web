import '../assets/News.css';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";
import AddNewsModal from './AddNewsModal';

function News() {
  return (
    <div style={{"height": "100vh", "overflow": "auto"}} className="main-sub-div-famtrack">
      <div className="news-marg-famtrack">
        <div className="news-title-famtrack">
          <h1 className="news-title-text-famtrack">News</h1>
          <AddNewsModal />
        </div>
        <Switch>
          <Route path='/news/:id'>
            <NewsDetail />
          </Route>
          <Route path='/news'>
            <NewsList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default News;

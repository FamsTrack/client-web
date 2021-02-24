import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../store/actions/newsAction';
import NewsCard from './NewsCard';

function NewsList() {
  const {
    news,
    loadingNews
  } = useSelector(state => state.newsResolver);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  if (loadingNews) {
    return (
      <div style={{"height": "100vh", "overflow": "auto"}}>
        <h1 className={{"margin": "1rem"}}>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='news-list-famtrack'>
      {
        news.map(e => {
          return <NewsCard key={e.id} news={e} />
        })
      }
    </div>
  );
}

export default NewsList;

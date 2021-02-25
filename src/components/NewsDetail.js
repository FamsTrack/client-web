import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchNews, fetchNewsById } from "../store/actions/newsAction";
import EditNewsModal from "./EditNewsModal";
import swal from 'sweetalert';
import axios from 'axios';

function NewsDetail () {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { 
    newsById,
    loadingNews
  } = useSelector(state => state.newsResolver);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, []);

  const handleDelete = async () => {
    try {
      let willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover it again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      
      if (willDelete) {
        await axios.delete(`https://famstrack.herokuapp.com/news/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        });
        
        dispatch(fetchNews());
        history.push('/news');
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (loadingNews) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="news-detail-famtrack">
      <div>
        <a style={{"color": "#6c8590"}} onClick={() => history.push('/news')}>Back</a>
      </div>
      <div className="d-flex flex-column align-items-start p-3">
        <h1 style={{"fontSize": "30px"}} className="mb-3">{newsById.name}</h1>
        <img src={newsById.image} style={{"alignSelf": "center", "width": "100%"}} className="mb-3" />
        <h3 className="mb-3" style={{"alignItems": "flex-start", "fontSize": "15px"}}>{newsById.description}</h3>
        <div className="p-3 d-flex">
          <EditNewsModal data={newsById}/>
          <a className="btn btn-danger ms-3" onClick={handleDelete}>Delete</a>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;

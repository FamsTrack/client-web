import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchNewsById } from "../store/actions/newsAction";
import EditNewsModal from "./EditNewsModal";

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

  if (loadingNews) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <a style={{"color": "#6c8590"}} onClick={() => history.push('/news')}>Back</a>
      </div>
      <div className="d-flex flex-column align-items-start p-5">
        <h1 style={{"fontSize": "30px"}} className="mb-3">{newsById.name}</h1>
        <img src={newsById.image} style={{"alignSelf": "center"}} className="mb-3" />
        <h3 className="mb-3" style={{"alignItems": "flex-start"}}>{newsById.description}</h3>
        <div className="p-3 d-flex">
          <EditNewsModal />
          <a className="btn btn-danger ms-3">Delete</a>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;

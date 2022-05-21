import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getImages, showMoreImages } from "../store/actions";
import { Container, Images, Sidebar } from "../styles/dashbord";

function Dashboard() {
  const dispatch = useDispatch()
  const images = useSelector((state) => state.Reducer.images)
  const categories = useSelector((state) => state.Reducer.categories)
  const navigate = useNavigate();
  const { id } = useParams();

  const showMore = () => dispatch(showMoreImages({ limit: 10, page: 1, categoryId: id || '' }))

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getImages({ limit: 10, page: 1, categoryId: id || '' }))
  }, [dispatch, id])

  return (
    <Container>
      <Sidebar>
        <div onClick={() => navigate(`/`)}>
          random
        </div>
        {!categories.length ? <span>Loading...</span> :
          categories.map((el) =>
            <div
              key={el.id}
              onClick={() => navigate(`/${el.id}`)}
            >
              {el.name}
            </div>
          )}
      </Sidebar>
      <Images>
        {!images.length ? <p>Loading...</p> :
          images.map((el, i) =>
            <img
              key={i}
              alt='cat image'
              src={`${el.url}`}
              height='200px'
            />
          )}
        <div>
          <button onClick={showMore}>
            Show more
          </button>
        </div>
      </Images>
    </Container>

  );
}

export default Dashboard;
import "../cardsalbum/volunteerings.css";
import demoImage from "../../assets/image2.jpeg";
import { BsFillEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedkindVolunteer } from "../../store/kindVolunteerSlice";

export default function CardVoluntiring({ kindVolunteering }) {
  const dispatch = useDispatch();
  let nav = useNavigate();

  const navPageView = (value) => {
    dispatch(setSelectedkindVolunteer(kindVolunteering));
    nav("/view");
  };
  return (
    <div>
      <div
        className="card mb-3"
        style={{
          maxWidth: "75%",
          marginLeft: "190px",
          marginTop: "80px",
          boxShadow: "0 0 10px 0 rgb(0 0 0 / 50%)",
          border: "20px solid white",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={kindVolunteering.img || demoImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginBottom: "15px",
                }}
              >
                {kindVolunteering.titel}
              </h5>
              <p className="card-text">{kindVolunteering.detail}</p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              <button
                className="btn btn-light"
                style={{ border: "1px solid red", fontSize: "16px" }}
                onClick={() => navPageView(kindVolunteering)}
              >
                <BsFillEyeFill color="red" /> See all volunteerings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

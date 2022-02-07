import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/actions/userActions";
import Button from "@mui/material/Button";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDetails);
  console.log(user);

  const [userDel, setUserDel] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <>
      <div className="home">
        <Link to="course">
        <h1 style = {{fontSize : '2.5rem'}}>Learn to Code</h1>
        <h3>Business, Technology and Creative Skills taught by
         industry experts.<br/> Explore a wide range of skills with
          our professional tutorials.</h3>
          <Button
            variant="contained"
            style={{
              color: "black",
              backgroundColor: "#CBD0CD",
              padding: "15px",
            }}
            className="courseBrowser"
          >
            Browser Courses
          </Button>
        </Link>
      </div>
            <div className = 'home-card-main'>

      <div className="info-home">
        <div className="home-intro-card">
          <SubscriptionsIcon className="home-icon" />
          <div className="text-card-home">
            <span style = {{fontWeight : 'bold'}}>8,000 + Courses</span>
            <span className = 'text-card'>Expore a Wide range os Skills</span>
          </div>
        </div>
    </div>

      <div className="info-home">
        <div className="home-intro-card">
          <VerifiedUserIcon className="home-icon" />
          <div className="text-card-home">
            <span style = {{fontWeight : 'bold'}}>By Industry Experts</span>
            <span className = 'text-card'>Professional development from the best people</span>
          </div>
        </div>
    </div>

      <div className="info-home">
        <div className="home-intro-card">
          <SubscriptionsIcon className="home-icon" />
          <div className="text-card-home">
            <span style = {{fontWeight : 'bold'}}>Unlimited Access</span>
            <span className = 'text-card'>Unlock Library and learn any topic with one subscription</span>
          </div>
        </div>
    </div>

    </div>

    </>
  );
}

export default Home;

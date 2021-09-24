import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLaunches } from "../../../redux/actions/launchActions";

const LaunchesCard = () => {
  const launches = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchLaunches = async () => {
    const response = await axios
      .get("https://api.spacexdata.com/v3/launches")
      .catch((error) => {
        console.log({ error });
      });
    // console.log(response.data)
    dispatch(setLaunches(response.data));
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  console.log("launches", launches.allLaunches.launches[0].details);

  return (
    <div>
      <p>data: {launches.allLaunches.launches.length}</p>

      {/* cards */}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchesCard;

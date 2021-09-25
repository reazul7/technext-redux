import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLaunches } from "../../../redux/actions/launchActions";

const LaunchesCard = () => {
  const launches = useSelector((state) => state.allLaunches.launches);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchLaunches = async () => {
      const response = await axios
        .get("https://api.spacexdata.com/v3/launches")
        .catch((error) => {
          console.log({ error });
        });
      dispatch(setLaunches(response.data));
    };
    fetchLaunches();
  }, []);

  console.log("launches", launches);

  return (
    <div className="container">
      <div className="row">
        {/* search box */}
        <div className="col-md-12 py-2">
          <input className="px-2 rounded" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Rocket Name" />
        </div>

        <div className="col-md-12">
          <div className="row">
            {launches

              .filter((value) => {
                return value.rocket.rocket_name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((info) => (
                <div className="row col-md-6 col-lg-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <div className="d-flex justify-content-center pt-2">
                        <img style={{ height: 'auto', width: '80%' }} src={info.links.mission_patch} className="card-img-top" alt={info.rocket.rocket_name} />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-center">{info.mission_name}</h5>
                        <p class="card-text">{info.details}</p>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">Launched Year: {info.launch_year}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchesCard;

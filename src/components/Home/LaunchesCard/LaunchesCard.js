import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLaunches } from "../../../redux/actions/launchActions";

const LaunchesCard = () => {
  const launches = useSelector((state) => state.allLaunches.launches);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log("search", search);

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
        <div className="col-md-12 py-2">
          <p>Total Launched : {launches.length}</p>
        </div>
        <div className="col-md-12 py-2">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="col-md-12 py-2">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                {launches

                  .filter((value) => {
                    // console.log(infos)
                    return value.rocket.rocket_name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  })
                  .map((info) => (
                    <div className="col-md-4 py-2">
                      <div class="card mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img
                              src={info.links.mission_patch}
                              class="img-fluid rounded-start"
                              alt="..."
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{info.mission_name}</h5>
                              <p class="card-text">{info.details}</p>
                              <p class="card-text">
                                <small class="text-muted">
                                  Rocket Name: {info.rocket.rocket_name}
                                </small>
                              </p>
                              <p class="card-text">
                                <small class="text-muted">Mission: {}</small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchesCard;

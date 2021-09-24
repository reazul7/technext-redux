import React from "react";
import { useSelector } from "react-redux";

const SingleLaunchCard = () => {
  const launches = useSelector((state) => state.allLaunches.launches);
  const launchList = launches.map((launch) => {
    const { mission_name, links, details, launch_success } = launch;

    return (
      <div>
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={links.mission_patch}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{mission_name}</h5>
                <p class="card-text">
                  {details}
                </p>
                <p class="card-text">
                  <small class="text-muted">Mission: {}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{launchList}</>;
};

export default SingleLaunchCard;

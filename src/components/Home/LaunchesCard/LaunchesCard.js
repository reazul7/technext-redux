import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLaunches } from "../../../redux/actions/launchActions";
import SingleLaunchCard from "../SingleLaunchCard/SingleLaunchCard";

const LaunchesCard = () => {
  const launches = useSelector((state) => state.allLaunches.launches);
  const dispatch = useDispatch();

  const fetchLaunches = async () => {
    const response = await axios
      .get("https://api.spacexdata.com/v3/launches")
      .catch((error) => {
        console.log({ error });
      });
    dispatch(setLaunches(response.data));
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  console.log("launches", launches);

  return (
    <div>
      <p>Total Launched : {launches.length}</p>

      <SingleLaunchCard />
    </div>
  );
};

export default LaunchesCard;

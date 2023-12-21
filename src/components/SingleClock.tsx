import { Typography } from "@mui/material";
import ClockImage from "../assets/images/clock.png";
import NightClockImage from "../assets/images/nightclock.png";
import { SingleClockData } from "../extras/Types";

function SingleClock(props: SingleClockData) {
  return (
    <div>
      <div className="flex justify-between border-2 items-center m-10 p-5 h-35 w-25 shadow-sm hover:shadow-lg">
        <img
          alt="QuickClock"
          src={props.isDay ? ClockImage : NightClockImage}
          className="w-8 h-8 animate-spin hover:animate-bounc"
        />
        <div className="">
          <Typography sx={{ fontSize: "15px" }}>{props.city}</Typography>
          <Typography sx={{ fontSize: "15px" }}>{props.timeBehind}</Typography>
        </div>
        <div className="">
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            {props.time}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            {props.date}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default SingleClock;

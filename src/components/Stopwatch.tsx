import { TextField, Typography } from "@mui/material";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useState } from "react";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { TimerState } from "../extras/Types";
import { useStopwatch } from "react-timer-hook";

function Stopwatch(params: any) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  function pauseStopwatch(): void {
    pause();
    console.log("Stopwatch Paused..");
  }

  function playStopwatch(): void {
    console.log("Stopwatch Playing..");
    start();
  }

  function stopStopwatch(): void {
    reset();
  }

  return (
    <div>
      <div className="border-2 m-10 py-8 h-40 w-50 shadow-lg hover:shadow-2xl">
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          {`${days}0:${hours}0:0${minutes}:${seconds}`}
        </Typography>
        <div className="mt-3">
          <PlayCircleOutlineIcon
            onClick={playStopwatch}
            className="hover:cursor-pointer hover:animate-ping"
            fontSize="large"
            sx={{ marginRight: "30px", display: isRunning ? "none" : "true" }}
          />
          <PauseCircleOutlineIcon
            onClick={pauseStopwatch}
            className="hover:cursor-pointer hover:animate-ping"
            fontSize="large"
            sx={{ display: isRunning ? "true" : "none" }}
          />
          <StopCircleIcon
            onClick={stopStopwatch}
            className="hover:cursor-pointer hover:animate-ping"
            fontSize="large"
            sx={{ display: isRunning ? "true" : "none" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;

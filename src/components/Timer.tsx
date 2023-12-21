import { TextField, Typography } from "@mui/material";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useTimer } from "react-timer-hook";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { useEffect, useState } from "react";

function Timer(params: any) {
  const date = new Date();
  const [hour, setHour] = useState<string>("0");
  const [minute, setMinute] = useState<string>("0");
  const [second, setSecond] = useState<string>("0");
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart:true,
    expiryTimestamp: date,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    date.setHours(Number(hour));
    date.setMinutes(Number(minute));
    date.setSeconds(Number(second));
  }, []);

  return (
    <div>
      <div className="border-2 m-10 py-8 h-40 w-50 shadow-lg hover:shadow-2xl">
        <Typography sx={{ fontSize: "40px", fontWeight: "bold" }}>
          {`${days}:${hours}:${minutes}:${seconds}`}
        </Typography>
        <div className="mt-3">
          <PlayCircleOutlineIcon
            onClick={start}
            className="hover:cursor-pointer hover:animate-ping"
            fontSize="large"
            sx={{ marginRight: "30px" }}
          />
          <PauseCircleOutlineIcon
            onClick={pause}
            className="hover:cursor-pointer hover:animate-ping"
            fontSize="large"
          />
        </div>
        <div className="mt-20 border-2 p-5">
          <TextField
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            sx={{ width: "100px" }}
            label="Hour"
            variant="outlined"
          />
          <TextField
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            sx={{ width: "100px", marginLeft: "30px", marginRight: "30px" }}
            label="Minute"
            variant="outlined"
          />
          <TextField
            value={second}
            onChange={(e) => setSecond(e.target.value)}
            sx={{ width: "100px" }}
            label="Seconds"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;

import { Typography } from "@mui/material";
import SingleClock from "./SingleClock";
import React, { useEffect, useState } from "react";

function Clock(params: any) {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    console.log("Clock useEffect Called..");
    const interval = intervalTime();
    return () => clearInterval(interval);
  }, []);

  const CountryClocks = (
    <React.Fragment>
      {" "}
      <SingleClock
        isDay={true}
        city="Washington DC"
        timeBehind="10 hrs behind"
        time="12:30"
        date="21 Dec AM"
      />
      <SingleClock
        isDay={false}
        city="China"
        timeBehind="2 hrs behind"
        time="06:30"
        date="21 Dec AM"
      />
      <SingleClock
        isDay={true}
        city="Japan"
        timeBehind="10 hrs behind"
        time="12:30"
        date="21 Dec AM"
      />
      <SingleClock
        isDay={true}
        city="Hong Kong"
        timeBehind="10 hrs behind"
        time="12:30"
        date="21 Dec AM"
      />
      <SingleClock
        isDay={false}
        city="New Delhi"
        timeBehind="10 hrs behind"
        time="12:30"
        date="21 Dec AM"
      />
    </React.Fragment>
  );

  function intervalTime(): any {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 100);

    return intervalId;
  }

  function dateOperations(): Date {
    var date = new Date();
    console.log(date.toISOString());
    console.log(date.toUTCString);
    console.log(date.toDateString());
    console.log(date.toLocaleString());
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleTimeString());
    console.log(date.toISOString());
    return date;
  }

  return (
    <div>
      <div className="border-2 m-10 py-5 h-35 w-50 shadow-lg hover:shadow-2xl">
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          {date?.getHours() +
            ":" +
            date?.getMinutes() +
            ":" +
            date?.getSeconds() +
            ":" +
            date?.getMilliseconds()}
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>New Delhi</Typography>
        <Typography sx={{ fontSize: "20px" }}>
          {date.toDateString().substring(0, 3) +
            " " +
            date.toDateString().substring(3, 7) +
            " " +
            date.getFullYear()}
        </Typography>
      </div>
      {CountryClocks}
    </div>
  );
}

export default Clock;

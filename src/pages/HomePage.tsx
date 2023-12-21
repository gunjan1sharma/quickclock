import React, { useState } from "react";
import Header from "../components/Header";
import { Box, Tab, Tabs } from "@mui/material";
import Clock from "../components/Clock";
import Stopwatch from "../components/Stopwatch";
import Timer from "../components/Timer";
import AlarmClock from "../components/AlarmClock";
import ClockImage from "@mui/icons-material/AccessTime";

function HomePage(params: any) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue);
    console.log(`Tab Value : ${value}`);
  };

  const TabClock = (
    <React.Fragment>
      {" "}
      <Box sx={{ width: "100%" }}>
        <Tabs
          centered
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Clock" icon={<ClockImage />} iconPosition="start" />
          <Tab label="StopWatch" icon={<ClockImage />} iconPosition="start" />
          <Tab label="Timer" icon={<ClockImage />} iconPosition="start" />
          <Tab label="Alarm Clock" icon={<ClockImage />} iconPosition="start" />
        </Tabs>
      </Box>
    </React.Fragment>
  );

  const TabItem = (
    <React.Fragment>
      {value === 0 ? (
        <Clock />
      ) : value === 1 ? (
        <Stopwatch />
      ) : value === 2 ? (
        <Timer />
      ) : value === 3 ? (
        <AlarmClock />
      ) : null}
    </React.Fragment>
  );

  return (
    <div>
      <Header />
      {TabClock}
      {TabItem}
    </div>
  );
}

export default HomePage;

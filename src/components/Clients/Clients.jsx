import React from "react";
import classes from "./Clients.module.css";
import { Paper } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Clients = () => {
  return (
    <div className={classes.clients}>
      <h3 className={classes.header}>عمـلاؤنـا</h3>
      <div className={classes.container}>
        <KeyboardArrowLeftIcon sx={{ color: "#842EB3" }} />

        <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            display: "flex",
            maxWidth: "400px",
            flex: "2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          logo
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            display: "flex",
            maxWidth: "400px",
            flex: "2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          logo
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#F8F8F8",
            display: "flex",
            maxWidth: "400px",
            flex: "2",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          logo
        </Paper>
        <KeyboardArrowRightIcon sx={{ color: "#842EB3" }} />
      </div>
    </div>
  );
};

export default Clients;

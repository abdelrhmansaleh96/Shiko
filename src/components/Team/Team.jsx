import React from "react";
import classes from "./Team.module.css";
import pc1 from "../../assets/pc1.jpeg";
import pc2 from "../../assets/pc2.jpeg";
import Paper from "@mui/material/Paper";

const Team = () => {
  return (
    <div className={classes.team}>
      <div className={classes.container}>
        <div className={classes.small}>
          <img className={classes.image} src={pc2} alt="pc2" />
          <div className={classes["small-overlay"]}></div>
        </div>
        <div className={classes.big}>
          <img className={classes.image} src={pc1} alt="pc1" />
          <div className={classes["big-overlay"]}></div>
        </div>
      </div>
      <div className={classes.card}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "65px 45px",
            borderRadius: "50px",
            marginRight: "-15px",
          }}
          elevation={2}
        >
          <h3 className={classes.header}>فريقنا</h3>
          <p className={classes.desc}>
            في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات
            قادمة.
            <br />
            يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.
          </p>
        </Paper>
      </div>
    </div>
  );
};

export default Team;

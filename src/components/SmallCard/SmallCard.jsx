import React from "react";
import Paper from "@mui/material/Paper";
import classes from "./SmallCard.module.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const SmallCard = (props) => {
  return (
    <div className={classes.SmallCard}>
      <Paper sx={{ backgroundColor: "#F8F8F8", borderRadius: "24px" }}>
        <div className={classes.container}>
          <div className={classes.desc}>
            مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف
            المتعلقة بالأمان.
          </div>
          <div className={classes.icon}>
            <TrendingUpIcon sx={{ fontSize: "75px" }} />
            <h3 className={classes.header}>تقييم الضعف</h3>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SmallCard;

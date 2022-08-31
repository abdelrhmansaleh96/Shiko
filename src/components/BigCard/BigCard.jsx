import React from "react";
import classes from "./BigCard.module.css";
import Paper from "@mui/material/Paper";
import one from "../../assets/one.png";
import Backdrop from "@mui/material/Backdrop";

const BigCard = () => {
  return (
    <div className={classes.BigCard}>
      <Paper
        sx={{
          backgroundColor: "#131414",
          borderRadius: "50px",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className={classes.desc}>
          <h2 className={classes.header}>
            الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة
            للغاية
          </h2>
          <p className={classes.info}>
            شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة
            والمختلطة. تظهر الإحصاءات
          </p>
          <div className={classes.link}> ← اقرأ المقال</div>
        </div>
        <div className={classes["img-container"]}>
          <img className={classes.badge} src={one} alt="one" />
          <div className={classes.overlay}></div>
        </div>
      </Paper>
    </div>
  );
};

export default BigCard;

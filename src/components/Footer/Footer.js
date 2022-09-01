import React from "react";
import classes from "./Footer.module.css";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            color: "white",
            gap: "14px",
            fontSize: "36px",
            marginTop: "34px",
          }}
        >
          <TwitterIcon sx={{ fontSize: "48px" }} />
          <LinkedInIcon sx={{ fontSize: "48px" }} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul className={classes.links}>
            <li className={classes.item}>للشركات</li>
            <li className={classes.item}>للباحثين</li>
            <li className={classes.item}>بيانات التواصل</li>
            <li className={classes.item}> تواصل معنا</li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            direction: "rtl",
          }}
        >
          <div className={classes.logo}>logo</div>
          <p className={classes.desc}>
            واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564
            <br />
            Trustline - جميع الحقوق محفوظة 2022
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

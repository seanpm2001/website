import { Paper, Typography, useTheme } from "@material-ui/core";
import Link from "../link";
import classes from "./style.module.css";

export default function Footer() {
  const theme = useTheme();

  return (
    <Paper
      className={classes.outer}
      style={{
        backgroundColor:
          theme.palette.type === "dark"
            ? `${theme.palette.background.paper}`
            : "#3a4852",
      }}
      square
    >
      <div className={`section container ${classes.grid}`}>
        <img
          src="/logo_t.png"
          className={classes.logo}
          alt="The Algorithms logo"
        />
        <Typography className={classes.name}>
          &#169; The Algorithms 2021
        </Typography>
        <div className={classes.list}>
          <Link href="/#about">What is an algorithm?</Link>
          <Link href="/#about">About us</Link>
          <Link href="/#contribute">Programming Languages</Link>
          <Link href="/#contribute">Contribute</Link>
          <Link href="https://github.com/maltejur/thealgorithms">
            Source code
          </Link>
        </div>
        <div className={classes.list}>
          <Link href="https://github.com/TheAlgorithms/">GitHub</Link>
          <Link href="https://gitter.im/TheAlgorithms/">Gitter</Link>
          <Link href="https://twitter.com/The_Algorithms">Twitter</Link>
          <Link href="/all">All algorithms</Link>
        </div>
      </div>
    </Paper>
  );
}
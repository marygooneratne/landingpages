import "../global.css";
import "./Home.css";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import homeScreensWeb from "../resources/images/v1-home-screens-web.svg";
import headerLogo from "../resources/images/logo-dark.svg";
function Home() {
  return (
    <Box className="home rows">
      <Box className="home-header">
        <img className="home-header-logo" src={headerLogo} />
        <Box className="home-content columns">
          <Box className="home-text rows">
            <Typography variant="h3">
              Earn cash and the Standard coin when you and your friends pay each
              other back
            </Typography>
            <Box className="home-input-container columns">
              <TextField
                id="outlined-basic"
                label="Email address"
                variant="outlined"
              />
              <Button variant="filled"> Join Waitlist</Button>
            </Box>
          </Box>
          <img src={homeScreensWeb} className="home-screens-web" />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

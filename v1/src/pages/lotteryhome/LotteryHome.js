import "../../global.css";
import "./LotteryHome.css";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import mockup from "../../resources/images/mockup-lottery.png";
import headerLogo from "../../resources/images/logo-light.svg";
import EmailInput from "../../components/EmailInput";
import GradientTextBox from "../../components/GradientTextBox";
import Fade from "react-reveal/Fade";

function LotteryHome() {
  const explainerText = [
    {
      number: 1,
      title: "A title is what happens",
      body:
        "nd then heres an explanation of what really happens. Everything goes wow.",
    },
    {
      number: 2,
      title: "A title is what happens",
      body:
        "nd then heres an explanation of what really happens. Everything goes wow.",
    },
    {
      number: 3,
      title: "A title is what happens",
      body:
        "nd then heres an explanation of what really happens. Everything goes wow.",
    },
  ];
  const ExplainerTextBoxes = explainerText.map((step) => (
    <Fade top>
      <GradientTextBox
        color="pink"
        number={step.number}
        title={step.title}
        body={step.body}
      />
    </Fade>
  ));
  return (
    <Box className="lottery-home rows">
      <Box className="lottery-home-header">
        <img className="lottery-home-header-logo" src={headerLogo} />
      </Box>
      <Box className="lottery-home-landing-container columns">
        <Box className="lottery-home-text rows">
          <Typography variant="h2" color="primary">
            The simplest intro to crypto
          </Typography>
          <EmailInput buttonLabel="Join Waitlist" />
          <Typography variant="h5" color="primary">
            Store crypto and earn interest. No fees.
          </Typography>
        </Box>{" "}
        <Fade top>
          <img src={mockup} className="lottery-home-mockup" />
        </Fade>
      </Box>
      <Box className="explainer-container">
        <Box className="explainer-container-content rows">
          <Fade top>
            <Typography
              className="explainer-title"
              variant="h3"
              color="primary"
            >
              How does it work?
            </Typography>
          </Fade>
          <Box className="explainer-text-boxes columns">
            {ExplainerTextBoxes}
          </Box>
        </Box>
      </Box>
      <Box className="lottery-home-footer">
        <EmailInput buttonLabel="Join Waitlist" />
      </Box>
    </Box>
  );
}

export default LotteryHome;

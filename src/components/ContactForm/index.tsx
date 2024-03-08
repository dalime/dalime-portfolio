import React, { CSSProperties, useState } from "react";
import { useRecoilValue } from "recoil";
import { useMediaQuery } from "react-responsive";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

// Recoil
import { snackBarState } from "../../recoil/atoms";

// Actions
import { sendEmail } from "../../actions";

// Components
import Section from "../Section";
import { Subheading, Paragraph } from "../fonts";

// Styles
import { Form, Separator, Line, LogoImg, Loader } from "./index.styles";

// Assets
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

function ContactForm() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Recoil State
  const recoilSnackBar = useRecoilValue(snackBarState);

  // Component State
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [service, setService] = useState<
    "design" | "development" | "copywriting"
  >("development");
  const [message, setMessage] = useState<string>("");
  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [emailSuccess, setEmailSuccess] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<string | null>(null);

  // Component Styles
  const formControlStyle: CSSProperties = {
    width: isMobile ? "100%" : "50%",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  };

  /**
   * Handles the asynchronous action call to send an email
   */
  const handleSendEmail = async () => {
    setEmailLoading(true);
    sendEmail(email, firstName, service, message)
      .then(() => {
        setEmailSuccess(true);
        setErrorAlert(null);
        setFirstName("");
        setEmail("");
        setService("development");
        setMessage("");
        setEmailLoading(false);
      })
      .catch(() => {
        setErrorAlert("Message could not be sent");
        setEmailSuccess(false);
        setEmailLoading(false);
      });
  };

  /**
   * Handles the form submission and passes values to email SMTP server
   * @param e React.FormEvent<HTMLFormElement>
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      !firstName.length ||
      !email.length ||
      !service.length ||
      !message.length
    ) {
      setErrorAlert("Please fill out all fields");
      setEmailSuccess(false);
    } else {
      setErrorAlert(null);
      handleSendEmail();
    }
  };

  const paddingSide = isMobile
    ? { paddingLeft: "10%", paddingRight: "10%" }
    : {};

  return (
    <Section
      style={{
        ...paddingSide,
        paddingTop: "7.5%",
        paddingBottom: "7.5%",
      }}
    >
      <Separator>
        <Line />
        <LogoImg src={SleekAppLogo} alt="Sleek App" />
        <Line />
      </Separator>
      <Subheading sx={{ marginBottom: 1, fontSize: isMobile ? 30 : 40 }}>
        Leave Us A Message
      </Subheading>
      <Form onSubmit={handleSubmit}>
        {emailLoading && (
          <Loader>
            <CircularProgress color="primary" size={isMobile ? 80 : 150} />
          </Loader>
        )}
        <FormControl style={formControlStyle} required>
          <InputLabel htmlFor="first-name">Your First Name</InputLabel>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            aria-describedby="first-name-helper-text"
            disabled={emailLoading}
          />
        </FormControl>
        <FormControl style={formControlStyle} required>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            aria-describedby="email-helper-text"
            disabled={emailLoading}
          />
          <FormHelperText id="email-helper-text">
            Your email will never be shared with third-parties.
          </FormHelperText>
        </FormControl>
        <FormControl style={formControlStyle} required>
          <FormLabel id="service-group-label">
            Which Service Are You Interested In?
          </FormLabel>
          <RadioGroup
            aria-labelledby="service-group-label"
            defaultValue="develompent"
            value={service}
            onChange={(e) =>
              setService(
                e.target.value as "design" | "development" | "copywriting"
              )
            }
            name="service-group"
          >
            <FormControlLabel
              value="design"
              control={<Radio />}
              label="Design"
              disabled={emailLoading}
            />
            <FormControlLabel
              value="development"
              control={<Radio />}
              label="Development"
              disabled={emailLoading}
            />
            <FormControlLabel
              value="copywriting"
              control={<Radio />}
              label="Copywriting"
              disabled={emailLoading}
            />
          </RadioGroup>
        </FormControl>
        <FormControl style={formControlStyle} required>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline
            rows={5}
            id="message"
            aria-describedby="message-helper-text"
            placeholder="Message*"
            disabled={emailLoading}
          />
          <FormHelperText id="message-helper-text">
            Please describe your project in detail.
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ marginTop: 3, padding: 2 }}
          disabled={emailLoading}
        >
          Submit
        </Button>
      </Form>
      <Paragraph sx={{ textAlign: "center", marginTop: 3 }}>
        We'll get back to you shortly.
      </Paragraph>
      {!recoilSnackBar && emailSuccess && !errorAlert && (
        <Snackbar
          open={emailSuccess}
          autoHideDuration={5000}
          onClose={() => setEmailSuccess(false)}
        >
          <Alert severity="success">Message was sent</Alert>
        </Snackbar>
      )}
      {!recoilSnackBar && errorAlert && !emailSuccess && (
        <Snackbar
          open={!!errorAlert}
          autoHideDuration={5000}
          onClose={() => setErrorAlert(null)}
        >
          <Alert severity="error">Message could not be sent</Alert>
        </Snackbar>
      )}
    </Section>
  );
}

export default ContactForm;

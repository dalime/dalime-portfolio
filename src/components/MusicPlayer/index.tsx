import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { Button, Snackbar, Alert } from "@mui/material";
import {
  VolumeUp,
  VolumeOff,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

// Recoil
import { musicPlayerState, snackBarState } from "../../recoil/atoms";

// Styles
import { Wrapper } from "./index.styles";

function MusicPlayer() {
  // Recoil State
  const [recoilMusicPlayer, setRecoilMusicPlayer] =
    useRecoilState(musicPlayerState);
  const [recoilSnackBar, setRecoilSnackBar] = useRecoilState(snackBarState);

  // Hooks
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  // Component State
  const [playMusic, setPlayMusic] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    // Set a timeout to display the alert after 1 minute (60,000 milliseconds)
    const alertTimeout = setTimeout(() => {
      setRecoilSnackBar({
        color: "info",
        message:
          "You've been here for a hot minute. Want some background music?",
        action: () => setRecoilMusicPlayer(true),
      });
    }, 60000);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [setRecoilMusicPlayer, setRecoilSnackBar]);

  if (recoilSnackBar && recoilSnackBar.color && recoilSnackBar.message)
    return (
      <Snackbar open={!!recoilSnackBar} onClose={() => setRecoilSnackBar(null)}>
        <Alert
          severity={recoilSnackBar.color}
          style={{ padding: 20 }}
          onClose={() => {
            setRecoilSnackBar(null);
            setRecoilMusicPlayer(false);
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {recoilSnackBar.message}
            <Button
              color="success"
              variant="outlined"
              size="small"
              sx={{ marginTop: 2 }}
              onClick={() => {
                setRecoilSnackBar(null);
                setRecoilMusicPlayer(true);
              }}
            >
              PLAY
            </Button>
          </div>
        </Alert>
      </Snackbar>
    );

  if (!process.env.REACT_APP_MUSIC_NAME || !recoilMusicPlayer) return <></>;

  return (
    <Wrapper style={visible ? {} : { paddingBottom: 8.5 }}>
      <Button
        variant="text"
        sx={{ marginLeft: isMobile ? 0 : isSmallScreen ? 1 : 2 }}
        onClick={() => setPlayMusic(!playMusic)}
      >
        {playMusic ? <VolumeUp /> : <VolumeOff />}
      </Button>
      {playMusic && (
        <>
          <Button
            variant="text"
            sx={{ marginLeft: isMobile ? -3 : isSmallScreen ? 0 : 1 }}
            onClick={() => setVisible(!visible)}
          >
            {visible ? <VisibilityOff /> : <Visibility />}
          </Button>
          <audio
            className="custom-audio"
            controls
            autoPlay
            loop
            style={
              !visible
                ? { display: "none", marginLeft: 10 }
                : { marginLeft: isMobile ? -2 : isSmallScreen ? 5 : 10 }
            }
          >
            <source
              src={require(`../../assets/music/${process.env.REACT_APP_MUSIC_NAME}`)}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
    </Wrapper>
  );
}

export default MusicPlayer;

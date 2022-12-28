import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";

function VideoPage({ navigation }) {
  return (
    <View>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
          source: {
            uri: "https://player.vimeo.com/external/371823632.sd.mp4?s=6e0af760cef2a8b6d26682827732c9bdd55440ed&profile_id=164&oauth2_token_id=57447761",
          },
        }}
      />
    </View>
  );
}

export { VideoPage };

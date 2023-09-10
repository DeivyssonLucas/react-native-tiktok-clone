import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import YouTube from 'react-native-youtube'

const { height: heightScreen } = Dimensions.get('screen');

export default function FeedItem({ data, currentVisibleItem }) {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (currentVisibleItem?.id === data?.id) {
      setIsPlaying(true); // Iniciar a reprodução quando o item estiver visível
    } else {
      setIsPlaying(false); // Pausar quando o item estiver fora de foco
    }
  }, [currentVisibleItem]);

  function handlePress() {
    setIsPlaying(!isPlaying);
  }

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.info,
          {
            bottom: 110,
          },
        ]}
      >
        <Text style={styles.name}>{data?.name}</Text>
        <Text style={styles.description}>{data?.description}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={35} color="#fff" />
          <Text style={styles.actionText}>30.3k</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-ellipses-sharp" size={35} color="#fff" />
          <Text style={styles.actionText}>243</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="bookmark" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
      <Video
        ref={video}
        style={{ width: '100%', height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        paused={!isPlaying} // Pausar ou reproduzir com base no estado isPlaying
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(newStatus) => {
          setIsPlaying(newStatus.isPlaying);
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
    marginRight: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.60)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  description: {
    color: '#fff',
    marginRight: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.20)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === 'android' ? 120 : 170,
    gap: 8,
  },
  actionText: {
    textAlign: 'center',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0, 0.60)',
    textShadowOffset: { width: -1, height: 1.5 },
    textShadowRadius: 8,
  },
});


/*import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Icon from "react-native-vector-icons/Ionicons"

const { height: heightScreen } = Dimensions.get('screen');

export default function FeedItem({ data, currentVisibleItem }) {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if(currentVisibleItem?.id === data?.id){
      video.current?.playAsync();
    }else {
      video.current?.pauseAsync()
    }
  }, [])

  function handlePress() {
    setIsPlaying(!isPlaying);
  }

  return (
    <Pressable onPress={handlePress}>

    <View style={[
      styles.info,
      {
        bottom: 110
      }
      ]}>
    <Text style={styles.name}>{data?.name}</Text>
    <Text style={styles.description}>{data?.description}</Text>
    </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={35} color="#fff"></Icon> 
          <Text style={styles.actionText}>30.3k</Text>
        </TouchableOpacity>
      
      
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-ellipses-sharp" size={35} color="#fff"></Icon> 
          <Text style={styles.actionText}>243</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="bookmark" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
      <Video
        ref={video}
        style={{ width: '100%', height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        paused={!isPlaying} // Aqui pausamos ou reproduzimos com base no estado isPlaying
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(newStatus) => {
          setIsPlaying(newStatus.isPlaying);
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: "#fff",
    fontWeight: 'bold',
    marginBottom: 4,
    marginRight: 14,
    textShadowColor: "rgba(0, 0, 0, 0.60)",
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8,
  },
  description:{
    color: "#fff",
    marginRight: 24,
    textShadowColor: "rgba(0, 0, 0, 0.20)",
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 8,
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === 'android' ? 120 : 170,
    gap: 8,
  },
  actionText: {
    textAlign: 'center',
    color: "#fff",
    textShadowColor: 'rgba(0,0,0, 0.60)',
    textShadowOffset: { width: -1, height: 1.5},
    textShadowRadius: 8,
  }
});*/

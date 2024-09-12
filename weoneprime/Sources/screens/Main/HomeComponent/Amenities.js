import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { RNImage, RNStyles } from '../../../common';
import { Images } from '../../../constants';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Amenities() {
  const [selectedHearts, setSelectedHearts] = useState([]); 

  const Data = [
    {
      id: 1,
      image: require('../../../assets/images/amrutbanner.png'),
      brandLogo: Images.emp_logo,
      title: "Amrut",
      subtitle: "The fashion icon ",
    },
    {
      id: 2,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Inox",
      subtitle: "Live the movie",
    },
    {
      id: 3,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Coffee Culture",
      subtitle: "The taste of freshness",
    },
    {
      id: 4,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Gollers",
      subtitle: "Gollers locho khaman",
    },
    {
      id: 5,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Coffee Culture",
      subtitle: "The taste of freshness",
    },
    {
      id: 6,
      image: Images.exploreimg,
      brandLogo: Images.emp_logo,
      title: "Gollers",
      subtitle: "Gollers locho khaman",
    }
  ];

  const handleHeartPress = (id) => {
    setSelectedHearts(prevSelectedHearts => {
      if (prevSelectedHearts.includes(id)) {
        return prevSelectedHearts.filter(heartId => heartId !== id);
      } else {
        return [...prevSelectedHearts, id];
      }
    });
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedHearts.includes(item.id); 

    return (
      <Pressable style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          start={{ x: 0, y: 0.9 }}
          end={{ x: 0, y: 0 }}
          colors={['white', 'transparent']}
          style={styles.gradient}
        />
        <TouchableOpacity
          style={{
            ...RNStyles.center,
            height: wp(7),
            width: wp(7),
            backgroundColor: isSelected ? 'rgba(222, 33, 39, 0.9)' : 'rgba(255, 255, 255, 0.35)',
            position: 'absolute',
            top: hp(1),
            borderRadius: 50,
            right: wp(2),
          }}
          onPress={() => handleHeartPress(item.id)}   
        >
          <Icon
            name={"heart"} 
            solid={isSelected}
            style={{
              fontSize: FontSize.font12,
              color: isSelected ? Colors.Red : Colors.White,
            }}
          />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <RNImage source={item.brandLogo} style={{ height: wp(10), width: wp(10) }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.ExploreData}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ExploreData: {
    gap: hp(2),
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.White,
    borderRadius: wp(2),
    overflow: 'hidden',
    width: wp(45),
    height: wp(45),
    position: 'relative',
    margin: wp(2),
  },
  image: {
    width: wp(45),
    height: wp(45),
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: hp(22),
  },
  infoContainer: {
    position: 'absolute',
    bottom: hp(-0.5),
    left: wp(3),
    right: wp(2),
    zIndex: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  subtitle: {
    fontSize: FontSize.font11,
    fontFamily: FontFamily.Light,
    marginBottom: hp(1),
    color: Colors.Grey,
  },
});

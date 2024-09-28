import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  RNContainer,
  RNImage,
  RNInput,
  RNStyles,
  RNText,
} from "../../../common";
import {
  Colors,
  FontFamily,
  FontSize,
  hp,
  normalize,
  wp,
} from "../../../theme";
import { Images } from "../../../constants";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const categories = [
    {
      id: "1",
      name: "All",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "2",
      name: "food",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "3",
      name: "Fashion",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "4",
      name: "GYM",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "1",
      name: "All",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "2",
      name: "food",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "3",
      name: "Fashion",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "4",
      name: "GYM",
      logo: require("../../../assets/images/gift.png"),
    },
  ];
  
  const Product = [
    {
      id: "1",
      name: "All",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "2",
      name: "food",
      logo: require("../../../assets/images/gift.png"),
    },
    {
      id: "3",
      name: "Fashion",
      logo: require("../../../assets/images/gift.png"),
    }
  ];

  const Data = [
    {
      id: 1,
      image: Images.exclusive1,
    },
    {
      id: 2,
      image: Images.exclusive1,
    },
    {
      id: 3,
      image: Images.exclusive1,
    },
    {
      id: 4,
      image: Images.exclusive1,
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ marginRight: wp(2) }}>
      <RNImage source={item.image} style={styles.image} resizeMode={"strach"} />       
    </TouchableOpacity>
  );

  renderDot = () => {
    <View style={styles.dot} />
  }

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => onCategorySelect(item)}>
      <View style={styles.categoryItem}>
        <Image source={item.logo} style={{ width: wp(8), height: wp(8) }} />
        <RNText size={FontSize.font11} family={FontFamily.Medium}>
          {item.name}
        </RNText>
      </View>
    </TouchableOpacity>
  );

  return (
    <RNContainer style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{ width: wp(30) }}>
          <RNImage
            source={require("../../../assets/images/menu.png")}
            style={{ width: wp(4), height: wp(4) }}
          />
        </TouchableOpacity>
        <View style={{ width: wp(30) }}>
          <Image
            resizeMode="contain"
            source={Images.Weoneprime}
            style={{ width: wp(25) }}
          />
        </View>
        <View
          style={[
            RNStyles.flexRow,
            { gap: wp(2), width: wp(30), justifyContent: "flex-end" },
          ]}
        >
          <TouchableOpacity>
            <RNImage
              source={require("../../../assets/images/cart.png")}
              style={{ width: wp(5), height: wp(5) }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <RNImage
              source={require("../../../assets/images/cart.png")}
              style={{ width: wp(5), height: wp(5) }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <RNImage
              source={require("../../../assets/images/cart.png")}
              style={{ width: wp(5), height: wp(5) }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            paddingHorizontal: wp(2),
            backgroundColor: "#F0F0F0",
            borderBottomRightRadius: normalize(15),
            borderBottomLeftRadius: normalize(15),
          }}
        >
          <View>
            <RNInput
              containerStyle={styles.inputField}
              iconstyle={{ width: wp(3), height: wp(3) }}
              style={{
                paddingVertical: hp(0),
                fontSize: FontSize.font11,
                fontFamily: FontFamily.Medium,
              }}
              Icon={Images.search}
              placeholder="Search for products, Brands and More"
              placeholderTextColor={Colors.Black}
            />
          </View>

          <View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={{ paddingVertical: hp(1), paddingLeft: wp(2) }}>
                <FlatList
                  data={categories}
                  renderItem={renderCategoryItem}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoriesList}
                />
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={{ padding: wp(3) }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>
      </ScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    ...RNStyles.flexRowBetween,
    height: hp(6),
    paddingHorizontal: wp(2),
    backgroundColor: "#F0F0F0",
  },
  inputField: {
    borderWidth: 1.5,
    borderColor: "#DADADA",
    borderRadius: normalize(12),
    height: hp(4),
    paddingHorizontal: wp(3),
  },
  categoryItem: {
    ...RNStyles.center,
    backgroundColor: Colors.LightGrey,
    paddingVertical: hp(1),
    borderRadius: normalize(4),
    marginRight: wp(5),
  },
  image: {
    width: wp(94),
    height: hp(18),
    borderRadius: normalize(6),
  },
  dot: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: normalize(5),
    height: normalize(5),
    backgroundColor: Colors.Black,
    borderRadius: 50,
    marginVertical: hp(1),
  },
});

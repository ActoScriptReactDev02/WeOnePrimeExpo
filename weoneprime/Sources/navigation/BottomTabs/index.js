import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavRoutes from "../NavRoutes";
import { Home } from "../../screens/Main";
import TabContent from "./TabContent";
import Explore from "../../screens/Main/Explore";
import Setting from "../../screens/Main/Setting";
import { RNHeader, RNText } from "../../common";
import { Images } from "../../constants";
import { Colors, FontFamily, FontSize, hp, wp } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: hp(2),
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          height: hp(8),
          borderWidth: 0,
          borderColor: Colors.Transparent,
          paddingHorizontal: wp(18),
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#101010", "#2B1548"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1.5, y: 0 }}
            style={styles.centerTabImageBackground}
          />
        ),
      }}
    >
      <Tab.Screen
        name={NavRoutes.EXPLORE}
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: hp(1.1),
              }}
            >
              <Image
                source={focused ? Images.F_Explore : Images.Explore}
                resizeMode="contain"
                style={[styles.icons]}
              />
              <RNText
                size={FontSize.font11}
                family={FontFamily.Medium}
                color={Colors.White}
              >
                Explore
              </RNText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NavRoutes.HOME}
        component={Home}
        options={{
          header: () => (
            <RNHeader
              LeftIcon={Images.Weoneprime}
              RightIcon={Images.profile}
              containerStyle={{ paddingLeft: wp(14) }}
              rightIconStyle={{ width: wp(8), height: wp(8) }}
              leftIconStyle={{ width: wp(30) }}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: hp(1.5),
                zIndex: 10,
              }}
            >
              <LinearGradient
                colors={["#070FDA", "#A95EED"]}
                start={{ x: 0, y: 1.8 }}
                end={{ x: 0, y: 0 }}
                style={[
                  {
                    width: wp(15),
                    height: wp(15),
                    borderRadius: wp(15),
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: hp(-5),
                    marginBottom: hp(0.5),
                  },
                ]}
              >
                <Image
                  source={focused ? Images.F_Home : Images.Home}
                  resizeMode="contain"
                  style={styles.centerTabIcon}
                />
              </LinearGradient>
              <RNText
                size={FontSize.font11}
                family={FontFamily.Medium}
                color={Colors.White}
              >
                Explore
              </RNText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={NavRoutes.SETTING}
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: hp(1.1),
              }}
            >
              <Image
                source={focused ? Images.F_Setting : Images.Setting}
                resizeMode="contain"
                style={[styles.icons]}
              />
              <RNText
                size={FontSize.font11}
                family={FontFamily.Medium}
                color={Colors.White}
              >
                Explore
              </RNText>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({
  centerTabImageBackground: {
    width: wp(75),
    height: "85%",
    borderRadius: wp(10),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    width: wp(7),
    height: wp(7),
  },
  centerTabIcon: {
    width: wp(7),
    height: wp(7),
  },
});

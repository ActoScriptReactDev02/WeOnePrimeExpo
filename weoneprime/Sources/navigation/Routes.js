import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./BottomTabs";
import AuthNavigation from "./AuthNavigation";

import { Colors, FontFamily, FontSize, useCustomFonts, wp } from "../theme";
import { Amenities, Fevorite, OfferDetails } from "../screens/Main";
import TabBar from "./BottomTabs";
import Redeem from "../screens/Main/Redeem";
import CategoryDetails from "../screens/Main/CategoryDetails";
import { RNCommonHeader, RNHeader, RNText } from "../common";
import { Images } from "../constants";
import { View } from "react-native";

const Stack = createStackNavigator();

const Routes = () => {
  const [isAuth, setAuth] = useState(true);
  useCustomFonts();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuth ? (
          <>
            <Stack.Screen
              name="CategoryDetails"
              component={CategoryDetails}
              options={{
                headerShown: "true",
                header: () => (
                  <RNHeader
                    leftTitle={"Good morning"}
                    leftTitleStyle={{
                      fontSize: FontSize.font12,
                      fontFamily: FontFamily.SemiBold,
                    }}
                    rightTitle={
                      <View style={{ marginRight: wp(3) }}>
                        <RNText
                          size={FontSize.font9}
                          family={FontFamily.Medium}
                          color={Colors.Grey}
                        >
                          Around You
                        </RNText>
                        <RNText
                          size={FontSize.font12}
                          family={FontFamily.SemiBold}
                        >
                          Rani Roy
                        </RNText>
                      </View>
                    }
                    LeftIcon={require("../assets/images/emp_logo.png")}
                    RightIcon={Images.profile}
                    rightIconStyle={{ width: wp(8), height: wp(8) }}
                  />
                ),
              }}
            />
            <Stack.Screen name="Tab" component={TabBar} />
            <Stack.Screen name="Redeem" component={Redeem} />
            <Stack.Screen name="OfferDetails" component={OfferDetails} />
            <Stack.Screen name="Fevorite" component={Fevorite} />
            <Stack.Screen name="Amenity" component={Amenities} />
          </>
        ) : (
          <Stack.Screen name="Auth">
            {(props) => <AuthNavigation {...props} setAuth={setAuth} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

import * as React from "react";
import AppLoading from "expo-app-loading";
import { useUser } from "../hooks";
import { fontLoader } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  LoginScreen,
  OnboardScreen,
  RegisterScreen,
  TransactionDetailScreen,
} from "../screens";
import { BottomSheet } from "./";

const AuthContext = React.createContext();

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const { token, authContext } = useUser();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      dispatch({ type: "RESTORE_TOKEN", token: token });
    };

    bootstrapAsync();
  }, []);

  if (!fontLoader()) {
    return <AppLoading />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.userToken === false ? (
            <>
              <Stack.Screen
                name="Onboard"
                component={OnboardScreen}
                options={{
                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="BottomSheet" component={BottomSheet} />
              <Stack.Screen
                name="TransactionDetail"
                component={TransactionDetailScreen}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

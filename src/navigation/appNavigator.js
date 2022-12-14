import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Signin } from "../screens/signin/signin";
import { Signup } from "../screens/signup/signup";
import { Main } from "../screens/main/main";
import { WebPage } from "../screens/webpage/webpage";
import { Splash } from "../screens/splash/splash";
import { Settings } from "../screens/settings/settings";
import { Recipies } from "../screens/recipes/recipies";
import { RecipeDetail } from "../screens/recipeDetail/recipeDetail";
import { VideoPage } from "../screens/videoPage/videopage";
import { MapArea } from "../screens/mapArea/maparea";

function MainNav() {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const iconSize = 18;

  const Home = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name={
              route.name === "Main"
                ? "home"
                : route.name === "Settings"
                ? "settings"
                : "person"
            }
            color={focused ? "red" : "grey"}
            size={iconSize}
          />
        ),
      })}
    >
      <Tab.Screen name={"Main"} component={Main} />
      <Tab.Screen name={"WebPage"} component={WebPage} />
      <Tab.Screen name={"Settings"} component={Settings} />
      <Tab.Screen name={"MapArea"} component={MapArea} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="Recipies" component={Recipies} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MapArea" component={MapArea} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { MainNav };

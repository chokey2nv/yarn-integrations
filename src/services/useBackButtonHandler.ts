import { useEffect } from "react";
import { BackHandler } from "react-native";
import { useRouter } from "expo-router";

const useBackButtonHandler = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );

    return () => backHandler.remove();
  }, []);
};

export default useBackButtonHandler;

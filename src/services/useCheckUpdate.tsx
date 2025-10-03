import * as Updates from "expo-updates";
import { useEffect } from "react";
import { Alert } from "react-native";

export function useCheckUpdates() {
  useEffect(() => {
    async function check() {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          Alert.alert("Update available", "Restart app to apply update.", [
            { text: "Restart now", onPress: () => Updates.reloadAsync() },
          ]);
        }
      } catch (e) {
        console.log("Update check failed", e);
      }
    }
    check();
  }, []);
}

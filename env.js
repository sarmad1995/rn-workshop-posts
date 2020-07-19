import Constants from "expo-constants";
import { Alert } from "react-native";
import QA from "./env.qa";
import DEV from "./env.dev";
/**
 * WHICH RELEASE CHANNEL ? dev? env.dev.js otherwise, env.qa.js
 */

console.log({ ReleaseChannel: Constants.manifest.releaseChannel });

Alert.alert(Constants.manifest.releaseChannel);

let Config;
if (Constants.manifest.releaseChannel === "qa") {
  Config = QA;
} else {
  Config = DEV;
}

export default Config;
/**
 * - DEFAULT
 */

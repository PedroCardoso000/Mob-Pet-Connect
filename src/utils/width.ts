import { Dimensions } from "react-native";

/**
 * Calculates a percentage-based width relative to the device's screen width.
 *
 * @param {number} percentage - A number between 0 and 1 representing the percentage of the screen width.
 * @returns {number} The calculated width in pixels.
 */
export const width = (percentage: number): number =>
  Dimensions.get("window").width * percentage
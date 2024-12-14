import { DeviceContext } from "@/components/providers/device-provider";
import { useContext } from "react";

export const useDeviceMode = () => {
  return useContext(DeviceContext);
};
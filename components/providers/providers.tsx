"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DeviceProvider } from "./device-provider";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={client}>
      <DeviceProvider>
        {props.children}
      </DeviceProvider>
    </QueryClientProvider>
  )
};

export default Providers;

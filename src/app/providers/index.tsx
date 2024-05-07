"use client";

import {
  DisplayGate,
  SDKInitOptions,
  SDKProvider,
  useMainButton,
  useMiniApp,
} from "@tma.js/sdk-react";
import { useEffect } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

interface SDKProviderErrorProps {
  error: unknown;
}

function SDKProviderError({ error }: SDKProviderErrorProps) {
  return (
    <div>
      Oops. Something went wrong.
      <blockquote>
        <code>
          {error instanceof Error ? error.message : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

function SDKProviderLoading() {
  return <div>SDK is loading.</div>;
}

function SDKInitialState() {
  return <div>Waiting for initialization to start.</div>;
}

export const Providers = ({ children }: ProvidersProps) => {
  const options: SDKInitOptions = {
    acceptCustomStyles: true,
    cssVars: true,
    async: true,
  };

  return (
    <SDKProvider options={options}>
      <DisplayGate
        error={SDKProviderError}
        loading={SDKProviderLoading}
        initial={SDKInitialState}
      >
        {children}
      </DisplayGate>
    </SDKProvider>
  );
};

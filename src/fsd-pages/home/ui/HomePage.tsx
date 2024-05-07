"use client";
import { useMainButton } from "@tma.js/sdk-react";

export const HomePage = () => {
  const mainButton = useMainButton();
  // We will get an error here as long as SDK is not yet initialized.
  // The solution will be provided further.
  return <div>My application!</div>;
};

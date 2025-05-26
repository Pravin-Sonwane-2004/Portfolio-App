"use client";
import { useEffect } from "react";

function SomeComponent() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.getElementById('something')?.scrollIntoView();
    }
  }, []);

  return null;
}

export default SomeComponent;

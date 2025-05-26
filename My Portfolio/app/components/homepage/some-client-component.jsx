"use client";

import { useEffect } from "react";

export default function SomeComponent() {
  useEffect(() => {
    document.getElementById('something')?.scrollIntoView();
  }, []);

  return null;
}
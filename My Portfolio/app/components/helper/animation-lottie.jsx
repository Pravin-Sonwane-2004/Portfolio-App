// app/components/helper/animation-lottie.jsx
"use client";

import React, { useEffect, useState } from "react";

const AnimationLottie = ({ animationPath, width }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  if (!Lottie) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;

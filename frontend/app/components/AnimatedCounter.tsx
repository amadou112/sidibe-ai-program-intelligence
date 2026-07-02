"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

function formatWithCommas(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

/** Animates the leading numeric portion of a value like "1,248", "95%", or "24" from 0 on scroll into view. */
export default function AnimatedCounter({
  value,
  duration = 1.2,
}: {
  value: string;
  duration?: number;
}) {
  const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  const numeric = match ? Number(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const hasComma = match ? match[1].includes(",") : false;

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView || numeric === null) return;
    const controls = animate(0, numeric, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setDisplay(hasComma ? formatWithCommas(v) : String(Math.round(v)));
      },
    });
    return () => controls.stop();
  }, [isInView, numeric, duration, hasComma]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedPath.module.scss";

export const AnimatedPath = ({
  text,
  duration = 21,
  reversed = false,
  textProperties = undefined,
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const pathId = `path-${Math.floor(Math.random() * 900000 + 100000)}`;
    const target = svgRef.current;

    if (!target) return;

    const pathEl = target.querySelector("path");

    if (pathEl) {
      gsap.set(pathEl, {
        attr: { fill: "none", id: pathId, stroke: "none" },
      });
    }

    const textEl = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );

    const createTextPath = (offset) => {
      const tp = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "textPath"
      );
      tp.setAttributeNS(null, "href", `#${pathId}`);
      tp.setAttributeNS(null, "startOffset", offset);
      tp.textContent = text;
      return tp;
    };

    const textPath1 = createTextPath("0%");
    const textPath2 = createTextPath("0%");
    textEl.appendChild(textPath1);
    textEl.appendChild(textPath2);

    target.appendChild(textEl);

    if (textProperties) {
      gsap.set([textPath1, textPath2], textProperties);
    }

    const common = { duration, ease: "none", repeat: -1 };

    gsap.fromTo(
      textPath1,
      { attr: { startOffset: "0%" } },
      { attr: { startOffset: reversed ? "-100%" : "100%" }, ...common }
    );
    gsap.fromTo(
      textPath2,
      { attr: { startOffset: reversed ? "100%" : "-100%" } },
      { attr: { startOffset: "0%" }, ...common }
    );

    // Optional: Cleanup
    return () => {
      textEl.remove();
    };
  }, [text, duration, reversed, textProperties, svgRef]);

  return (
    <div className={styles.ellipse}>
      <svg
        ref={svgRef}
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M227 120C227 142.091 178.871 160 119.5 160C60.1294 160 12 142.091 12 120C12 97.9086 60.1294 80 119.5 80C178.871 80 227 97.9086 227 120Z"
          fill="none"
        />
      </svg>
    </div>
  );
};

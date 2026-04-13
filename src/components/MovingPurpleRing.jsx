import React from "react";

/**
 * Animated violet conic-gradient rim (shared with blog cards via index.css).
 * Wrap content in the inner layer; ring shows in the padding gutter.
 */
export default function MovingPurpleRing({
  children,
  className = "",
  innerClassName = "",
  innerStyle,
  rounded = "rounded-2xl",
  ringPadding = "p-[2px]",
  innerRounded = "rounded-[calc(1rem-2px)]",
  delayIndex = 0,
  compact = false,
  /** Softer rotating trace for small hero pills (FeatureStack) */
  subtleOutline = false,
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${ringPadding} ${className}`}>
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${rounded}`}
        aria-hidden
      >
        <div
          className={`ku-blog-card-outline-spin absolute left-1/2 top-1/2 aspect-square max-w-[56rem] ${
            subtleOutline ? "ku-blog-card-outline-spin--pill" : ""
          } ${compact ? "ku-blog-card-outline-spin--fast w-[min(520%,150vw)]" : "w-[min(380%,200vw)]"}`}
          style={{ animationDelay: `${-(delayIndex % 6) * 1.35}s` }}
        />
      </div>
      <div className={`relative z-10 ${innerRounded} ${innerClassName}`} style={innerStyle}>
        {children}
      </div>
    </div>
  );
}

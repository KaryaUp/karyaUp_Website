import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Users, Calendar, Target, ListTree, Zap, MessageSquare, ShieldCheck, BarChart2, Rocket, Settings } from "lucide-react";

/**
 * Default icon and color mapping for common feature names
 */
const DEFAULT_ICON_MAP = {
  "Assignees": { icon: Users, color: "#3b82f6" },     // Blue
  "Due dates": { icon: Calendar, color: "#f59e0b" },  // Amber
  "Priorities": { icon: Target, color: "#ef4444" },   // Red
  "Sub-tasks": { icon: ListTree, color: "#10b981" },  // Emerald
  "Automations": { icon: Zap, color: "#8b5cf6" },     // Violet
  "Chat": { icon: MessageSquare, color: "#ec4899" },  // Pink
  "Enterprise": { icon: ShieldCheck, color: "#64748b" }, // Slate
  "Performance": { icon: BarChart2, color: "#06b6d4" }, // Cyan
  "Launch": { icon: Rocket, color: "#f97316" },      // Orange
  "Settings": { icon: Settings, color: "#475569" },    // Slate-600
};

const FeatureStack = ({ items = [], interval = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (items.length === 0 || hovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, hovered]);

  const visibleItems = useMemo(() => {
    if (items.length === 0) return [];
    return [0, 1, 2].map((offset) => {
      const itemIndex = (index + offset) % items.length;
      const rawItem = items[itemIndex];
      
      // Normalize item to object
      let itemObj = typeof rawItem === "string" ? { label: rawItem } : { ...rawItem };
      
      // Apply defaults for icons/colors if missing
      if (!itemObj.icon || !itemObj.iconColor) {
        const mapped = DEFAULT_ICON_MAP[itemObj.label] || { icon: Check, color: "#000000" };
        itemObj.icon = itemObj.icon || mapped.icon;
        itemObj.iconColor = itemObj.iconColor || mapped.color;
      }

      return { offset, item: itemObj };
    });
  }, [items, index]);

  if (items.length === 0) return null;

  return (
    <div
      className="relative w-full max-w-[240px] sm:max-w-[320px] mt-6 lg:mt-8 overflow-visible mx-auto lg:mx-0"
      style={{
        height: "80px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        {visibleItems.map(({ offset, item }) => {
          const Icon = item.icon;
          const color = item.iconColor;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={
                hovered
                  ? {
                      opacity: 1,
                      scale: 1,
                      y: offset * 54, // Clear separation between cards
                      zIndex: 10 - offset,
                    }
                  : {
                      opacity: offset === 0 ? 1 : offset === 1 ? 0.45 : 0.2,
                      scale: 1 - offset * 0.035,
                      y: offset * 11,
                      zIndex: 10 - offset,
                    }
              }
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.95,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: hovered ? offset * 0.05 : offset * 0.02,
              }}
              className="absolute top-0 left-0 w-full px-4 sm:px-4 py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-3"
              style={{
                background:
                  offset === 0
                    ? "linear-gradient(135deg, rgba(226, 232, 240, 0.15) 0%, rgba(203, 213, 225, 0.08) 100%)"
                    : "linear-gradient(135deg, rgba(226, 232, 240, 0.06) 0%, rgba(203, 213, 225, 0.03) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1.2px solid rgba(0, 0, 0, 0.25)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              }}
            >
              {/* Icon box with colorful icon */}
              <div className="flex-shrink-0 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-md border border-black/5 bg-white/25 flex items-center justify-center">
                <Icon
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  style={{ color: color }}
                  strokeWidth={2.5}
                />
              </div>

              {/* Precise Small Uppercase Text */}
              <span className="text-[10px] sm:text-[11.5px] font-black tracking-widest text-black uppercase">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeatureStack;

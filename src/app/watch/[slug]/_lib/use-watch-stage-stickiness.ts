"use client";

import { type RefObject, useEffect, useRef, useState } from "react";

const LARGE_SCREEN_QUERY = "(min-width: 48em)";
const DESKTOP_SCREEN_QUERY = "(min-width: 64em)";
const ANCHORED_BOTTOM_VAR = "--watch-stage-anchored-bottom";

export type WatchStageMode = "inline" | "stuck" | "anchored-bottom";

export type WatchStageStickiness = {
  mode: WatchStageMode;
};

const getStickyTop = (): number => {
  const desktopQuery = window.matchMedia(DESKTOP_SCREEN_QUERY);

  if (desktopQuery.matches) {
    const padding = getComputedStyle(document.documentElement)
      .getPropertyValue("--site-padding-inline")
      .trim();

    const parsed = Number.parseFloat(padding);

    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
};

export const useWatchStageStickiness = (
  stageSlotRef: RefObject<HTMLElement | null>,
  stageRef: RefObject<HTMLElement | null>,
  transcriptEndRef: RefObject<HTMLElement | null>,
): WatchStageStickiness => {
  const [mode, setMode] = useState<WatchStageMode>("inline");
  const modeRef = useRef<WatchStageMode>("inline");

  useEffect(() => {
    const stageSlot = stageSlotRef.current;
    const stage = stageRef.current;
    const transcriptEnd = transcriptEndRef.current;

    if (!stageSlot || !stage || !transcriptEnd) {
      return undefined;
    }

    const largeScreenQuery = window.matchMedia(LARGE_SCREEN_QUERY);
    let stickyTop = getStickyTop();
    let rafId: number | null = null;

    const setAnchoredBottom = (value: number | null) => {
      if (value === null) {
        stage.style.removeProperty(ANCHORED_BOTTOM_VAR);
        return;
      }

      stage.style.setProperty(ANCHORED_BOTTOM_VAR, `${value}px`);
    };

    const applyMode = (
      nextMode: WatchStageMode,
      anchoredBottom: number | null,
    ) => {
      setAnchoredBottom(nextMode === "anchored-bottom" ? anchoredBottom : null);

      if (modeRef.current !== nextMode) {
        modeRef.current = nextMode;
        setMode(nextMode);
      }
    };

    const measure = () => {
      if (!largeScreenQuery.matches) {
        applyMode("inline", null);
        return;
      }

      const transcriptEndRect = transcriptEnd.getBoundingClientRect();
      const stageSlotRect = stageSlot.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const stageHeight = stageRect.height;
      const anchorBottom = transcriptEndRect.bottom;
      const topTriggered = stageSlotRect.bottom <= 0;
      const pastBottom = anchorBottom <= stickyTop + stageHeight;

      if (!topTriggered) {
        applyMode("inline", null);
        return;
      }

      if (pastBottom) {
        setAnchoredBottom(window.innerHeight - anchorBottom);

        if (modeRef.current !== "anchored-bottom") {
          modeRef.current = "anchored-bottom";
          setMode("anchored-bottom");
        }

        return;
      }

      applyMode("stuck", null);
    };

    const scheduleMeasure = () => {
      if (rafId !== null) {
        return;
      }

      rafId = requestAnimationFrame(() => {
        rafId = null;
        measure();
      });
    };

    const handleLayoutChange = () => {
      stickyTop = getStickyTop();
      scheduleMeasure();
    };

    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", handleLayoutChange);
    largeScreenQuery.addEventListener("change", handleLayoutChange);

    measure();

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", handleLayoutChange);
      largeScreenQuery.removeEventListener("change", handleLayoutChange);
      stage.style.removeProperty(ANCHORED_BOTTOM_VAR);
    };
  }, [stageSlotRef, stageRef, transcriptEndRef]);

  return { mode };
};

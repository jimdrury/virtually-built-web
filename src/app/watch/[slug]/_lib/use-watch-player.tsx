"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type PlaybackUpdate = {
  currentTime: number;
  isPlaying: boolean;
};

type WatchPlayerPlayback = {
  currentTime: number;
  isPlaying: boolean;
  hasPlayback: boolean;
};

type WatchPlayerActions = {
  updatePlayback: (payload: PlaybackUpdate) => void;
  seek: (seconds: number) => void;
  registerSeekHandler: (handler: (seconds: number) => void) => () => void;
};

type WatchPlayerContextValue = WatchPlayerPlayback & WatchPlayerActions;

const WatchPlayerPlaybackContext = createContext<WatchPlayerPlayback | null>(
  null,
);
const WatchPlayerActionsContext = createContext<WatchPlayerActions | null>(
  null,
);

export interface WatchPlayerProviderProps {
  children: ReactNode;
}

export const WatchPlayerProvider = ({ children }: WatchPlayerProviderProps) => {
  const [playback, setPlayback] = useState<WatchPlayerPlayback>({
    currentTime: 0,
    isPlaying: false,
    hasPlayback: false,
  });
  const seekHandlerRef = useRef<(seconds: number) => void>(() => {});

  const updatePlayback = useCallback(
    ({ currentTime, isPlaying }: PlaybackUpdate) => {
      setPlayback({ currentTime, isPlaying, hasPlayback: true });
    },
    [],
  );

  const seek = useCallback((seconds: number) => {
    seekHandlerRef.current(seconds);
  }, []);

  const registerSeekHandler = useCallback(
    (handler: (seconds: number) => void) => {
      seekHandlerRef.current = handler;

      return () => {
        seekHandlerRef.current = () => {};
      };
    },
    [],
  );

  const actions = useMemo(
    () => ({ updatePlayback, seek, registerSeekHandler }),
    [updatePlayback, seek, registerSeekHandler],
  );

  return (
    <WatchPlayerActionsContext.Provider value={actions}>
      <WatchPlayerPlaybackContext.Provider value={playback}>
        {children}
      </WatchPlayerPlaybackContext.Provider>
    </WatchPlayerActionsContext.Provider>
  );
};

export const useWatchPlayerActions = (): WatchPlayerActions => {
  const context = useContext(WatchPlayerActionsContext);

  if (!context) {
    throw new Error(
      "useWatchPlayerActions must be used within WatchPlayerProvider",
    );
  }

  return context;
};

export const useWatchPlayerPlayback = (): WatchPlayerPlayback => {
  const context = useContext(WatchPlayerPlaybackContext);

  if (!context) {
    throw new Error(
      "useWatchPlayerPlayback must be used within WatchPlayerProvider",
    );
  }

  return context;
};

export const useWatchPlayer = (): WatchPlayerContextValue => {
  const playback = useWatchPlayerPlayback();
  const actions = useWatchPlayerActions();

  return { ...playback, ...actions };
};

import React, { useState } from 'react';
import { RevealMode } from 'Reveal';
import { RevealContext } from './reveal-context';

export type RevealProviderProps = {
  delayBetween?: number;
  initialDelay?: number;
  disableDelay?: boolean;
  mode?: RevealMode;
  animation?: string;
};

export const RevealProvider: React.FC<RevealProviderProps> = ({
  children,
  delayBetween = 200,
  initialDelay = 0,
  disableDelay = false,
}) => {
  const [lastIndex, setLastIndex] = useState<number>(0);

  return (
    <RevealContext.Provider
      value={{
        lastIndex,
        setLastIndex,
        delayBetween,
        initialDelay,
        disableDelay,
      }}
    >
      {children}
    </RevealContext.Provider>
  );
};

export default RevealProvider;

import { keyframes } from '@emotion/react';

export const ignite = keyframes`
  0% {
    transform: scale(0.2);
    box-shadow: 0 0 0 0 rgba(173, 130, 0, 0);
    background: transparent;
  }

  30% {
    transform: scale(1);
    box-shadow: 0 0 0 16px rgba(173, 130, 0, 0.28);
    background: rgba(173, 130, 0, 0.85);
  }

  55% {
    transform: scale(0.6);
    box-shadow: 0 0 0 10px rgba(173, 130, 0, 0.22);
  }

  80% {
    transform: scale(0.8);
    box-shadow: 0 0 0 12px rgba(173, 130, 0, 0.18);
  }

  100% {
    transform: scale(0.5);
    box-shadow: 0 0 0 4px var(--point-shadow);
    background: transparent;
  }
`;

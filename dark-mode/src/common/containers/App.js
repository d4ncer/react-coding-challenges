import React from 'react';
import { DarkModeProvider } from '../contexts/dark-mode';

export default function App({ children }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}

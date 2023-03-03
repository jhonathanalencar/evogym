import { useState } from 'react';

import { SectionType, SelectPage } from './shared/data';

import { Header } from './components/Header';
import { Benefits } from './scenes/Benefits';
import { Home } from './scenes/Home';

export function App() {
  const [activePage, setActivePage] = useState<SectionType>(SelectPage.HOME);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <Home />
      <Benefits setActivePage={setActivePage} />
    </>
  );
}

import { Header } from './components/Header';
import { Benefits } from './scenes/Benefits';
import { ContactUs } from './scenes/ContactUs';
import { Home } from './scenes/Home';
import { OurClasses } from './scenes/OurClasses';

export function App() {
  return (
    <>
      <Header />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </>
  );
}

import { useEffect, useState } from 'react';

export function App() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (!test) {
      setTest(true);
    }
  }, [test]);

  return <div className="App">Mikasa</div>;
}

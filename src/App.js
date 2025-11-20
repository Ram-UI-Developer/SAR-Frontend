import { Suspense } from 'react';
import AppRouter from './Routes';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
      </Suspense>
    </div>
  );
}

export default App;

import React from 'react';
import Animation from './components/Animation';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-semibold text-white text-center mb-8">
          Modern House Lighting Control
        </h1>
        <Animation />
      </div>
    </div>
  );
}

export default App;
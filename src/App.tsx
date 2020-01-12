import React from 'react';
import FileLoader from "./components/fileLoad";
import EmotionExperiments from "./components/EmotionExperiments";

import 'semantic-ui-less/semantic.less'

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
            hello there
          <EmotionExperiments />
          <FileLoader />
      </header>
    </div>
  );
}

export default App;

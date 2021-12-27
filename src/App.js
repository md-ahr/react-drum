import { useReducer } from 'react';
import { initialState, reducer, DrumStateContext, DrumDispatchContext } from './context/drumContext';
import PadBank from './components/PadBank';
import AudioController from './components/AudioController';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DrumStateContext.Provider value={state}>
      <DrumDispatchContext.Provider value={dispatch}>
        <div id="drum-machine" className="container">
          <h1 className="title text-center mt-4">Drum Machine</h1>
          <div className="d-flex justify-content-between align-items-center">
            <PadBank />
            <AudioController />
          </div>
        </div>
        </DrumDispatchContext.Provider>
    </DrumStateContext.Provider>
  );

}

export default App;

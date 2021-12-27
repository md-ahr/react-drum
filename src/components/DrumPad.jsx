import { useEffect, useRef } from 'react';
import { useGlobalState, useGlobalDispatch } from '../context/drumContext';

const DrumPad = ({ item, index }) => {

  const audio = useRef();

  const { isPower, sliderVal } = useGlobalState();
  const dispatch = useGlobalDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (e) => {
    if (e.keyCode === item.keyCode) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, [handleKeyPress]);

  const playSound = () => {
    audio.current.volume = sliderVal;
    isPower && audio.current.play();
    dispatch({ type: 'display', value: item.id });
  };

  return (
    <button key={item.keyCode} type="button" id={`drum-pad-${index+1}`} className="drum-pad btn" onClick={playSound}>
      <audio ref={audio} src={item.url} id={item.keyTrigger} className="clip"></audio>
      <h5 className="mb-0">{item.keyTrigger}</h5>
    </button>
  );

};

export default DrumPad;

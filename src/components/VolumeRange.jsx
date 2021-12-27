import { useGlobalState, useGlobalDispatch } from '../context/drumContext';

const VolumeRange = () => {

    const { isPower, sliderVal } = useGlobalState();
    const dispatch = useGlobalDispatch();

    const adjustVolume = (e) => {
        if (isPower) {
            dispatch({ type: 'slider', value: e.target.value });
            dispatch({ type: 'display', value: `Volume: ${Math.round(e.target.value * 100)}` });
            setTimeout(() => clearDisplay(), 1000);
        }
    };

    const clearDisplay = () => {
        dispatch({ type: 'display', value: '' });
    }

    return (
        <div className="volume-slider mt-3">
            <input type="range" className="w-100" step='0.01' max='1' min='0' value={sliderVal} onChange={adjustVolume} />
        </div>
    );
};

export default VolumeRange;
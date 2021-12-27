import { useRef } from 'react';
import { useGlobalState, useGlobalDispatch } from '../context/drumContext';

const SoundBank = () => {

    const switchInput = useRef();

    const { isBank } = useGlobalState();

    const dispatch = useGlobalDispatch();

    const handleChangeSound = () => {
        const displayName = isBank ? 'Heater Kit' : 'Smooth Piano Kit';
        dispatch({ type: 'sound', value: switchInput.current.checked});
        dispatch({ type: 'display', value: displayName });
    };

    return (
        <div className="form-check form-switch mt-2">
            <label className="form-check-label" htmlFor="bank">Bank</label>
            <input ref={switchInput} className="form-check-input" type="checkbox" role="switch" id="bank" onChange={handleChangeSound} checked={isBank} />
        </div>
    );
}

export default SoundBank;

import { useRef  } from 'react';
import { useGlobalState, useGlobalDispatch } from '../context/drumContext';

const Power = () => {

    const switchInput = useRef();

    const { isPower } = useGlobalState();
    const dispatch = useGlobalDispatch();

    const handleChangePower = () => {
        dispatch({ type: 'power', value: switchInput.current.checked});
    };

    return (
        <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="power">Power</label>
            <input ref={switchInput} className="form-check-input" type="checkbox" role="switch" id="power" onChange={handleChangePower} checked={isPower} />
        </div>
    );

};

export default Power;

import { useGlobalState } from '../context/drumContext';

const Display = () => {
    const { displayName } = useGlobalState();
    return (
        <div id="display" className="text-center mt-3">
            <p>{displayName}</p>
        </div>
    )
}

export default Display;

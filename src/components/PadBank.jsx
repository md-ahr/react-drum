import { bankOne, bankTwo } from '../data';
import { useGlobalState } from '../context/drumContext';
import DrumPad from './DrumPad';

const PadBank = () => {

  const { isBank } = useGlobalState();

  const banks = isBank ? bankTwo : bankOne;

  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap p-4">
      {banks.map((item, index) => (
        <DrumPad key={item.id} item={item} index={index} />
      ))}
    </div>
  );

};

export default PadBank;

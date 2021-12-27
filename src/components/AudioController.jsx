import Power from './Power';
import Display from './Display';
import VolumeRange from './VolumeRange';
import SoundBank from './SoundBank';

const AudioController = () => {
    return (
        <div className="control-container">
          <Power />
          <Display />
          <VolumeRange />
          <SoundBank />
        </div>
    );
};

export default AudioController;

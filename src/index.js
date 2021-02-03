import './index.scss';
import { $, append } from './utils/utils';
import Menu from './pages/Menu';
import startupModal from './components/startupModal';
import { load, parseSave, setDefault } from './utils/saveSystem';
import createGlobalListeners from './global/listeners';
import disclaimer from './components/disclaimer';
import Map from './pages/Map';
import variables from './global/variables';
import Level from './pages/Level';
import levels from './configs/levels';

!load() && setDefault();
parseSave();

createGlobalListeners();

variables.currentLevel = 6;

append([
  Level(levels[6])
], $('#root'))

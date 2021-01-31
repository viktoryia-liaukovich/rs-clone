import './index.scss';
import { $ } from './utils/utils';
import Menu from './pages/Menu';
import Level from './pages/Level';
import config from './configs/levels';
import startupModal from './components/startupModal';
import { load, parseSave, setDefault } from './utils/saveSystem';
import createGlobalListeners from './global/listeners';

!load() && setDefault();
parseSave();

createGlobalListeners();

$('#root').appendChild(Menu());
$('#root').appendChild(startupModal());
// Level(config[0]);

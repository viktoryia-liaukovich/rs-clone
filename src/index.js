import './index.scss';
import { $, append } from './utils/utils';
import Menu from './pages/Menu';
import startupModal from './components/startupModal';
import { load, parseSave, setDefault } from './utils/saveSystem';
import createGlobalListeners from './global/listeners';
import pageLoader from './pages/Loader';

!load() && setDefault();
parseSave();

createGlobalListeners();

append([
  Menu(),
  startupModal()
], $('#root'))

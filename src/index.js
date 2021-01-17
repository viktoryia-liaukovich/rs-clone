import './index.scss';
import { $ } from './utils/utils';
import Menu from './pages/Menu';
import Level from './pages/Level';
import config from './configs/levels';

// $('#root').appendChild(Menu());
Level(config['1']);

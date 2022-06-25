import { createRoot } from 'react-dom/client';
import './global.css';
import './fonts.css';

import { App } from './app';

const root = createRoot(document.getElementById('app') as HTMLDivElement);

root.render(<App />);

import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import Therd from './Therd';
import First from './components/First';
import Second from './components/Second';

function App(): JSX.Element {
  const [selectComponent, setSelectComponent] = useState('rundom');

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={() => setSelectComponent('random')}>
        random
      </Button>
      <Button variant="contained" color="primary" onClick={() => setSelectComponent('time')}>
        time
      </Button>
      <Button variant="contained" color="primary" onClick={() => setSelectComponent('timer')}>
        timer
      </Button>

      <div>
        {selectComponent === 'random' && <First />}
        {selectComponent === 'time' && <Second />}
        {selectComponent === 'timer' && <Therd />}
      </div>
    </Box>
  );
}

export default App;
// задали три сценария поведения: если нажмешь random, то покажи стр First. если time то Second. если 'timer' && <Therd

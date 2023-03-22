import { useState } from 'react';
import User from './components/User';
const App = () => {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Add user!</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '95vw',
          flexWrap: 'wrap'
        }}
      >
        {Array(pageIndex).fill(0).map((_, index) => <User pageIndex={index + 1} key={index} />)}
      </div>
    </div>
  );
};

export default App;

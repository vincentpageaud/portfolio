import React from 'react';

const use100vh = (): number => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return height;
};

export default use100vh;

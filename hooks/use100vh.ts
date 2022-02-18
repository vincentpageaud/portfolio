import React from 'react';

type height = string | number;

const use100vh = (): height => {
  const [height, setHeight] = React.useState<height>('100vh');

  React.useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return height;
};

export default use100vh;

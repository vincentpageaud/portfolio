import { Canvas } from '@react-three/fiber';

import AnimatedSphere from './AnimatedSphere';

interface Props {
  scale: number;
}

const CanvasWrapper: React.FC<Props> = ({ scale }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <AnimatedSphere scale={scale} />
    </Canvas>
  );
};

export default CanvasWrapper;

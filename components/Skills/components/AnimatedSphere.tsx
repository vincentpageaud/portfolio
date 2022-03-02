import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere: React.FC = () => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <Sphere visible args={[1, 100, 200]} scale={1}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <MeshDistortMaterial color="#8352FD" attach="material" distort={0.3} speed={1.5} roughness={0} />
      </Sphere>
    </>
  );
};

export default AnimatedSphere;

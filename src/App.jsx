import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;

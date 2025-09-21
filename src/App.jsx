import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import { MantineProvider, Center } from "@mantine/core";

function Logo() {
  return (
    <svg viewBox="0 0 85 85" style={{ width: "800px", height: "500px" }}>
      <path d="m 4.0061914,29.22961 24.1170606,-24.1644046 48.467509,48.6437036 24.138639,-24.18601 -24.138639,-24.4576936 -48.467509,48.6437036 z" />
    </svg>
  );
}

export default function App() {
  return (
    <MantineProvider>
      <Center
        style={{
          height: "100vh",
          width: "100%",
          backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)",
          overflow: "hidden",
        }}
      >
        <Logo />
      </Center>
      <style>
        {`
          svg {
            display: block;
            animation: shine 3s linear infinite alternate;
            transform: translateY(15%);
          }
          svg path {
            fill: none;
            stroke-width: 10;
            stroke: white;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-opacity: 1;
            animation: move 5s linear infinite alternate;
            transform: translate(-10px);
          }
          @keyframes move {
            0% {
              stroke-dashoffset: 550px;
              stroke-dasharray: 550px 550px;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          @keyframes shine {
            0% { filter: drop-shadow(0 0 20px cyan); }
            100% { filter: drop-shadow(0 0 8px cyan); }
          }
        `}
      </style>
    </MantineProvider>
  );
}

const rootEl = document.createElement("div");
document.body.appendChild(rootEl);
createRoot(rootEl).render(<App />);

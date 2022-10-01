import { useState } from "react";
import "./styles.css";
import USDtoVND from "./USDtoVND";
import VNDtoUSD from "./VNDtoUSD";

export default function App() {
  const [vnd, setVND] = useState(0);
  const [usd, setUSD] = useState(0);

  const handleConvert = (data) => {
    setUSD(data.usd);
    setVND(data.vnd);
  };

  return (
    <div className="App">
      <VNDtoUSD convert={handleConvert} value={vnd} />
      <USDtoVND convert={handleConvert} value={usd} />
    </div>
  );
}

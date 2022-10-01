import { useState } from "react";

function VNDtoUSD({ convert, value }) {
  const convertUSD = (vnd) => {
    return vnd / 23632;
  };

  const handleChangle = (e) => {
    const vnd = e.target.value;
    const usd = convertUSD(vnd);
    convert({ usd, vnd });
  };
  return (
    <>
      <h1>VND</h1>
      <input
        value={value}
        onChange={handleChangle}
        placeholder="nhap tien VND"
      />
    </>
  );
}
export default VNDtoUSD;

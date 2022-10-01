import { useState } from "react";

function USDtoVND({ convert, value }) {
  const convertVND = (usd) => {
    return usd * 234650;
  };

  const handleChangle = (e) => {
    const usd = e.target.value;
    const vnd = convertVND(usd);
    convert({ usd, vnd });
  };
  return (
    <>
      <h1>USD</h1>
      <input
        value={value}
        onChange={handleChangle}
        placeholder="nhap tien usd"
      />
    </>
  );
}
export default USDtoVND;

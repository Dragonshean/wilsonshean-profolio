import React from "react";
import { lines } from "./banner4Line";

export const Exhibit2024 = () => {
  return (
    <div
      className="armyLine"
      data-aos="zoom-in-right"
      data-aos-duration="2000"
      data-aos-offset="0"
      data-aos-delay="300"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <h2>Intex South Asia 2024 textile exhibition</h2>
      <p>
        {lines.exhibit2024line1}
        <br />
        {lines.exhibit2024line2}
        <br />
        {lines.exhibit2024line3}
        <br />
        {lines.exhibit2024line4}
        <br />
        {lines.exhibit2024line5}
      </p>
    </div>
  );
};

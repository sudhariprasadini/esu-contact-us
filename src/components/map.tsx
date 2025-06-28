import Image from "next/image";
import React from "react";
import mapImage from "@/images/image.svg";

const MapFull = () => {
  return (
    <div className="mt-[140px]">
      <Image src={mapImage} alt="Map" />
    </div>
  );
};

export default MapFull;

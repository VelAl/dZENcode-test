"use client";

import { useEffect, useState } from "react";
import { getFormatedDate } from "@/utils";
import Image from "next/image";
import img from "../../../public/green-clock.svg";

export const LiveClock = () => {
  const [date, setDate] = useState(getFormatedDate());
  const [dayOfWeek, month, year, time] = date.split(", ");

  useEffect(() => {
    const timerID = setInterval(() => setDate(getFormatedDate()), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="container" style={{ fontSize: "0.6rem" }}>
      <div>
        <span className="mb-1 fw-semibold">{dayOfWeek}</span>
      </div>
      <div className="d-flex align-items-center">
        <span>{`${month}, ${year}`}</span>
        <Image src={img} alt="Clock" width={16} height={16} className="mx-2" />
        <span>{time}</span>
      </div>
    </div>
  );
};

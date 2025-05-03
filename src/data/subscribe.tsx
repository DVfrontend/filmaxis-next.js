"use client";

import data from "./subscribe.json";
import { useEffect, useState } from "react";
import type { Subscribes } from "@/types";
import Link from "next/link";

export default function SubscribePage() {
  const [subscribe, setSubscribe] = useState<Subscribes[]>([]);

  useEffect(() => {
    setSubscribe(data);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold mb-6 text-center">Оформить подписку на сайт</h1>
      {subscribe.map((sub) => (
        <Link href={sub.billingCycle} key={sub.id}>
          <div className="border rounded-sm p-4 text-center break-words">
            <div className="m-2 p-2">
              <span className="font-bold flex justify-center m-2 text-xl">
                {sub.name}
              </span>
              <p>{sub.description}</p>
              <ul>
                <li>{sub.features}</li></ul>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

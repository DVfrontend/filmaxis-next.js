"use client";

import data from "../../data/subscribe.json";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Subscribes = {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  billingCycle: string;
  class: string;
};

export default function SubscribePage() {
  const [subscribes, setSubscribes] = useState<Subscribes[]>([]);

  const handleClick = () => {
    toast.error("Действие выполнится не может");
  };

  useEffect(() => {
    setSubscribes(data);
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Оформить подписку</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subscribes.map((sub) => (
          <button
            key={sub.id}
            className={`border rounded-md p-4 flex flex-col justify-between hover:shadow-md transition ${sub.class}`}
            onClick={handleClick}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-center">
                {sub.name}
              </h2>
              <p className=" text-neutral-800 text-center mb-4">
                {sub.description}
              </p>
              <ol className="list-disc list-inside space-y-1">
                {sub.features.map((feature, index) => (
                  <li key={index}>✅{feature}</li>
                ))}
              </ol>
            </div>

            <div className="mt-4 text-center font-bold text-lg">
              {sub.price} {sub.currency}
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}

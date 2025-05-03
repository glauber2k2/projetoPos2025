"use client";

import { useState } from "react";

export default function Home() {
  const [count, useCount] = useState(1);

  return (
    <div className="flex h-screen flex-col p-4 pb-12">
      <h1 className="mb-4 text-lg font-bold">Olá usuario.</h1>
      <div className="grid grid-cols-3 gap-8 h-full">
        <div className="border-2 rounded-xl p-4">
          <h1 className="text-4xl font-bold mb-4">Sua Agenda</h1>
          <span className="flex gap-4 mb-4">
            <button className="rounded-full bg-black text-white px-4 py-2 flex w-full justify-center">
              Hoje
            </button>
            <button className="rounded-full border-2 px-4 py-2 flex w-full justify-center">
              Amanhã
            </button>
            <button className="rounded-full border-2 px-4 py-2 flex justify-center">
              X
            </button>
          </span>
          <button className="justify-center rounded-full bg-black text-white px-4 py-2 flex w-full">
            + Criar Tarefa
          </button>

          <div className="rounded-full border-2 flex">
            Tarefa <button>a</button>
          </div>
        </div>
        <div></div>
        <div className="col-span-2 border-2 rounded-xl p-4">teste</div>
      </div>
    </div>
  );
}

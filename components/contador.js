import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="text-center">
      <h1>Contador: {contador}</h1>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
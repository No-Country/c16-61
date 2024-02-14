"use client"

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <main style={{height:"300px", display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center"}} >
     <div>HOLA MUNDO</div>
     <button onClick={() => router.push("/prueba")}>Ir a otra pagina</button>
    </main>
  );
}

import { useState, useEffect } from "react";
import Card from "../../Components/Card/card";
import Layout from "../../Components/Layout/Layout";


export default function Home() {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProductos(data));
  }, []);
  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {productos?.map((producto, index) => (
          <Card key={index} {...producto} />
        ))}
      </div>
    </Layout>
  );
}

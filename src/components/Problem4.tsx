import { useState } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}
interface Problem4Props {
  initialCount?: number;
}

//list height=600 itemsize=50 overscanCount=5

// Generate sample products
const generateProducts = (count: number): Product[] => {
    const categories = ["Electronics", "Books", "Clothing", "Home", "Sports"];
    return Array.from({ length: count }, (_, index) => ({
        id: index,
        name: `Product ${index}`,
        price: parseFloat((Math.random() * 100).toFixed(2)),
        category: categories[Math.floor(Math.random() * categories.length)],
    }));
};

export default function Problem4({ initialCount = 100000 }: Problem4Props) {
    const [products] = useState(generateProducts(initialCount));

    // Hint: Use data-testid={`product-row-${index}`} in each product <div>

    const Row = ({index, style}: ListChildComponentProps) => {
      const product = products[index];
      return (
        <div style={style} data-testid={`product-row-${index}`}>
          {product.name} - ${product.price.toFixed(2)} - {product.category}
        </div>
      );
    };


  return (
    <div style={{ padding: "20px" }}>
      <h1>Problem 4: List Virtualization</h1>
      <p>
        Rendering a list of 100,000 products without virtualization. Observe the
        performance issues.
        Changed the list to use react-window to optimize the rendering.
      </p>
      <List
        height={600}
        itemSize={50}
        itemCount={products.length}
        overscanCount={5}
        width={600}
      >
        {Row}
      </List>
      <div style={{ marginTop: "20px" }}>
        <h3>Instructions:</h3>
        <ol>
          <li>Notice the lag when rendering a large list.</li>
          <li>Implement list virtualization using react-window.</li>
          <li>Observe the improved performance after optimization.</li>
        </ol>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { Product } from "../../../types";

const Products = ({ products }: { products: Product[] }) => {
 return (
  <section className="p-8 bg-gray-800">
   <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
    {
     products.map(product => (
      <li
       className="justify-self-center w-full max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
       key={product.id}
      >
       <a
        className="h-full flex flex-col items-start justify-between gap-2"
        href={product.permalink}
       >
        <div>
         <img
          className="aspect-square mx-auto filter mix-blend-multiply"
          src={product.thumbnail}
          alt={product.title}
         />
         <h2
          className="mt-2 text-lg tracking-tight"
         >
          {
           product.title.length > 50
            ? product.title.slice(0, product.title.lastIndexOf(" ", 50)) + "..."
            : product.title
          }
         </h2>
        </div>
        <strong
         className="text-xl font-bold"
        >
         {
          product.price.toLocaleString("es-AR", {
           currency: product.currency_id,
           style: "currency"
          })
         }
        </strong>
       </a>
      </li>
     ))
    }
   </ul>
  </section>
 )
}

export default Products;
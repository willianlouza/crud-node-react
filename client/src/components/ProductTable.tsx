import IProduct from "../interface/IProduct";
import ProductRow from "./ProductRow";

export type ProductTableProps = {
  products: IProduct[];
  onDeleteProduct: (product: IProduct) => void;
};
export default function ProductTable({ products, onDeleteProduct }: ProductTableProps) {
  return (
    <div className="w-full shadow-md rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-400 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-300">
              Nome
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-200">
              Tipo
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-300">
              Descrição
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-200">
              Inclusão
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-300">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => {
            return <ProductRow product={product} key={i} onDelete={onDeleteProduct} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

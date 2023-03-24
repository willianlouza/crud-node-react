import IProduct, { ProductType } from "../interface/IProduct";
import { RiEditFill } from "react-icons/ri";
import { BsFillTrash2Fill } from "react-icons/bs";
import moment from "moment";
import { getEnumValue } from "../utils/GetEnumValue";
import Link from "next/link";

export type ProductRowProps = {
  product: IProduct;
  onDelete: (product: IProduct) => void;
};

export default function ProductRow({ product, onDelete }: ProductRowProps) {
  return (
    <tr className="border-b border-gray-700">
      <th scope="row" className="px-6 py-4 font-medium text-white bg-neutral-900">
        {product.name}
      </th>
      <td scope="row" className="px-6 py-4 bg-neutral-600">
        {getEnumValue(ProductType, product.type)}
      </td>
      <td className="px-6 py-4 bg-neutral-900">{product.description}</td>
      <td scope="row" className="px-6 py-4 bg-neutral-600">
        {moment.utc(product.registeredAt).format("DD/MM/YYYY")}
      </td>
      <td className="px-6 py-4 bg-neutral-900 gap-2 ">
        <span className="flex gap-4">
          <Link href={`/edit/${product.id}`}>
            <RiEditFill className="text-sky-400 hover:text-sky-600" />
          </Link>
          <button onClick={() => onDelete(product)}>
            <BsFillTrash2Fill className="text-red-400 hover:text-red-300" />
          </button>
        </span>
      </td>
    </tr>
  );
}

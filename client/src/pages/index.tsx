import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import api from "@/api";
import Link from "next/link";
import ProductTable from "@/components/ProductTable";
import MainLayout from "@/components/layouts/main";
import { useState } from "react";
import IProduct from "@/interface/IProduct";
import { useForm } from "react-hook-form";

export default function Home({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [currentProducts, setProducts] = useState<IProduct[]>(products);
  const { handleSubmit, register } = useForm();

  const filter = async (data: any) => {
    const result = await api("/products", { params: { name: data.search } });
    const products = await result.data;
    setProducts(products);
  };

  const onDeleteProduct = async (product: IProduct) => {
    await api.delete(`/products/${product.id}`);
    const newState = currentProducts.filter((p) => p.id !== product.id);
    setProducts(newState);
  };
  return (
    <MainLayout title="Início">
      <div className="flex justify-between my-8">
        <Link href="/create" className="px-4 py-2 text-white bg-sky-800 hover:bg-sky-700 rounded-sm">
          Adicionar Produto
        </Link>

        <div>
          <form className="flex gap-2" onSubmit={handleSubmit(filter)}>
            <input
              {...register("search")}
              className="px-4 py-2 text-black focus:ring focus:outline rounded-sm"
              type="text"
              name="search"
              id="search"
            />
            <button type="submit" className="px-4 py-2 bg-sky-800 hover:bg-sky-700 text-white rounded-sm">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
      <ProductTable products={currentProducts} onDeleteProduct={onDeleteProduct} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await api("/products");
  const data = await result.data;
  return {
    props: {
      products: data as IProduct,
    },
  };
};

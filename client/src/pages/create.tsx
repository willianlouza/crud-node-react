import api from "@/api";
import MainLayout from "@/components/layouts/main";
import ProductForm from "../components/ProductForm";

export default function Create() {
  const createProduct = async (data: any) => {
    try {
      await api.post("/products/create", data);
      alert("Produto criado");
    } catch (error) {
      alert("Não pode criar");
    }
  };
  return (
    <MainLayout title="Criar">
      <ProductForm onSubmit={createProduct} />
    </MainLayout>
  );
}

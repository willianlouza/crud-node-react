import { useForm } from "react-hook-form";
import IProduct, { ProductType } from "../interface/IProduct";

export type ProductFormProps = {
  product?: IProduct;
  onSubmit: (data: any) => void;
};

const initialState: IProduct = {
  description: "",
  name: "",
  registeredAt: "",
  type: ProductType.CRITICO,
};

export default function ProductForm({ product = initialState, onSubmit }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="max-w-sm m-auto bg-neutral-700 p-6 rounded-md shadow-lg">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="w-full flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name">Nome do Produto</label>
          <input
            {...register("name", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            type="text"
            name="name"
            id="name"
            defaultValue={product.name}
          />
        </div>
        <div>
          <label htmlFor="description">Descrição</label>
          <input
            {...register("description", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            type="text"
            name="description"
            id="description"
            defaultValue={product.description}
          />
        </div>
        <div>
          <label htmlFor="">Tipo</label>
          <select
            {...register("type", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            name="type"
            id="type"
            defaultValue={product?.type}
          >
            <option value="CRITICO">Crítico</option>
            <option value="NAO_CRITICO">Não Crítico</option>
            <option value="SEMI_CRITICO">Semi Crítico</option>
          </select>
        </div>
        <div>
          <label htmlFor="registeredAt">Data de Inclusão</label>
          <input
            {...register("registeredAt", { required: true })}
            className="block w-full px-4 py-2 rounded-sm text-black focus:ring focus:outline-none"
            type="date"
            name="registeredAt"
            id="registeredAt"
            defaultValue={product.registeredAt.split("T")[0]}
          />
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded-sm text-white" type="reset">
            Cancelar
          </button>
          <button className="flex-1 px-4 py-2 bg-sky-800 hover:bg-sky-700 rounded-sm text-white" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { Loader } from "../../components/Loader/Loader";
import { Product } from "../../components/Product/Product";
import { useProducts } from "../../hooks/products";
import { Modal } from "../../components/Modal/Modal";
import { CreateProduct } from "../../components/CreateProduct/CreateProduct";
import { FC, useContext } from "react";
import { IProduct } from "../../models";
import { ModalContext } from "../../context/ModalContext";

export const ProductPage: FC = () => {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };
  return (
    <div className="mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new Product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
};

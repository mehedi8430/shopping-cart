import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products);

  useEffect(() => {
    document.title = "Home";
  }, []);


  return (
    <div>
      <main className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div className="col-span-2">
            <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
              {
                products.length ? (
                  products.map((product) => <ProductItem product={product} key={product?.id} />)
                ) : (
                  <div>No Product Found</div>
                )}
            </div>
          </div>
          <div>
            <AddProduct />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

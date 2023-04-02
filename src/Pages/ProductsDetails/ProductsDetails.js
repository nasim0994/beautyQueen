import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import RightSideInfo from "./RightSideInfo/RightSideInfo";
import ProductInfo from "./ProductInfo/ProductInfo";
import parcer from "html-react-parser";


const ProductsDetails = () => {
  window.scroll(0, 0);
  const product = useLoaderData();
  const parcerDescription = parcer(product.description);

  return (
    <div className="py-2">
      <div className="w-[95%] xl:w-[1280px] mx-auto text-neutral">
        {/* Path */}
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/" className="text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shops" className="text-primary">
                Shops
              </Link>
            </li>
            <li>{product?.title}</li>
          </ul>
        </div>

        <div className="lg:flex shadow-lg mt-4 rounded overflow-hidden">
          {/* Product info */}
          <div className="lg:w-[75%] bg-base-100 p-4 text-neutral">
            <ProductInfo product={product} />
          </div>

          <div className="lg:w-[25%] bg-stone-50 p-4 text-sm">
            <RightSideInfo />
          </div>
        </div>

        {/* Details */}
        <div className="bg-base-100 shadow-lg p-4 rounded mt-6">
          <h1 className="font-semibold text-lg">
            Product Description of {product?.title}
          </h1>

          <div className="mt-3 pl-2">{parcerDescription}</div>
        </div>

        {/* Related Products */}
        <RelatedProducts category={product?.category} />
      </div>
    </div>
  );
};

export default ProductsDetails;

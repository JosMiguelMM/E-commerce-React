import "./product_detail.css";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function ProductDetail() {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black bg-white">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl p-6">Detail</h2>
        <div>
          <XMarkIcon className="size-6 text-black" />
        </div>
      </div>
    </aside>
  );
}

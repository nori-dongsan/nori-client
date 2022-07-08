import { ProductFilter, ViewProductBanner } from '../components/viewProduct';

export default function viewProduct() {
  return (
    <div>
      <ViewProductBanner />
      <ProductFilter />
    </div>
  );
}

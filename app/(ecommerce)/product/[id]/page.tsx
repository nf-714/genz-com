import ProductDetails from "@/components/product/product-details/product-details.component";

export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <ProductDetails id={id} />;
}

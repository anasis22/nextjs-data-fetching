export const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve,4000));
  return <h2>Product</h2>
}
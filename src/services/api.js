export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJSON = await categories.json();

  return categoriesJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const productsJSON = await products.json();

  return productsJSON;
}

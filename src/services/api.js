export async function getCategories(category) {
  const url = `https://api.mercadolibre.com/sites/MLB/${category}`;
  const requestReturn = await fetch(url);
  const requestObject = await requestReturn.json();
  return requestObject;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}=${query}`;
  const requestReturn = await fetch(url);
  const requestObject = await requestReturn.json();
  return requestObject;
}

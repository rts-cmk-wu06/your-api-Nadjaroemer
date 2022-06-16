export function allProducts(request, response) {
  response.json([
    {
      id: 1,
      name: "Feta",
    },
    {
      id: 2,
      name: "Gouda",
    },
  ]);
  response.end();
}

import Order from "../models/ordermodel";

export async function createOrder(request, response) {
  const newOrder = new Order();
  newOrder.id = request.body.id;
  newOrder.orderedBy = id;

  response.status(500).end();
}

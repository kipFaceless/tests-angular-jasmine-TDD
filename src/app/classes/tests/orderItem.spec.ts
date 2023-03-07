import OrderItem from '../OrderItem';


describe("Order Items Tests", () =>{
  beforeEach(() => {
    //orderItem = new OrderItem();
  });
    it("Should create an item in a order", () =>{
      const orderItem = new OrderItem(1, 200,2);
      const total = orderItem.getTotal();
      expect(total).toBe(400);
    })
});

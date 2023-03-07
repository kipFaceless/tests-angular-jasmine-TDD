export default class OrderItem{
  constructor(readonly idItem: number, readonly price : number, readonly quanity: number ){// Foi repetido o price em order porque o preço do produto pode ser mudado, o ideia
    //é pegar o preço no momento da compra
  }
  getTotal(){
    return this.price * this.quanity;
  }
}

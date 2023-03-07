
export default class Cpf {
  value : string
  constructor(value : string){
    this.value = value
  }

  validCpf = () => this.value = "839.435.452-10"
  invalidCpf = () => this.value = ""
}

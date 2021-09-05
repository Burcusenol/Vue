export const productMixin={
    data() {
        return {
          products: ["Monitor", "Klavye", "Masa", "Kitap", "Şişe"],
          searchText: "",
        };
      },
    
      computed: {
        filtered() {
          return this.products.filter((element) => {
            return element.match(this.searchText);
          });
        },
      },
      created(){
          console.log("Mixin created")
      }
}
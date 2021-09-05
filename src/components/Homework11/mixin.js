export const mixin={
    data() {
        return {
          message: "Bu yazıyı ters yazmalısın!",
        };
      },
      computed: {
        reverse() {
          return this.message.split("")
              .reverse()
              .join("");
          },
        
        count(){
          return this.message+ "("+ this.message.length + ")";
        }
      },
}
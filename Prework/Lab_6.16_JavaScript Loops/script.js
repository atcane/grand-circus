function drawTriangle(size) {
   for(let i = 1; i <=size; i += 1) {
      let line = "";
      for (let j = 0; j < i; j++) {
         line += "*";
      }
      console.log(line);
   }
}
drawTriangle(4);
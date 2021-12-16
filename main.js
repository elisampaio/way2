
document.addEventListener('DOMContentLoaded', () => { // Apenas corre após o DOM estar carregado
   console.log('DOM completamente carregado'); // Manda a confirmação para a consola
});


function changeColor(getColor) {
   let ellipse = document.querySelector('.div');
   let selectColor = getColor.value;
   ellipse.style.background = selectColor;

   // Cor aleatória para a elipse difusa
   // Math.random retorna um número entre 0 e 1
   let cursorColor = selectColor;

   // FUNÇÕES ----------------------------------------------------------------------------------------------------------------------------------
   // Cor aleatória para a elipse difusa
   function randomCursorColor() {
      document.getElementById('mouseCircle').style.background = cursorColor;
      //mouseCircle.setAttribute("style", "z-index=99;");
   }

   randomCursorColor();

   $(document).ready(function () {
      caminho('#mouseCircle'); // atribuir 1 caminho a cada circulo
   });


   //percursos diferentes para cada circulo
   let h = $(window).height();
   let w = $(window).width();

   function caminho(myclass) {
      function makeNewPosition() {
         let nh = Math.floor(Math.random() * h) - 100;
         let nw = Math.floor(Math.random() * w) - 100;
         return [nh, nw];
      }

      let newq = makeNewPosition()

      $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
         caminho(myclass);
      });
   }

}









function changeColor1(getColor) {
   let ellipse1 = document.querySelector('.div1');
   let selectColor1 = getColor.value;
   ellipse1.style.background = selectColor1;

   // Cor aleatória para a elipse difusa
   // Math.random retorna um número entre 0 e 1
   let cursorColor = selectColor1;

   // FUNÇÕES ----------------------------------------------------------------------------------------------------------------------------------
   // Cor aleatória para a elipse difusa
   function randomCursorColor() {
      document.getElementById('mouseCircle1').style.background = cursorColor;
      //mouseCircle1.setAttribute("style", "z-index=99;");
   }

   randomCursorColor();

   $(document).ready(function () {
      caminho('#mouseCircle1'); // atribuir 1 caminho a cada circulo
   });


   //percursos diferentes para cada circulo
   let h = $(window).height();
   let w = $(window).width();

   function caminho(myclass) {
      function makeNewPosition() {
         let nh = Math.floor(Math.random() * h) - 100;
         let nw = Math.floor(Math.random() * w) - 100;
         return [nh, nw];
      }

      let newq = makeNewPosition()

      $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
         caminho(myclass);
      });
   }

}




function changeColor2(getColor) {
   let ellipse2 = document.querySelector('.div2');
   let selectColor2 = getColor.value;
   ellipse2.style.background = selectColor2;

   // Cor aleatória para a elipse difusa
   // Math.random retorna um número entre 0 e 1
   let cursorColor = selectColor2;

   // FUNÇÕES ----------------------------------------------------------------------------------------------------------------------------------
   // Cor aleatória para a elipse difusa
   function randomCursorColor() {
      document.getElementById('mouseCircle2').style.background = cursorColor;
      //mouseCircle2.setAttribute("style", "z-index=9;");
   }

   randomCursorColor();

   $(document).ready(function () {
      caminho('#mouseCircle2'); // atribuir 1 caminho a cada circulo
   });


   //percursos diferentes para cada circulo
   let h = $(window).height();
   let w = $(window).width();

   function caminho(myclass) {
      function makeNewPosition() {
         let nh = Math.floor(Math.random() * h) - 100;
         let nw = Math.floor(Math.random() * w) - 100;
         return [nh, nw];
      }

      let newq = makeNewPosition()

      $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
         caminho(myclass);
      });
   }

}





const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

//eventos//

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);

    //remove btns//
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    //adicionar classe para o botão correto//
    const button = e.target;

    const id = button.getAttribute("id");

    //adicionar a classe do selecionado//
    button.querySelector(".color").classList.add("selected");

    //mudar a imagem//
    image.classList.add("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    //voltar a imagem ao normal//
    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});

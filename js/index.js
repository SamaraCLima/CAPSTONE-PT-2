// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "../img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "../img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "../img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "../img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "../img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "../img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 100,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
];
/*--------Estilização-------------*/
function começo() {
  let topo = document.createElement('header')
  topo.setAttribute('class', 'top')
  document.querySelector('body').appendChild(topo)
  let title = document.createElement('h1')
  title.setAttribute('class', 'titulo')
  let title_name = document.createTextNode('Weartake')
  document.querySelector('.top').appendChild(title)
  document.querySelector('.titulo').appendChild(title_name)
  let navigation = document.createElement("nav")
  navigation.setAttribute('class', 'acesso')
  document.querySelector('header').appendChild(navigation)
  let ref = document.querySelector('.acesso')
  ref.innerHTML += `
  <a href="#" target="_self" rel="Todos">Todos</a>
          <p>Acessórios</p>
          <p>Calçados</p>
          <p>Camisetas</p>`
  centro()
}
começo()
function centro() {
  let secao = document.createElement('main')
  document.querySelector('body').append(secao)
  let cardsloja = document.createElement('section')
  cardsloja.setAttribute('class', 'vitrine')
  document.querySelector('main').appendChild(cardsloja)
  let product = document.querySelector('.vitrine')
  for (let i = 0; i < data.length; i++) {
      product.innerHTML += `
       <section class="produto">
      <figure>
          <section class="caixa">
              <img class="imagem" src="` + data[i].img + `" alt="` + data[i].nameItem + ` ">
          </section>
      </figure>
      <section class="detalhe">
          <p class="nome-product">` + data[i].tag + `</p>
          <h3 class="title">` + data[i].nameItem + `</h3>
          <p class="descricao-produto">` + data[i].description + `</p>
          <p class="valor-produto">R$ ` + data[i].value + `.00</p>
          <button class="botao">Adicionar ao carrinho</button>
      </section>           
  </section> `
  }
  finalsecao()
}
function finalsecao() {
  let rodafinal = document.createElement('footer')
  document.querySelector('main').appendChild(rodafinal)
  let pesquisar = document.createElement('section')
  document.querySelector('footer').appendChild(pesquisar)
  pesquisar.setAttribute("class", "but")
  let hold = document.createElement('input')
  hold.setAttribute('class', 'barra-pesquisa')
  hold.setAttribute('placeholder', 'digite aqui sua pesquisa')
  document.querySelector('.but').appendChild(hold)
  let bot = document.createElement('button')
  bot.setAttribute("class", "search")
  document.querySelector('.but').appendChild(bot)
  let bot_search = document.createTextNode('pesquisar')
  document.querySelector('.but').appendChild(bot)
  document.querySelector('.search').appendChild(bot_search)
  carrinhoBlock()
}
function carrinhoBlock() {
  let ini = document.createElement('section')
  ini.setAttribute('class', 'carrinho')
  document.querySelector('footer').appendChild(ini)
  let subtitulo = document.createElement('h3')
  subtitulo.setAttribute('class', 'bot')
  let subtitle = document.createTextNode('Carrinho de Compras')
  document.querySelector('.carrinho').appendChild(subtitulo)
  document.querySelector('.bot').appendChild(subtitle)
  let div = document.createElement('div')
  div.setAttribute('class', 'divisao')
  document.querySelector('footer').appendChild(div)

  let final = document.createElement('section')
  final.setAttribute('class', 'final-carrinho')
  document.querySelector('footer').appendChild(final)
  let final_1 = document.createElement('section')
  final_1.setAttribute('class', 'quantidade-produto')
  document.querySelector('.final-carrinho').appendChild(final_1)
  let bloco1 = document.createElement('p')
  let para2 = document.createTextNode('Quantidade :')
  bloco1.setAttribute("class", "paragraf")
  document.querySelector('.quantidade-produto').appendChild(bloco1)
  document.querySelector(".paragraf").appendChild(para2)
  let bloco2 = document.createElement('p')
  let bloco3 = document.createTextNode('0')
  bloco2.setAttribute("class", "paragrafi")
  document.querySelector('.quantidade-produto').appendChild(bloco2)
  document.querySelector(".paragrafi").appendChild(bloco3)
  let para3 = document.createElement('section')
  para3.setAttribute('class', 'total-compra')
  document.querySelector('.final-carrinho').appendChild(para3)
  let bloco4 = document.createElement('p')
  let bloco5 = document.createTextNode('Total :')
  bloco4.setAttribute("class", "paragrafiii")
  document.querySelector('.total-compra').appendChild(bloco4)
  document.querySelector(".paragrafiii").appendChild(bloco5)
  let bloco6 = document.createElement('p')
  let para4 = document.createTextNode('R$ 0.00')
  bloco6.setAttribute("class", "paragrafii")
  document.querySelector('.total-compra').appendChild(bloco6)
  document.querySelector(".paragrafii").appendChild(para4)
  let para5 = document.createElement('section')
  para5.setAttribute('class', 'nona')
  document.querySelector('.final-carrinho').appendChild(para5)
  let boot = document.createElement('button')
  let butttom = document.createTextNode('Finalizar Compra')
  boot.setAttribute("class", "finalizar")
  document.querySelector('.nona').appendChild(boot)
  document.querySelector('.nona').appendChild(butttom)
}
comeco()
function comeco() {
  let removeCart = document.querySelectorAll('.remove')
  for (let i = 0; i < removeCart.length; i++) {
      let butao = removeCart[i]
      butao.addEventListener('click', removeCartItem);
  }
  let addCart = document.querySelectorAll('.botao')
  for (let i = 0; i < addCart.length; i++) {
      let buton = addCart[i];
      buton.addEventListener("click", addCartShop);
  }
}
function removeCartItem(event) {
  let buttonClicked = event.target;
  let img = buttonClicked.parentElement
  img.parentElement.remove()
  updatetotal()
}
function addCartShop(event) {
  console.log(event)
  let buton = event.target;
  let shopProducts = buton.parentElement;
  let imege = shopProducts.parentElement;
  console.log(imege)
  let tite = imege.querySelectorAll(".title")[0].innerText;
  let prec = imege.querySelectorAll(".valor-produto")[0].innerText;
  let imagen = imege.querySelectorAll(".imagem")[0].src;
  addProductCart(tite, prec, imagen);
}
function addProductCart(tite, prec, imagen) {
  console.log(tite, prec, imagen)
  let cartShopBox = document.createElement("div");
  cartShopBox.classList.add('cart-box')
  let cartItems = document.querySelectorAll('.divisao')[0]
  let cartNames = cartItems.querySelectorAll(".title")
  for (let i = 0; i < cartNames.length; i++) {
      return;
  }
  let cartContent = `   <figure class="tamanho-caixa">
  <img src=${imagen} alt="Jaqueta Masculina preta ">
  </figure>
  <section class="descricao-compra">
  <h3 class="nome">${tite}</h3>
  <p class="value">${prec}</p>
  <button class="remove">Remover produto</button>  
  </section>
  </section>`
  shopBox.innerHTML = cartContent
  cartItems.append(shopBox)
  console.log(shopBox)
  shopBox.querySelectorAll(".remove")[0].addEventListener('click', removeCartItem);
  updatetotal()
}
function updatetotal() {
  let cartContent = document.querySelectorAll('.cart-box')
  let total = 0
  let quantidade = 0
  for (let index = 0; index < cartContent.length; index++) {
      let number = cartContent[index]
      let preco_elemento = number.querySelector('.value')
      let price_value = parseFloat(preco_elemento.innerText.replace('R$ ', ''))
      total += price_value
      quantidade += 1
  }
  document.querySelector('.paragrafii').innerHTML = 'R$ ' + total.toFixed(2)
  document.querySelector('.paragrafi').innerHTML = quantidade
}
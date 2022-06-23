
// botões arquivos
const btnHumor = document.getElementById("humor");
const btnPokedex = document.getElementById("pokedex");

// botões voltar
const btnVoltarH = document.getElementById("humorVoltar");
const btnVoltarP = document.getElementById("pokeVoltar")

// divs
const divHumor = document.getElementById("newDivH");
const divPokedex = document.getElementById("newDivP");

// blocos
const blocoPH = document.getElementById("blocoH");

// Humor
btnHumor.addEventListener("click", function (){
    divHumor.innerHTML = `
    
    <section style='display:flex; justify-content:center';>
        <div id="js" style='margin-right:3%;';>
            <h4 style='text-align:center; margin-bottom:8%'> script.js </h4>

            <textarea rows="10" style='background-color:#52b78800; border: none; color:white'>
                const botao = document.querySelector("#btxt");
                const titulo = document.querySelector("#titulo");
                const frase = document.querySelector("#frase");
                const img1 = document.querySelector("#imgborda");
                const background = document.getElementById("#header");
                const div = document.querySelector("#div");

                botao.addEventListener("click", ()=> {
   
                if (botao.value == "mudanca1"){
                    titulo.style.color = "white";
                    titulo.innerHTML = "Jogo do Humor da Tohru";
                    frase.innerHTML = 
                    'Tohru está feliz.;
                    frase.style.color = "white";
                    img1.src = "feliz.jpg";
                    document.getElementById("header").style.backgroundImage="url(fundo1.png)";
                    document.getElementById("html").style.backgroundColor = "#4D9C4D";
                    document.getElementById("a").style.backgroundColor = "#4D9C4D";
                    document.getElementById("img").style.backgroundColor = "#4D9C4D";
                    document.body.style.backgroundColor = "#4D9C4D";
                    document.getElementById("a").style.borderColor = "#EEEE53";
                    document.getElementById("img").style.borderColor = "#EEEE53";
                    document.getElementById("a").style.backgroundColor = "#EEEE53";
                    document.getElementById("img").style.backgroundColor = "#EEEE53";
                    document.getElementById("header").style.padding = "10%";
                    document.getElementById("div").style.flexDirection = "row";
                    document.getElementById("div").style.justifyContent = "center";
                    botao.value = "mudanca2";
                } else if (botao.value == "mudanca2"){
                    titulo.style.color = "#B74035";
                    frase.innerHTML = 
                    'Vish, você irritou ela. 
                    Acho melhor sair daqui.';
                    frase.style.color = "grey";
                    img1.src = "mad.jpg";
                    document.getElementById("header").style.backgroundImage="url(fundo2.jpg)";
                    document.getElementById("html").style.backgroundColor = "#434753";
                    document.getElementById("a").style.backgroundColor = "#434753";
                    document.body.style.backgroundColor = "#434753";
                    document.getElementById("a").style.borderColor = "#434753";
                    document.getElementById("img").style.borderColor = "#434753";
                    document.getElementById("img").style.backgroundColor = "#434753";
                    botao.value = "mudanca3";
                } else if (botao.value == "mudanca3"){
                    titulo.style.color = "black";
                    frase.innerHTML = 
                    'Deu merda.
                    Melhor correr!';
                    frase.style.color = "red";
                    img1.src = "tohru3.gif";
                    document.body.style.backgroundColor = "black";
                    document.getElementById("html").style.backgroundColor = "black";
                    document.getElementById("header").style.backgroundImage="url(fundo3.jpg)";
                    document.getElementById("a").style.backgroundColor = "black";
                    document.getElementById("img").style.backgroundColor = "black";
                    document.getElementById("div").style.flexDirection = "column";
                    document.getElementById("div").style.justifyContent = "center";
                    document.getElementById("a").style.borderColor = "black";
                    document.getElementById("img").style.borderColor = "black";
                    document.getElementById("header").style.padding = "0px";
                    botao.value = "mudanca1";
                }
             });
            </textarea>

        </div>

        <div id="html"  style='margin-right:3%'>
            <h4 style='text-align:center; margin-bottom:8%''> index.html </h4>

            <textarea rows="10" style='margin-right:1%; text-align:justify; background-color:#52b78800; border: none; color:white'>
            <!DOCTYPE html>
            <html lang="pt-br" id="html" value="recomeca">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="./style.css">
                <title>Jogo do Humor</title>
            </head>
             
            <body id="body">
                <header id="header">
                    <h1 id="titulo">Jogo do Humor da Tohru</h1> 
                </header>
            
                <div id="div"> 
                    <article id="a">
                        <h1 id="frase"> Tohru está feliz.  </h1>
                    </article>
                    <figure id="img"> <img id="imgborda" src="feliz.jpg"> </figure>
                </div>
            
                <article>
                    <p>Toque no olho da Tohru para trocar de humor!</p>
                </article>
            
                <section id="btn">
                    <button value="mudanca2" id = "btxt"> </button>
                </section>
                
                <script src="./script.js">
                </script>
            </body>
            </html>
            </textarea>

        </div>

        <div id="css">
            <h4 style='text-align:center; margin-bottom:8%''> style.css </h4>
            <textarea rows="10" style='margin-right:1%; background-color:#52b78800; border: none; color:white'>

            html {
                background-color: rgb(77, 156, 77);
            }

            header {
                background-image: url(fundo1.png);
                background-size: cover;
                background-repeat: no-repeat;
                padding: 10%;
                border-radius: 50px;
                margin: 5%;
                box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.781);
            }

            header h1 { 
                display: flex;
                justify-content: center;
                flex-grow: 4;
                text-shadow: 5px 5px 10px black;
                color: white;
                font-size: 300%;
            }

            article p {
                display: flex;
                justify-content: center;
                font-size: 200%;
                 color: white;
            }

            section {
               display: flex;
               justify-content: center;
            }

            #btxt {
                background-image: url(teye_auto_x2.jpg);
                background-repeat: no-repeat;
                background-size: cover;
                padding: 4%;
                border-radius: 100%;
                justify-content: center;
            }

            div {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            div article {
                border: 10% solid rgb(238, 238, 83);
                padding: 11%;
                background-color:rgb(238, 238, 83);
                border-radius: 50px;
                color: white;
                font-size: 110%;
            }

            div figure {
                border: 15px solid rgb(238, 238, 83);
                background-color: rgb(238, 238, 83);
                border-radius: 50px;
            }

            #imgborda {
                border-radius: 50px;
            }
            </textarea>

        </div>
    </section>`;
    
    btnVoltarH.style.display = "flex";

    btnHumor.style.display = "none";

    blocoPH.style.padding = "2%";
});


btnVoltarH.addEventListener("click", function (){
    divHumor.innerHTML = `<div id="newDivH" syle='text-align: center';>
        <p style='word-wrap:break-word; padding-left: 30px; padding-right: 30px';> O objetivo do projeto é usar o JS (DOM) para fazer o HTML e CSS mudar de acordo que apertarem o botão. </p>
        <p style='word-wrap:break-word; padding-left: 30px; padding-right: 30px';> Foi usado: JS, HTML e CSS </p>
    </div>`;

    btnVoltarH.style.display = "none";
    
    btnHumor.style.display = "flex";

    blocoPP.style.height = "inherit";
    blocoPP.style.paddingTop = "2%";
    blocoPP.style.paddingBottom = "2%";
})


// Pokedex
btnPokedex.addEventListener("click", function(){
    divPokedex.innerHTML = `
    <section style='display:flex; justify-content:center; flex-wrap:wrap';>
    <div id="js" style='margin-right:3%; margin-left:6%';>
        <h4 style='text-align:center; margin-bottom:8%; margin-top:8%'> script.js </h4>

        <textarea rows="10" style='background-color:#52b78800; border: none; color:white'>
            const closeMessage = document.querySelector("#close")
            const message = document.querySelector("#msg")
        
            closeMessage.addEventListener("click", function (){
                message.style.display = "none"
            })
        
            setTimeout(() => {
                message.style.display = "none"
            }, 5000)
        </textarea>

    </div>

    <div id="html"  style='margin-right:3%'>
        <h4 style='text-align:center; margin-bottom:8%; margin-top:8%'> index.js </h4>

        <textarea rows="10" style='margin-right:1%; text-align:justify; background-color:#52b78800; border: none; color:white'>
            const path = require("path");
            const express = require("express");

            const app = express();
            const port = process.env.PORT || 3000; 
            app.use(express.urlencoded());
            app.use(express.static(path.join(__dirname, "public")));

            const pokedex = [];
            let msg = "";


            app.set("view engine", "ejs");

            app.get("/", (req, res) => {  
                setTimeout(() => {
                    msg = "";
                }, 1000 );
                res.render("index", {
                    pokedex,
                    msg,
                });
            });

            app.get("/detalhes/:id", (req, res) => {
                const id = req.params.id;
                const pokemon = pokedex[id];
                    res.render("detalhes", {
                        pokemon,
                });
            });

            app.get("/cadastro", (req, res) => {
                res.render("cadastro"); 
            });

            app.post("/new", (req, res) => {
                const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;
                let objeto = { numero: numero, nome: nome, tipo: tipo, imagem: imagem, descricao: descricao, altura: altura, peso: peso, categoria: categoria, habilidade: habilidade};
                pokedex.push(objeto);
                msg = "Pokemon cadastrado!";

               res.redirect("/");
   
            });

            app.listen(port, () => console.log(Servidor rodando em http://localhost:$ {port}));
      
            </textarea>
            </div>

    <div id="css"  style='margin-right:3%'>
        <h4 style='text-align:center; margin-bottom:8%; margin-top:8%'> style.css </h4>
        <textarea rows="10" style='background-color:#52b78800; border: none; color:white'>

        #htmlI {
            background-color: #E63950;
            background: linear-gradient(0deg, #d4a1a8, #E63950 );
            background-repeat: no-repeat;
            background-size: cover;
            min-height: 100vh;
            background-position: center;
        }
        
        #htmlC {
            background-color: black;
            background: linear-gradient(0deg, #E63950, black );
            background-repeat: no-repeat;
            background-size: cover;
            min-height: 100vh;
            background-position: center;
        }
        
        #mainC {
            color: white;
        }
        
        #mainC h1 {
            font-size: 200%;
            display: flex;
            justify-content: center;
            padding: 5%;
            flex-direction: column;
            align-items: center;
        }
        
        main section {
            background-color: #E63950;
            margin-left: 25%;
            margin-right: 25%;
            padding: 2%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        section {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: white;
            border-radius: 100px;
        }
        
        section h1 {
            font-size: 300%;
            text-shadow: 10px 10px 10px #CEF2EF;
        }
        
        section a {
            font-size: 170%;
            text-shadow: 10px 10px 10px #CEF2EF;
            background-color: white;
            border: 0px;
            cursor: pointer;
            color: black;
            text-decoration: none
        }
        
        form div {
            margin: 10%;
        }
        
        .divL {
            font-size: 130%;
            padding: 2%;
            margin: 10%;
            align-items: center;
            display: flex;
            flex-direction: column;
        }
        
        .input {
            padding: 3%;
            width: 230%;
            border-radius: 100px;
            border-color: #E63950;
        }
        
        #btn1 {
            margin-top: 40%;
            background-color: #E63950;
            border-radius: 100px;
            color: white;
            text-shadow: #E63950;
            border: 2px solid white;
            font-size: 110%;
            padding: 20px;
            cursor: pointer;
            transition: 0.3s;   
        }
        
        
        #btn1:hover {
            background-color:#fcc3c34d;
        }
        
        .btn:hover {
            background-color: rgba(255, 255, 255, 0.582);
        }
        
        .ponto {
            list-style-type: none;
        }
        
        #cartao {
            display: flex;
            flex-direction: column;
            list-style-type: none;
            background-image: url("/img/pokedex.png");
            width: 40px;
            height: 40px;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 60px;
            margin: 50px;
            margin-top: 80px;
            border-radius: 55%;
            box-shadow: 10px 10px rgba(63, 63, 63, 0.575);
        }
        
        #ponto {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
        
        .text {
            display: flex;
            justify-content: center;
            color: white;
            font-size: 19px;
        }
        
        #text2 {
            color: #E63950;
            margin-top: 30px;
        }
        
        #card {
            text-decoration: none;
        }
        
        #cartao:hover:nth-child(odd) {
            background-image: url("/img/open.png");
        }
        
        #htmlD {
            background-color: #CEF2EF;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.452), #CEF2EF );
        }
        
        #cardd {
            display: flex;
            align-items: center;
        }
        
        #form {
            padding: 52px;
            margin: 50px;
            background-color: #CEF2EF;
        }
        
        #img1 {
            background-image: url("/img/pokeball.png");
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        #formd {
            background-color: rgba(0, 0, 0, 0.253);
            border-radius: 40px;
            padding: 40px;
            padding-left: 80px;
            padding-right: 80px;
            margin-left: 200px;
            display: flex;
            flex-direction: column;
            font-size: 20px;
        }
        
        .esp {
            margin: 5px;
            color: black;
        }
        
        #msg {
            margin: 25px;
            display: flex;
            justify-content: flex-end;
            padding: 20px;
            padding-left: 0px;
            background-color: transparent;
        }
        
        #msgp {
            background-color: white;
            padding: 20px;
            border-radius: 30px;
            display: flex;
            align-items: center;
        }
        
        span#close {
            font-size: 2rem;
            cursor: pointer;
            transition: .3s;
        }
          
        span#close:hover{
            color: rgb(255, 0, 0);
            transform: scale(1.5);
        }
        
        span {
            margin-left: 20px;
        }
        </textarea>

    </div>

    <div id="ejs"  style='margin-right:3%'>
        <h4 style='text-align:center; margin-bottom:8%; margin-top:8%''> detalhes.ejs </h4>
        <textarea rows="10" style='background-color:#52b78800; border: none; color:white'>

            <!DOCTYPE html>
            <html id="htmlD" lang="en" >
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=[device-width], initial-scale=1.0">
                <link rel="icon" type="image/png" href="/img/gamin.png"/>
                <link rel="stylesheet" href="/css/style.css">

                <title> Detalhes </title>
            </head>

            <body>

                <section>
                    <a class="btn" href="/"> Home </a></button> 
                    <h1> P<img id="imgp" src="/img/pokedex.png" width="30" height="30">kédex</h1>
                    <a class="btn" href="/cadastro"> Cadastro </a></button> 
                </section>

                <section id="form">
        
                   <div id="cardd" href="/detalhes/">
            
            
                    <img id="img1" src="<%= pokemon.imagem %>" width="350" height="350" alt="">

                   <div id="formd">
                        <div class="esp">Nome: <%= pokemon.nome %></div>
                        <div class="esp">Tipo: <%= pokemon.tipo %></div>
                        <div class="esp">Descrição: <%= pokemon.descricao %></div>
                        <div class="esp">Altura: <%= pokemon.altura %></div>
                        <div class="esp">Peso: <%= pokemon.peso %></div>
                        <div class="esp">Categoria: <%= pokemon.categoria %></div>
                        <div class="esp">Habilidade: <%= pokemon.habilidade %></div>
                    </div>
                    </div>
                </section>
            </body>
            </html>
    </textarea>
    </div>
        
    <div id="ejs"  style='margin-right:3%'>
        <h4 style='text-align:center; margin-bottom:8%; margin-top:8%'> cadastro.ejs </h4>
        <textarea rows="10" style='background-color:#52b78800; border: none; color:white;'>
    
           <!DOCTYPE html>
            <html id="htmlC" lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" type="image/png" href="./img/gaming (1).png"/>
                <link rel="stylesheet" href="/css/style.css">
 
                <title>Pokédex</title>
           </head>

           <body>

               <section>
                   <a class="btn" href="/"> Home </a></button> 
                   <h1> P<img id="imgp" src="/img/pokedex.png" width="30" height="30">kédex</h1>
                   <a class="btn" href="/cadastro"> Cadastro </a></button> 
                </section>

                <main id="mainC">
                   <h1> Cadastre seu Pokemon <img src="/img/avatar.png" alt="Pikachu Sorrindo" width="50" height="50">
                   </h1>
    
                   <section>

                   <form action="/new" method="POST">
                        <div class="divL">
                            <label for="numero"> Número </label>
                            <input class="input" type="text" name="numero" id="numero" placeholder="Digite o numero" required>
                        </div>
 
                        <div class="divL">
                            <label for="nome"> Nome </label>
                            < input class="input" type="text" name="nome" id="nome" placeholder="Digite o nome" required>
                        </div>

                        <div class="divL">
                            <label for="tipo"> Tipo </label>
                            <input class="input" type="text" name="tipo" id="tipo" placeholder="Digite o tipo" required>
                        </div>

                        <div class="divL">
                            <label for="imagem"> Imagem </label>
                            <input class="input" type="text" name="imagem" id="imagem" placeholder="Digite o link da imagem" required>
                        </div>

                        <div class="divL">
                            <label for="descricao"> Descrição </label>
                            <input class="input" type="text" name="descricao" id="descricao" placeholder="Digite a descrição" required>
                        </div>

                        <div class="divL">
                            <label for="altura"> Altura </label>
                            <input class="input" type="text" name="altura" id="altura" placeholder="Digite a altura" required>
                        </div>

                        <div class="divL">
                            <label for="peso"> Peso </label>
                            <input class="input" type="text" name="peso" id="peso" placeholder="Digite o peso" required>
                        </div>

                       <div class="divL">
                           <label for="categoria"> Categoria </label>
                           <input class="input" type="text" name="categoria" id="categoria" placeholder="Digite a categoria" required>
                        </div>

                        <div class="divL">
                            <label for="habilidade"> Habilidade </label>
                            <input class="input" type="text" name="habilidade" id="habilidade" placeholder="Digite a habilidade" required>
                     
                            <button type="submit" id="btn1"> Cadastrar </button>
                
                        </div>
                    </form>
                </section>
                </main>   
            </body>
            </html>

    </textarea>
    </div>

    <div id="ejs"  style='margin-right:3%'>
        <h4 style='text-align:center; margin-bottom:8%; margin-top:8%'> index.ejs </h4>
        <textarea rows="10" style='background-color:#52b78800; border: none; color:white'>

           <!DOCTYPE html>
           <html id="htmlI" lang="en">
           <head>
               <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <link rel="stylesheet" href="/css/style.css">
               <link rel="icon" type="image/png" href="./img/gaming.png"/>

               <title> Pokédex </title>

            </head>
            <body>

                <section>
                    <a class="btn" href="/index"> Home </a></button> 
                    <h1> P<img id="imgp" src="/img/pokedex.png" width="30" height="30">kédex</h1>
                    <a class="btn" href="/cadastro"> Cadastro </a></button> 
                </section>

                <% if(msg != "") {  %>
                    <section id="msg">
                        <p id="msgp"><%= msg %> <span id="close">&times;</span> </p>
                    </section>
                <% }  %>

                <article id="art" >
                    <ul id="ponto"> 
                        <% pokedex.forEach((item, index) => { %>
                            <a id="card" href="/detalhes/<%= index %>">
                                <div id="cartao">   
                                    <div class="text" id="text1"> <%= item.nome %> </div>
                                    <div class="text" id="text2"> <%= item.tipo %> </div>
                                </div>        
                            </a>
                        <% }) %>
                    </ul>
                </article> 

                <script src="./js/script.js"></script>

            </body>
            </html

    </textarea>
    </div>

    </section>`;

    btnVoltarP.style.display = "flex";

    btnPokedex.style.display = "none";
});


btnVoltarP.addEventListener("click", function(){
    divPokedex.innerHTML = `<div id="newDivP" syle='text-align: center';>
        <p style='word-wrap:break-word; padding-left: 30%; padding-right: 30%';> O objetivo do projeto é criar um pokemon e poder ver as informaçoes dele. </p>
        <p style='word-wrap:break-word';> Foi usado: JS, HTML e CSS </p>
    </div>`

    btnVoltarP.style.display = "none";
    btnPokedex.style.display = "flex";
})
const mostrarPanel = (num_elemento,altura) => {
    let lista_clases = document.getElementsByClassName("card")[num_elemento].classList;
    if(window.scrollY>altura){
      lista_clases.add("texto-aparecer");
      lista_clases.remove("texto-desaparecer");
    }else{
      lista_clases.remove("texto-aparecer");
      lista_clases.add("texto-desaparecer");
    }

    if(window.scrollY>altura+500){
      lista_clases.remove("texto-aparecer");
      lista_clases.add("texto-desaparecer");
    }else{
      lista_clases.add("texto-aparecer");
      lista_clases.remove("texto-desaparecer");
    }
  }
  window.onscroll = () => {
    mostrarPanel(0,500);
    mostrarPanel(1,500);
    mostrarPanel(2,1200);
    mostrarPanel(3,1200);
  };
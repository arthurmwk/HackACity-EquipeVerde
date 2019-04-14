function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i;
    //text filter
    input = document.getElementById("myFilter");

    //bairro = document.getElementById("filterBairro").options[document.getElementById("filterBairro").selectedIndex].value;
    //precoAluguel = document.getElementById("filterPrecoAluguel").options[document.getElementById("filterPrecoAluguel").selectedIndex].value;
    //precoCondominio = document.getElementById("filterPrecoCondominio").options[document.getElementById("filterPrecoCondominio").selectedIndex].value;
    //animais = document.getElementById("filterAnimais").options[document.getElementById("filterAnimais").selectedIndex].value;
    
    
    
    
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if ((title.innerText.toUpperCase().indexOf(filter) > -1)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function filterByCheckbox(){
    proximidadeHospital = document.getElementById("filterProxHospital").value.toUpperCase();
    proximidadePraca = document.getElementById("filterProxPraca").value.toUpperCase();
    proximidadeCentro = document.getElementById("filterProxCentro").value.toUpperCase();
    proximidadeEscola = document.getElementById("filterProxEscola").value.toUpperCase();
    proximidadeFarmacia = document.getElementById("filterProxFarmacia").value.toUpperCase();

    return true;
}

function filterByCheckbox(){
    //select filters
    bairro = document.getElementById("filterBairro").value.toUpperCase();
    precoAluguel = document.getElementById("filterPrecoAluguel").value.toUpperCase();
    precoCondominio = document.getElementById("filterPrecoCondominio").value.toUpperCase();
    animais = document.getElementById("filterAnimais").value.toUpperCase();

    return true;
}

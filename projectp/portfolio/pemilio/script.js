var setScroll = 0;

function myFunction() {
    setScroll = 0;
    document.getElementById("cuadraoterminal").innerHTML =  `<div class="BordeTerminal">
                                                                <h6 class="TituloTerminal">Terminal</h6>
                                                            </div>
                                                            <div class="CuadraoTerminal">
                                                                <p class="UsuarioTerminal">emilio@emilio-web: ~/ </p>
                                                                <br>
                                                                <p class="UsuarioTerminal2">Usuario: EMILIO GOMEZ NEF </p>
                                                                <br>
                                                                <p class="UsuarioTerminal2">Edad: 19 </p>
                                                                <br>
                                                                <p class="UsuarioTerminal2">Estudios: Ingenieria Informatica UCO</p>
                                                                <br>
                                                                <p class="UsuarioTerminal2">Quieres saber mas?(Presiona Enter)</p>
                                                                <p class="GuionTerminal">_</p>
                                                                <p class="Editable" contenteditable="true"></p>
                                                            </div>`

}


document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13 && setScroll == 0) {
        document.getElementById("scroll1").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
});

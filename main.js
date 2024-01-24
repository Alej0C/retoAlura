function encriptar() {
    const inputText = document.getElementById("inputText").value.toLowerCase();

    if (contieneCaracteresEspeciales(inputText)) {
        alert(
            "El texto no debe contener caracteres especiales. Por favor, ingresa solo letras minúsculas y espacios."
        );
        return;
    }

    const result = aplicarClave(inputText);
    document.getElementById("outputText").value = result;
}

function desencriptar() {
    const inputText = document.getElementById("inputText").value.toLowerCase();

    if (contieneCaracteresEspeciales(inputText)) {
        alert(
            "El texto no debe contener caracteres especiales. Por favor, ingresa solo letras minúsculas y espacios."
        );
        return;
    }

    const result = desAplicarClave(inputText);
    document.getElementById("outputText").value = result;
}

function contieneCaracteresEspeciales(texto) {
    // Verificar si el texto contiene caracteres especiales
    return /[^a-z ]/.test(texto);
}

function copiarTexto() {
    if (navigator.clipboard) {
        // Se admite la API del portapapeles
        navigator.clipboard
            .writeText(outputText.value)
            .then(() => {
                alert("Texto copiado al portapapeles: " + outputText.value);
            })
            .catch((err) => {
                console.error("No se pudo copiar al portapapeles:", err);
            });
    } else {
        // Proporcionar un método alternativo para navegadores sin soporte API del Portapapeles
        fallbackCopyMethod();
    }
}

function aplicarClave(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desAplicarClave(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.getElementById("calcular").addEventListener("click", function () {
    let m0 = parseFloat(document.getElementById("massaInicial").value);
    let mf = parseFloat(document.getElementById("massaFinal").value);
    let ve = parseFloat(document.getElementById("exaustao").value);

    if (m0 > 0 && mf > 0 && ve > 0 && m0 > mf) {
        let deltaV = ve * Math.log(m0 / mf);
        document.getElementById("resultado").innerText = `Δv: ${deltaV.toFixed(2)} m/s`;
    } else {
        document.getElementById("resultado").innerText = "Verifique os valores inseridos.";
    }
});

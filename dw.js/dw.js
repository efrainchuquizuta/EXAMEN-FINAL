document.getElementById("calculate-btn").addEventListener("click", () => {
    const a = parseFloat(document.getElementById("side-a").value);
    const b = parseFloat(document.getElementById("side-b").value);
    const c = parseFloat(document.getElementById("side-c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        alert("Por favor, ingrese valores válidos para los lados.");
        return;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        alert("Los lados ingresados no forman un triángulo.");
        return;
    }

    const perimeter = a + b + c;
    const s = perimeter / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    const angleA = toDegrees(Math.acos((b**2 + c**2 - a**2) / (2 * b * c)));
    const angleB = toDegrees(Math.acos((a**2 + c**2 - b**2) / (2 * a * c)));
    const angleC = 180 - angleA - angleB;

    const medianA = medianLength(b, c, a);
    const medianB = medianLength(a, c, b);
    const medianC = medianLength(a, b, c);

    const bisectorA = bisectorLength(a, b, c);
    const bisectorB = bisectorLength(b, a, c);
    const bisectorC = bisectorLength(c, a, b);

    const heightA = (2 * area) / a;
    const heightB = (2 * area) / b;
    const heightC = (2 * area) / c;

    document.getElementById("angles-result").textContent = `
        A: ${angleA.toFixed(2)}°, B: ${angleB.toFixed(2)}°, C: ${angleC.toFixed(2)}°`;
    document.getElementById("medians-result").textContent = `
        m_a: ${medianA.toFixed(2)}, m_b: ${medianB.toFixed(2)}, m_c: ${medianC.toFixed(2)}`;
    document.getElementById("bisectors-result").textContent = `
        b_a: ${bisectorA.toFixed(2)}, b_b: ${bisectorB.toFixed(2)}, b_c: ${bisectorC.toFixed(2)}`;
    document.getElementById("heights-result").textContent = `
        h_a: ${heightA.toFixed(2)}, h_b: ${heightB.toFixed(2)}, h_c: ${heightC.toFixed(2)}`;
    document.getElementById("perimeter-area-result").textContent = `
        Perímetro: ${perimeter.toFixed(2)}, Área: ${area.toFixed(2)}`;
});

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function medianLength(side1, side2, opposite) {
    return 0.5 * Math.sqrt(2 * (side1**2 + side2**2) - opposite**2);
}

function bisectorLength(a, b, c) {
    return (2 / (a + b)) * Math.sqrt(a * b * ((a + b)**2 - c**2) / 4);
}

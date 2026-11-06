contenidoEntrada = `
<section>
    <h2>Factorización I</h2>

    <h3>¿Qué es factorizar?</h3>
    <p>Factorizar es deshacer una multiplicación: te dan el resultado y tú encuentras los factores que lo producen. Ya lo haces con números: 60 = 2² · 3 · 5. Ahora lo haremos con polinomios.</p>
    <p>Multiplicar (ida) y factorizar (regreso) son el mismo camino en sentidos contrarios:</p>
    <p>4x(3x² − 2x + 1) → 12x³ − 8x² + 4x, y de regreso: 12x³ − 8x² + 4x → 4x(3x² − 2x + 1)</p>
    <p>(x + 5)² → x² + 10x + 25, y de regreso: x² + 10x + 25 → (x + 5)²</p>
    <p>(x + 7)(x − 7) → x² − 49, y de regreso: x² − 49 → (x + 7)(x − 7)</p>
    <p>Para comprobar una factorización, multiplica de regreso. Si llegas al polinomio original, está bien.</p>

    <h3>2.1 Término común</h3>
    <p>Busca lo que todos los términos tienen en común: el MCD de los coeficientes y cada literal que aparece en todos, con su menor exponente. Divide cada término entre ese factor y escribe: factor común (lo que quedó). Es la propiedad distributiva al revés.</p>
    <p>Ya lo haces cuando programas: iva = precio * 0.16 + envio * 0.16 + seguro * 0.16 se convierte en iva = (precio + envio + seguro) * 0.16. Eso es factorizar: 0.16a + 0.16b + 0.16c = 0.16(a + b + c).</p>
    <p>Ejemplo — Término común: factoriza 18m³n² − 12m²n³ + 24m²n</p>
    <p>1. MCD de los coeficientes: 18, 12 y 24 → 6</p>
    <p>2. Literales en todos los términos: m (menor exponente 2) y n (menor exponente 1) → m²n</p>
    <p>3. Factor común: 6m²n</p>
    <p>4. Divide cada término: 18m³n² ÷ 6m²n = 3mn    12m²n³ ÷ 6m²n = 2n²    24m²n ÷ 6m²n = 4</p>
    <p>Resultado: 6m²n(3mn − 2n² + 4)</p>
    <p>Comprobación: 6m²n(3mn − 2n² + 4) = 18m³n² − 12m²n³ + 24m²n ✓</p>
    <p>Cuidado con el 1: cuando un término es igual al factor común, deja un 1, no un cero.</p>

    <h3>Factor común binomio y agrupación</h3>
    <p>El factor común no tiene que ser un monomio: si todos los términos comparten el mismo paréntesis, ese paréntesis es el factor común. Cuando no hay factor común en todos los términos, agrupa de dos en dos.</p>
    <p>Ejemplo — Agrupación: factoriza mx − my + 4x − 4y</p>
    <p>1. Agrupa: (mx − my) + (4x − 4y)</p>
    <p>2. Factor común en cada grupo: m(x − y) + 4(x − y)</p>
    <p>3. Factor común binomio: (x − y)</p>
    <p>Resultado: (x − y)(m + 4)</p>
    <p>Comprobación: (x − y)(m + 4) = mx + 4x − my − 4y = mx − my + 4x − 4y ✓</p>

    <h3>2.2 Trinomio cuadrado perfecto</h3>
    <p>Un trinomio es cuadrado perfecto cuando el primer y el tercer término tienen raíz cuadrada exacta y el término de en medio es el doble del producto de esas raíces. Se factoriza como (raíz del primero ± raíz del tercero)², con el signo del término de en medio. Es el binomio al cuadrado (1.1) de regreso.</p>
    <p>Ejemplo — Trinomio cuadrado perfecto: factoriza 25x² − 20x + 4</p>
    <p>1. Raíz del primero: √25x² = 5x</p>
    <p>2. Raíz del tercero: √4 = 2</p>
    <p>3. Verifica el doble producto: 2(5x)(2) = 20x ✓ coincide con el de en medio</p>
    <p>4. Signo del de en medio: −</p>
    <p>Resultado: (5x − 2)²</p>
    <p>Comprobación con 1.1: (5x − 2)² = 25x² − 20x + 4 ✓</p>
    <p>¡Cuidado! No todo trinomio es cuadrado perfecto: en x² + 6x + 16 las raíces son x y 4, pero el doble producto 2(x)(4) = 8x no coincide con 6x. Siempre verifica el paso 3.</p>

    <h3>2.3 Diferencia de cuadrados</h3>
    <p>Si tienes dos términos, separados por una resta, y los dos tienen raíz cuadrada exacta, factoriza como (raíz del primero + raíz del segundo)(raíz del primero − raíz del segundo). Son los binomios conjugados (1.4) de regreso.</p>
    <p>Ejemplo — Diferencia de cuadrados: factoriza 5x⁴ − 80</p>
    <p>1. Factor común primero: 5 → 5(x⁴ − 16)</p>
    <p>2. Raíces: √x⁴ = x²    √16 = 4 → 5(x² + 4)(x² − 4)</p>
    <p>3. ¿Algún factor se puede factorizar otra vez? x² − 4 también es diferencia de cuadrados → (x + 2)(x − 2)</p>
    <p>4. x² + 4 es una suma de cuadrados, no una diferencia → con números reales se queda así</p>
    <p>Resultado: 5(x² + 4)(x + 2)(x − 2)</p>
    <p>Comprobación con 1.4: (x + 2)(x − 2) = x² − 4, luego (x² + 4)(x² − 4) = x⁴ − 16, y 5(x⁴ − 16) = 5x⁴ − 80 ✓</p>
    <p>Bonus — cálculo mental: 53² − 47² = (53 + 47)(53 − 47) = (100)(6) = 600, sin elevar ningún número al cuadrado.</p>

    <h3>Estrategia — ¿por dónde empiezo?</h3>
    <p>1. ¿Hay factor común? Sácalo siempre primero.</p>
    <p>2. ¿Cuántos términos quedaron? Dos términos → ¿diferencia de cuadrados? Tres términos → ¿trinomio cuadrado perfecto? Cuatro términos → agrupación.</p>
    <p>3. ¿Algún factor se puede factorizar otra vez? Repite.</p>
    <p>Ejemplo: 3x³ − 12x → factor común: 3x(x² − 4) → diferencia de cuadrados: 3x(x + 2)(x − 2)</p>

    <h3>Resumen — Factorización I</h3>
    <p>Término común: todos los términos comparten algo → ab + ac = a(b + c). Es el regreso de la distributiva.</p>
    <p>Trinomio cuadrado perfecto: 3 términos, extremos con raíz exacta, de en medio = doble producto → a² ± 2ab + b² = (a ± b)². Es el regreso del binomio al cuadrado (1.1).</p>
    <p>Diferencia de cuadrados: 2 términos, resta, ambos con raíz exacta → a² − b² = (a + b)(a − b). Es el regreso de los binomios conjugados (1.4).</p>
    <p>Para comprobar, multiplica de regreso: los productos notables de la Semana 6 son tu herramienta de verificación.</p>
</section>`;

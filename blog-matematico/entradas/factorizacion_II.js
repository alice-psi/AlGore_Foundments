contenidoEntrada = `
<section>
    <h2>Factorización II</h2>

    <h3>Repaso — ¿dónde nos quedamos?</h3>
    <p>En Factorización I vimos tres casos, cada uno el regreso de una multiplicación: término común (distributiva), trinomio cuadrado perfecto (binomio al cuadrado, 1.1) y diferencia de cuadrados (binomios conjugados, 1.4).</p>
    <p>Esta semana completamos la estrategia: dos términos que no son diferencia de cuadrados → ¿son cubos? Tres términos que no son cuadrado perfecto → trinomios x² + bx + c y ax² + bx + c.</p>

    <h3>2.4 Suma y diferencia de cubos</h3>
    <p>Si tienes dos términos y los dos tienen raíz cúbica exacta, factoriza en un binomio (las raíces) por un trinomio (raíz del primero al cuadrado, producto de las raíces, raíz del segundo al cuadrado). Los signos siguen la regla MOS: Mismo (el binomio lleva el mismo signo que el original), Opuesto (el término de en medio del trinomio lleva el signo opuesto) y Siempre positivo (el último término del trinomio).</p>
    <p>Cubos que conviene reconocer: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. En las literales, la raíz cúbica divide el exponente entre 3: ∛x³ = x, ∛x⁶ = x².</p>
    <p>Ejemplo — Suma de cubos: factoriza 64x³ + 27y³</p>
    <p>1. Raíces cúbicas: ∛64x³ = 4x    ∛27y³ = 3y</p>
    <p>2. Binomio (Mismo signo): (4x + 3y)</p>
    <p>3. Trinomio: primero al cuadrado (4x)² = 16x²; producto de las raíces, signo Opuesto: − (4x)(3y) = − 12xy; segundo al cuadrado, Siempre positivo: + (3y)² = + 9y²</p>
    <p>Resultado: (4x + 3y)(16x² − 12xy + 9y²)</p>
    <p>Comprobación: al multiplicar, los términos de en medio se cancelan (−48x²y + 48x²y y 36xy² − 36xy²) y queda 64x³ + 27y³ ✓</p>
    <p>Ejemplo — Diferencia de cubos: factoriza 125a³ − 8</p>
    <p>1. Raíces cúbicas: ∛125a³ = 5a    ∛8 = 2</p>
    <p>2. Binomio (Mismo signo): (5a − 2)</p>
    <p>3. Trinomio: (5a)² = 25a²; Opuesto: + (5a)(2) = + 10a; Siempre positivo: + 2² = + 4</p>
    <p>Resultado: (5a − 2)(25a² + 10a + 4)</p>
    <p>Comprobación: 125a³ + 50a² + 20a − 50a² − 20a − 8 = 125a³ − 8 ✓</p>
    <p>¡Cuidado! x³ + 8 no es (x + 2)³. La suma de cubos tiene dos términos; el binomio al cubo (x + 2)³ = x³ + 6x² + 12x + 8 tiene cuatro. Es el mismo error que (a + b)² ≠ a² + b². Además, el trinomio que sale de los cubos no se vuelve a factorizar.</p>

    <h3>2.5 Trinomios de la forma x² + bx + c</h3>
    <p>Busca dos números que multiplicados den c y sumados den b. Si esos números son m y n, el trinomio se factoriza como (x + m)(x + n). Es el binomio con término común (1.3) de regreso: antes sumabas y multiplicabas los no comunes, ahora los buscas.</p>
    <p>Pista de signos: si c es positivo, los dos números tienen el mismo signo (el de b); si c es negativo, tienen signos contrarios y el mayor lleva el signo de b.</p>
    <p>Ejemplo — x² + bx + c: factoriza x² − 3x − 40</p>
    <p>1. Pista de signos: c = −40 → signos contrarios, el mayor negativo (como b)</p>
    <p>2. Pares de 40 y su diferencia: 1 · 40 → 39    2 · 20 → 18    4 · 10 → 6    5 · 8 → 3 ✓</p>
    <p>3. Los números son +5 y −8: producto −40 ✓, suma −3 ✓</p>
    <p>Resultado: (x + 5)(x − 8)</p>
    <p>Comprobación con 1.3: x² + (5 − 8)x + (5)(−8) = x² − 3x − 40 ✓</p>

    <h3>2.6 Trinomios de la forma ax² + bx + c — Aspa simple</h3>
    <p>Descompón ax² en dos factores (columna izquierda) y c en dos factores (columna derecha). Multiplica en cruz y suma: si da bx, lee los factores por renglón; si no, prueba otra combinación.</p>
    <p>Ejemplo — Aspa simple: factoriza 10x² + 13x + 4 (aquí hay que probar)</p>
    <p>1. Izquierda 10x y x, derecha +1 y +4: en cruz 10x · 4 + x · 1 = 41x ✗</p>
    <p>2. Izquierda 10x y x, derecha +4 y +1: en cruz 10x · 1 + x · 4 = 14x ✗</p>
    <p>3. Izquierda 5x y 2x, derecha +1 y +4: en cruz 5x · 4 + 2x · 1 = 22x ✗</p>
    <p>4. Izquierda 5x y 2x, derecha +4 y +1: en cruz 5x · 1 + 2x · 4 = 13x ✓</p>
    <p>5. Por renglón: (5x + 4) y (2x + 1)</p>
    <p>Resultado: (5x + 4)(2x + 1)</p>
    <p>Comprobación con la tabla del Tema 2: (5x + 4)(2x + 1) = 10x² + 5x + 8x + 4 = 10x² + 13x + 4 ✓</p>
    <p>Antes del aspa — ¿hay factor común? Factoriza 6x² − 10x − 4: factor común 2 → 2(3x² − 5x − 2). Aspa simple en lo que quedó: izquierda 3x y x, derecha +1 y −2, en cruz 3x · (−2) + x · (+1) = −5x ✓ → (3x + 1)(x − 2).</p>
    <p>Resultado: 2(3x + 1)(x − 2)</p>
    <p>Bonus: el aspa también funciona con x² + bx + c, porque la columna izquierda siempre es x y x. Por eso 2.5 es un caso particular de 2.6.</p>

    <h3>Estrategia completa — Factorización</h3>
    <p>1. ¿Hay factor común? Sácalo siempre primero.</p>
    <p>2. ¿Cuántos términos quedaron? Dos términos: ¿resta de dos cuadrados? → diferencia de cuadrados (2.3); ¿dos cubos? → suma o diferencia de cubos (2.4).</p>
    <p>Tres términos: ¿extremos con raíz exacta y de en medio igual al doble producto? → trinomio cuadrado perfecto (2.2); ¿empieza con x²? → x² + bx + c (2.5); ¿empieza con ax²? → aspa simple (2.6). Cuatro términos: ¿se agrupan de dos en dos? → agrupación (2.1).</p>
    <p>3. ¿Algún factor se puede factorizar otra vez? Repite.</p>

    <h3>Resumen — Factorización II</h3>
    <p>Suma de cubos: 2 términos, suma, raíz cúbica exacta → a³ + b³ = (a + b)(a² − ab + b²).</p>
    <p>Diferencia de cubos: 2 términos, resta, raíz cúbica exacta → a³ − b³ = (a − b)(a² + ab + b²).</p>
    <p>x² + bx + c: 3 términos, coeficiente de x² igual a 1 → dos números con producto c y suma b.</p>
    <p>ax² + bx + c: 3 términos, coeficiente de x² distinto de 1 → aspa simple: la cruz debe sumar bx.</p>
</section>`;

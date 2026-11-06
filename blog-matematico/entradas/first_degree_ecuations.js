contenidoEntrada = `
<section>
    <h2>Ecuaciones de Primer Grado</h2>

    <h3>¿Qué es una ecuación?</h3>
    <p>Una ecuación es una igualdad con un valor desconocido (la incógnita). Resolverla es encontrar el valor que hace que la igualdad sea verdadera.</p>
    <p>Es de primer grado (o lineal) porque la incógnita aparece con exponente 1: 2x + 3 = 11 sí, x² + 3 = 11 no.</p>
    <p>En programación ya conoces la diferencia: x = 4 es una asignación ("guarda 4 en x"), mientras que 2*x + 3 == 11 es una comparación que da True. Una ecuación es un ==: tu trabajo es encontrar el x que lo hace True.</p>

    <h3>La regla de oro — la balanza</h3>
    <p>Una ecuación es una balanza en equilibrio: lo que hay a la izquierda pesa lo mismo que lo de la derecha. Lo que hagas de un lado, hazlo del otro: si sumas, restas, multiplicas o divides en ambos lados por lo mismo, la balanza sigue en equilibrio.</p>
    <p>El atajo "pasa del otro lado" es esa misma regla: un término que está sumando pasa restando, uno que resta pasa sumando, uno que multiplica pasa dividiendo y uno que divide pasa multiplicando. Si alguna vez dudas, regresa a "lo mismo en ambos lados".</p>

    <h3>3.1 Ecuaciones enteras</h3>
    <p>Agrupa los términos con x de un lado y los números del otro, reduce términos semejantes y divide entre el coeficiente de x. Al final, comprueba sustituyendo en la ecuación original.</p>
    <p>Ejemplo — Ecuación entera: resuelve 4x − 9 = 2x + 7</p>
    <p>1. Agrupa: las x a la izquierda, los números a la derecha → 4x − 2x = 7 + 9</p>
    <p>2. Reduce: 2x = 16</p>
    <p>3. Divide: x = 16 / 2</p>
    <p>Resultado: x = 8</p>
    <p>Comprobación: izquierda 4(8) − 9 = 23    derecha 2(8) + 7 = 23 ✓</p>

    <h3>3.2 Ecuaciones fraccionarias</h3>
    <p>Elimina los denominadores: multiplica cada término de ambos lados por el MCM de los denominadores. Te queda una ecuación entera y la resuelves como en 3.1. Cuidado: multiplica todos los términos, también los que no tienen denominador.</p>
    <p>Ejemplo — Ecuación fraccionaria: resuelve (x + 3)/2 − (x − 1)/3 = 2</p>
    <p>1. MCM de 2 y 3: 6</p>
    <p>2. Multiplica cada término por 6, con el numerador entre paréntesis: 3(x + 3) − 2(x − 1) = 12</p>
    <p>3. Elimina paréntesis — el −2 multiplica a los dos términos: 3x + 9 − 2x + 2 = 12</p>
    <p>4. Reduce y despeja: x + 11 = 12 → x = 1</p>
    <p>Resultado: x = 1</p>
    <p>Comprobación: (1 + 3)/2 − (1 − 1)/3 = 2 − 0 = 2 ✓</p>

    <h3>3.3 Ecuaciones con signos de agrupación</h3>
    <p>Elimina los signos de agrupación — ( ), [ ], { } — de adentro hacia afuera. Después resuelve como ecuación entera. Delante del paréntesis, un número multiplica a cada término; un signo + deja los signos igual; un signo − cambia todos los signos.</p>
    <p>Ejemplo — Signos de agrupación: resuelve 3[2x − (x + 4)] = x + 6</p>
    <p>1. El paréntesis de adentro — hay un − delante, todos los signos cambian: 2x − (x + 4) = 2x − x − 4 = x − 4 → 3[x − 4] = x + 6</p>
    <p>2. Elimina el corchete: 3x − 12 = x + 6</p>
    <p>3. Agrupa: 3x − x = 6 + 12 → 2x = 18</p>
    <p>4. Divide: x = 18 / 2</p>
    <p>Resultado: x = 9</p>
    <p>Comprobación: izquierda 3[2(9) − (9 + 4)] = 3[18 − 13] = 15    derecha 9 + 6 = 15 ✓</p>

    <h3>Procedimiento general — cualquier ecuación de primer grado</h3>
    <p>1. Elimina signos de agrupación — de adentro hacia afuera (3.3)</p>
    <p>2. Elimina denominadores — multiplica todo por el MCM (3.2)</p>
    <p>3. Agrupa — términos con x de un lado, números del otro (3.1)</p>
    <p>4. Reduce términos semejantes</p>
    <p>5. Despeja — divide entre el coeficiente de x</p>
    <p>6. Comprueba — sustituye en la ecuación original</p>
    <p>Si un paso no aplica (no hay paréntesis o no hay fracciones), sáltalo.</p>

    <h3>3.4 Ecuaciones con literales</h3>
    <p>A veces los coeficientes son letras en lugar de números. Se resuelven igual: la diferencia es que el resultado queda en términos de esas letras. Si x aparece en varios términos, factoriza x (término común, 2.1) y divide.</p>
    <p>Ejemplo — Con literales: despeja x de ax + b = cx + d</p>
    <p>1. Agrupa los términos con x: ax − cx = d − b</p>
    <p>2. Factoriza x — término común (2.1): x(a − c) = d − b</p>
    <p>3. Divide entre (a − c): x = (d − b) / (a − c)</p>
    <p>Resultado: x = (d − b) / (a − c), siempre que a ≠ c</p>
    <p>¿Por qué a ≠ c? Porque si a = c, el denominador es 0 y no se puede dividir entre cero.</p>
    <p>Comprobación con números: si a = 3, b = 2, c = 1, d = 8 → 3x + 2 = x + 8 → x = 3, y la fórmula da (8 − 2)/(3 − 1) = 3 ✓</p>
    <p>Ejemplo — Despejar una fórmula: despeja h de A = (b · h)/2</p>
    <p>1. Elimina el denominador — multiplica todo por 2: 2A = b · h</p>
    <p>2. Divide entre b: h = 2A / b</p>
    <p>Resultado: h = 2A / b, siempre que b ≠ 0</p>
    <p>Comprobación con números: si A = 12 y b = 6 → h = 24/6 = 4, y el área es (6 · 4)/2 = 12 ✓</p>

    <h3>3.5 Planteamiento y validación</h3>
    <p>Plantear es traducir un problema en palabras a una ecuación. Validar es comprobar que la solución cumple el enunciado y tiene sentido, no solo la ecuación. Los pasos son: lee y define la incógnita con palabras, traduce al lenguaje algebraico, plantea la ecuación, resuelve con el procedimiento general y valida contra el enunciado.</p>
    <p>Del español al álgebra: un número → x; el doble de un número → 2x; la mitad de un número → x/2; un número aumentado en 5 → x + 5; un número disminuido en 3 → x − 3; es, equivale a, da como resultado → =.</p>
    <p>Ejemplo — Planteamiento: "Un servicio de hosting cobra una cuota fija de 150 pesos al mes más 40 pesos por cada hora de soporte. Si el recibo del mes fue de 870 pesos, ¿cuántas horas de soporte se usaron?"</p>
    <p>1. Incógnita: x = número de horas de soporte</p>
    <p>2. Traduce: cuota fija → 150; 40 pesos por cada hora → 40x; el recibo fue de 870 → = 870</p>
    <p>3. Ecuación: 150 + 40x = 870</p>
    <p>4. Resuelve: 40x = 720 → x = 18</p>
    <p>5. Valida: 150 + 40(18) = 150 + 720 = 870 ✓ y 18 horas es un número entero y positivo, así que tiene sentido ✓</p>
    <p>Resultado: se usaron 18 horas de soporte</p>
    <p>Validar es escribir un test: con x = 18, assert 150 + 40*x == 870 pasa en silencio. Si pasa, la solución cumple la ecuación, y tú todavía debes revisar que tenga sentido (sin personas, objetos o días negativos o fraccionarios).</p>

    <h3>Resumen — Ecuaciones de primer grado</h3>
    <p>Enteras: agrupa, reduce, despeja. Ejemplo: 4x − 9 = 2x + 7 → x = 8.</p>
    <p>Fraccionarias: multiplica todo por el MCM. Ejemplo: (x + 3)/2 − (x − 1)/3 = 2 → x = 1.</p>
    <p>Con agrupación: de adentro hacia afuera; un − cambia todos los signos. Ejemplo: 3[2x − (x + 4)] = x + 6 → x = 9.</p>
    <p>Con literales: factoriza x y divide, con cuidado de no dividir entre cero. Ejemplo: ax + b = cx + d → x = (d − b)/(a − c).</p>
    <p>Planteamiento: traduce, resuelve y valida contra el enunciado. Ejemplo: 150 + 40x = 870 → 18 horas.</p>
    <p>Siempre comprueba sustituyendo en la ecuación original, y en los problemas, contra el enunciado.</p>
</section>`;

<template>
    <main>
        <h1>Лекция 0</h1>
        <ul>
            <li><a href="#creating-code-with-python">Написание кода на Python</a></li>
            <li><a href="#functions">Функции</a></li>
            <li><a href="#bugs">Баги</a></li>
            <li><a href="#improving-your-first-python-program">Улучшение вашей первой программы на Python</a></li>
            <ul>
                <li><a href="#variables">Переменные</a></li>
                <li><a href="#comments">Комментарии</a></li>
                <li><a href="#pseudocode">Псевдокод</a></li>
            </ul>
            <li><a href="№further-improving-your-first-python-program">Дальнейшее улучшение вашей первой программы на Python</a></li>
            <li><a href="#strings-and-paremeters">Строки и параметры</a></li>
            <ul><li><a href="#a-small-problem-with-quotation-marks">Небольшая проблема с кавычками</a></li></ul>
            <li><a href="#formatting-strings">Форматирование строк</a></li>
            <li><a href="#more-on-strings">Подробнее о строках</a></li>
            <li><a href="#integers-or-int">Целые числа или int</a></li>
            <li><a href="#readability-wins">Удобочитаемость выигрывает</a></li>
            <li><a href="#float-basics">Основы float</a></li>
            <li><a href="#more-on-floats">Подробнее о float</a></li>
            <li><a href="#def">Def</a></li>
            <li><a href="#returning-values">Возвращаемые значения</a></li>
            <li><a href="#summing-up">Подводя итог</a></li>
        </ul>
        <h2 id="creating-code-with-python">Написание кода на Python</h2>
        <ul>
            <li>VS Code — это особый тип текстового редактора, который называется компилятором. Вверху вы увидите текстовый редактор, а внизу терминал, где вы можете выполнять команды.</li>
            <li>В терминале вы можете выполнить команду <code class="code">code hello.py</code> чтобы создать файл и начать писать код</li>
            <li>В текстовом редакторе выше вы можете ввести <code class="code">print("hello, world")</code>. Это известная каноническая программа, которую почти все программисты пишут в процессе обучения.</li>
            <li>В окне терминала вы можете выполнять команды. Чтобы запустить программу, вам нужно переместить курсор в нижнюю часть экрана, щелкнуть в окне терминала. Теперь вы можете ввести вторую команду в окне терминала. Рядом со знаком доллара введите <code class="code">python hello.py</code>  и нажмите клавишу Enter на клавиатуре.</li>
            <li>Напомним, что компьютеры понимают только нули и единицы. Поэтому когда вы выполняете команду <code class="code">python hello.py </code> интерпретатор python будет  созданный вами файл <code class="code">hello.py</code> переводить в нули и единицы, понятные компьютеру.</li>
            <li>Результатом работы программы <code class="code">python hello.py</code>, является вывод в терминал строки - <code class="code">hello, world</code>.</li>
            <li>Поздравляю! Вы только что создали свою первую программу.</li>
        </ul>
        <h2 id="functions">Функции</h2>
        <ul>
            <li>Функции — это глаголы или действия, которые компьютер или компьютерный язык уже знают, как выполнять.</li>
            <li>В вашей программе <code class="code">hello.py</code> функция <code class="code">print</code> умеет делать вывод каких либо данных в окно терминала.</li>
            <li>Функция <code class="code">print</code> принимает аргументы. В данном случае <code class="code">"hello, world"</code>  это аргументы, которые принимает функция <code class="code">print</code>.</li>
        </ul>
        <h2 id="bugs">Баги</h2> 
        <ul>
            <li>Ошибки являются естественной частью программирования. Ошибки - это проблемы, которые вы можете решать! Не расстраивайтесь! Это часть процесса становления великим программистом.</li>
            <li>Представим в нашей программе <code class="code">hello.py</code> случайно набранное <code class="code">print("hello, world"</code>  - заметьте, что мы пропустили <code class="code">)</code> требуемый компилятором финал. Если я намеренно допущу эту ошибку, то компилятор выведет ошибку в окно терминала!</li>
            <li>Часто сообщения об ошибках информируют вас о вашей ошибке и дают подсказки о том, как ее исправить. Однако в некоторых случаях компилятор не даст вам ответ в чем ваша ошибка.</li>
        </ul>
        <h2 id="improving-your-first-python-program">Улучшение вашей первой программы на Python</h2>
        <ul>
            <li>Мы можем персонализировать вашу первую программу на Python.</li>
            <li>В нашем текстовом редакторе в <code class="code">hello.py</code> мы можем добавить еще одну функцию. input - это функция, которая принимает подсказку в качестве аргумента. Мы можем отредактировать наш код, как показано ниже: </li>
            <pre class="highlight"><code>input("What's your name? ")
print("hello, world")</code></pre>
            <li>Однако само по себе это редактирование не позволит вашей программе выводить то, что вводит ваш пользователь. Для этого нам нужно будет познакомить вас с переменными</li>
        </ul>
        <h3 id="variables">Переменные</h3>
        <ul>
            <li>Переменная — это просто контейнер для значений в вашей программе.</li>
            <li>В вашей программе вы можете ввести свою собственную переменную, отредактировав ее так:</li>
            <pre class="highlight"><code>name = input("What's your name? ")
print("hello, world")</code></pre>
            <p>Обратите внимание, что этот <code class="code">= </code>знак равенства в середине <code class="code">name = input("What's your name? ")</code> играет особую роль в программировании. Этот знак равенства буквально присваивает то, что справа, тому, что слева. Поэтому возвращаемое значение <code class="code">input("What's your name? ")</code> присваивается <code class="code">name</code>.</p>
            <li>Если вы отредактируете свой код следующим образом, вы заметите ошибку</li>
            <pre class="highlight"><code>name = input("What's your name? ")
print("hello, name")</code></pre>
            <li>Программа вернется <code class="code">hello, name</code> в окно терминала независимо от того, что вводит пользователь.</li>
            <li>Дальнейшее редактирование нашего кода, может выглядить так:</li>
            <pre class="highlight"><code>name = input("What's your name? ")
print("hello,")
print(name)</code></pre>
            <li>Результат в окне терминала будет</li>
            <pre class="highlight"><code>What's your name? David
hello
David</code></pre>
            <li>Мы стали ближе к желаемому результату!</li>
            <li>Вы можете подробнее узнать о <a href="https://docs.python.org/3/library/datatypes.html">типах данных</a> в документации Python</li>
        </ul>
        <h3 id="comments">Комментарии</h3>
        <ul>
            <li>Комментарии — это способ для программистов отслеживать, что они делают в своих программах, и даже информировать других о своих намерениях относительно блока кода. Короче говоря, это заметки для вас и других, которые увидят ваш код!</li>
            <li>Вы можете добавлять комментарии к своей программе, чтобы видеть, что она делает. Вы можете отредактировать свой код следующим образом:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")
print("hello,")
print(name)</code></pre>
            <li>Комментарии также могут служить для вас списком то что еще надо сделать в программе.</li>
        </ul>
        <h3 id="pseudocode">Псевдокод</h3>
        <ul>
            <li>Псевдокод — это важный тип комментариев, который становится особым типом списка то что еще надо сделать, особенно когда вы не понимаете, как выполнить задачу. Например, вы можете отредактировать свой код, подобным образом:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")

# Print hello(Вывести hello)
print("hello,")

# Print the name inputted(Вывести введенное имя)
print(name)</code></pre>
        </ul>
        <h2 id="further-improving-your-first-python-program">Дальнейшее улучшение вашей первой программы на Python</h2>
        <ul>
            <li>Мы можем дополнительно отредактировать наш код следующим образом:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")

# Print hello and the inputted name(Вывести hello и введенное имя)
print("hello, " + name)</code></pre>
            <li>Оказывается, некоторые функции принимают множество аргументов.</li>
            <li>Мы можем использовать запятую <code class="code">,</code> для передачи нескольких аргументов, отредактировав наш код следующим образом:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")

# Print hello and the inputted name(Вывести hello и введенное имя)
print("hello,", name)</code></pre>
        <p>Если бы мы набрали «Дэвид», мы бы получили вывод в терминале <code class="code">hello, David</code>. Ура.</p>
        </ul>
        <h2 id="strings-and-paremeters">Строки и параметры</h2>
        <ul>
            <li>Строка, известная как str в Python, представляет собой последовательность текста.</li>
            <li>Немного вернув наш код обратно к следующему, мы обнаружили визуальный побочный эффект, заключающийся в отображении результата на нескольких строках:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")
print("hello,")
print(name)</code></pre>
            <li>Функции принимают аргументы, влияющие на их поведение. Если мы посмотрим на документацию <a href="https://docs.python.org/3/library/functions.html#print">print</a>, вы заметите, что мы можем многое узнать об аргументах, которые принимает функция печати.</li>
            <li>Глядя на эту документацию, вы узнаете, что функция печати автоматически включает фрагмент кода <code class="code">end='\n'</code>. Этот индекатор <code class="code">\n </code>указывает, что функция печати автоматически создаст разрыв строки при запуске. Функция печати принимает аргумент с именем и по умолчанию создается новая строка.</li>
            <li>Однако технически мы можем предоставить аргумент для end, чтобы новая строка не создавалась!</li>
            <li>Мы можем изменить наш код следующим образом:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")
print("hello,", end="")
print(name)</code></pre>
            <span>Предоставляя <code class="code">end=""</code>, мы перезаписываем значение по умолчанию <code class="code">end</code>, так что оно не создает новую строку после первого оператора печати. Указав имя David, вывод в окне терминала будет <code class="code">hello, David</code>.</span>
            <li>Таким образом, параметры — это аргументы, которые может принимать функция.</li>
            <li>Вы можете узнать больше в документации Python по <code class="code"><a href="https://docs.python.org/3/library/functions.html#print">print</a></code>.</li>
        </ul>
        <h3 id="a-small-problem-with-quotation-marks">Небольшая проблема с кавычками</h3>
        <ul>
            <li>Обратите внимание, как сложно добавить кавычки в строку.</li>
            <li><code class="code">print("hello,"friend"")</code>работать не будет и компилятор выдаст ошибку.</li>
            <li>Как правило, есть два подхода к исправлению этого. Во-первых, вы можете просто изменить кавычки на одинарные кавычки.</li>
            <li>Другим, более часто используемым подходом будет использование кода <code class="code">print("hello, \"friend\"")</code>. Обратная косая черта сообщает компилятору, что следующий символ следует рассматривать как кавычку в строке, чтобы избежать ошибки компилятора.</li>
        </ul>
        <h2 id="formatting-strings">Форматирование строк</h2>
        <ul>
            <li>Вероятно, наиболее элегантным способом использования строк будет следующий:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")
print(f"hello, {name}")</code></pre>
            <span>Обратите внимание на <code class="code">f</code> в <code class="code">print(f"hello, {name}")</code>. <code class="code">f</code>-это специальный индикатор Python для обработки этой строки особым образом, отличным от предыдущих подходов, которые мы проиллюстрировали в этой лекции. Ожидайте, что вы будете использовать этот стиль строк довольно часто в этом курсе.</span>
        </ul>
        <h2 id="more-on-strings">Подробнее о строках</h2>
        <ul>
            <li>Вы не должны ждать, что пользователь будет вести себя, как ожидалось. Следовательно, вам нужно будет убедиться, что ввод вашего пользователя исправлен или проверен.</li>
            <li>Оказывается, в строки встроена возможность удалять пробелы из строки.</li>
            <li>Применяя метод <code class="code">strip</code> к переменной <code class="code">name</code>,как это сделать: <code class="cide">name = name.strip()</code>это удалит все пробелы слева и справа от пользовательского ввода. Вы можете изменить свой код, вот так:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")

# Remove whitespace from the str(Удалить пробелы из строки(str))
name = name.strip()

# Print the output(Распечатать вывод)
print(f"hello, {name}")</code></pre>
            <span>При повторном запуске этой программы, независимо от того, сколько пробелов вы наберете до или после name, она удалит все пробелы.</span>
            <li>Используйте метод <code class="code">title</code>, чтобы перевести в верхний регистр первую букву в имени:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")
# Remove whitespace from the str(Удалить пробелы из строки(str))
name = name.strip()
# Capitalize the first letter of each word(Перевести в верхний регистр первую букву в слове)
name = name.title()
# Print the output(Распечатать вывод)
print(f"hello, {name}")
</code></pre>
            <li>К этому моменту вы, возможно, очень устали от многократного ввода <code class="code">python</code> в окне терминала. Вы можете использовтаь стрелки вверх и вниз на вашей клавиатуре, чтобы увидеть самые последние команды терминала, которые вы вводили.</li>
            <li>Обратите внимание, что вы можете изменить свой код, чтобы сделать его более эффективным:</li>
            <pre class="highlight"><code># Ask the user for their name(Спросить у пользователя его имя)
name = input("What's your name? ")
# Remove whitespace from the str and capitalize the first letter of each word(Удалить пробелы из строки(str) и перевести в верхний регистр первую букву в слове)
name = name.strip().title()
# Print the output(Распечатать вывод)
print(f"hello, {name}")</code></pre>
            <span>Вывод будет тот же, что и в предыдущем коде.</span>
            <li>Мы могли бы пойти еще дальше!</li>
            <pre class="highlight"><code># Ask the user for their name, remove whitespace from the str and capitalize the first letter of each word
name = input("What's your name? ").strip().title()
# Print the output
print(f"hello, {name}")</code></pre>
        <li>Вы можете узнать больше о строках в документации Python <code class="code"><a href="https://docs.python.org/3/library/stdtypes.html#str">str</a></code></li>
        </ul>
        <h2 id="integers-or-int">Целые числа или int</h2>
        <ul>
            <li>В Python целое число называется int.</li>
            <li>В мире математики мы знакомы с операторами +, -, *, / и %. Этот последний оператор % или оператор по модулю может быть вам не очень знаком.</li>
            <li>Вам не нужно использовать окно текстового редактора в компиляторе для запуска кода Python. В своем терминале вы можете написать <code class="code">python</code>.И в окне терминала вы увидите >>>. Затем вы можете запустить живой интерактивный код. Вы можете ввести 1+1, и он запустит этот расчет. Этот режим будет использоваться во время этого курса.</li>
            <li>Снова открыв VS Code, мы можем ввести <code class="code">code calculator.py</code> в терминал. Это создаст новый файл, в котором мы создадим наш собственный калькулятор.</li>
            <li>Во-первых, мы можем объявить несколько переменных.</li>
            <pre class="highlight"><code>x = 1
y = 2
z = x + y
print(z)</code></pre>
            <span>Естественно при запуске <code class="code">python calculator.py</code> мы получаем результат в окне терминала <code class="code">3</code>. Мы можем сделать это более интерактивным, используя функцию <code class="code">input</code>.</span>
            <pre class="highlight"><code>x = input("What's x? ")
y = input("What's y? ")
z = x + y
print(z)</code></pre>
            <li>Запустив эту программу, мы обнаруживаем, что вывод неверен, так как вывод <code class="code">12</code>. В чем может быть причина?</li>
            <li>Ранее мы видели, как знак <code class="code">+</code> объединяет две строки. Поскольку ваш ввод с клавиатуры на вашем компьютере поступает в компилятор в виде текста, он обрабатывается как строка. Поэтому нам нужно преобразовать этот ввод из строки в целое число. Мы можем сделать это следующим образом:</li>
            <pre class="highlight"><code>x = input("What's x? ")
y = input("What's y? ")
z = int(x) + int(y)
print(z)</code></pre>
            <span>Теперь результат правильный. Использование int(x), называется «приведением», когда значение временно изменяется с одного типа переменной (в данном случае строки) на другой (здесь — целое число).</span>
            <li>Мы можем улучшить нашу программу следующим образом:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))
print(x + y)</code></pre>
            <span>Это показывает, что вы можете запускать функции в функциях. Сначала запускается самая внутренняя функция, а затем запускается внешняя. Сначала функция <code class="code">input</code> запускается. Затем функция <code class="code">int</code>.</span>
            <li>Вы можете узнать больше об <code class="code"><a href="https://docs.python.org/3/library/functions.html?highlight=float#int">int</a></code> из документации Python</li>
        </ul>
        <h2 id="readability-wins">Удобочитаемость выигрывает</h2>
        <li>Принимая решение о своем подходе к задачам программирования, помните, что можно привести разумные аргументы в пользу многих подходов к одной и той же проблеме.</li>
        <li>Независимо от того, какой подход вы примете к задаче программирования, помните, что ваш код должен быть читабельным. Вы должны использовать комментарии, чтобы дать себе и другим подсказки о том, что делает ваш код. Кроме того, вы должны создавать код таким образом, чтобы он был удобочитаемым.</li>
        <h2 id="float-basics">Основы float</h2>
        <li>Значение с плавающей запятой — это действительное число, содержащее десятичную точку, например <code class="code">0.52</code>.</li>
        <li>Вы можете изменить свой код чтобы он поддерживал float следующим образом:</li>
        <pre class="highlight"><code>x = float(input("What's x? "))
y = float(input("What's y? "))
print(x + y)</code></pre>
        <li>Это изменение позволяет вашему пользователю вводить <code class="code">1.2</code> и <code class="code">3.4</code> отображать их сумму <code class="code">4.6</code>.</li>
        <li>Однако давайте представим, что вы хотите округлить сумму до ближайшего целого числа. Посмотрев в документации Python на <code class="code">round</code>, вы увидите, что доступны аргументы <code class="code">round(number[n, ndigits])</code>. Эти квадратные скобки указывают на то, что программист может указать что-то необязательное. Следовательно, вы можете округлить цифру до ближайшего целого числа  <code class="code">round(n)</code>. В качестве альтернативы ваш код может выглядить следующим образом:</li>
        <pre class="highlight"><code># Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))
# Create a rounded result
z = round(x + y)
# Print the result
print(z)</code></pre>
        <span>Вывод будет округлен до ближайшего целого числа.</span>
        <li>Что, если бы мы захотели отформатировать вывод длинных чисел? Например, вместо того, чтобы видеть <code class="code">1000</code>, вы можете захотеть увидеть <code class="code">1,000</code>. Вы можете изменить свой код следующим образом:</li>
        <pre class="highlight"><code># Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))
# Create a rounded result
z = round(x + y)
# Print the formatted result
print(f"{z:,}")</code></pre>
        <span>Хотя это довольно загадочно, <code class="code">print(f"{z:,}")</code> создает сценарий, в котором вывод <code class="code">z</code> будет включать запятые, где результат может выглядеть как <code class="code">1,000</code> или <code class="code">2,500</code>.</span>
        <h2 id="more-on-floats">Подробнее о float</h2>
        <li>Как мы можем округлить значения с плавающей запятой? Сначала измените код следующим образом:</li>
        <pre class="highlight"><code># Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z = x / y

# Print the result
print(z)
</code></pre>
        <li>При вводе x, как <code class="code">2</code> и y, как <code class="code">3</code>, результат z будет <code class="code">0.6666666666</code> по-видимому, продолжается до бесконечности, как мы могли бы ожидать.</li>
        <li>Давайте представим, что мы хотим округлить это значение в меньшую сторону, мы могли бы изменить наш код следующим образом:</li>
        <pre class="highlight"><code># Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result and round
z = round(x / y, 2)

# Print the result
print(z)</code></pre>
        <span>Как и следовало ожидать, это округлит результат до ближайших двух знаков после запятой.</span>
        <li>Мы также можем использовать <code class="code">fstring</code> для форматирования вывода следующим образом:</li>
        <pre class="highlight"><code># Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z = x / y

# Print the result
print(f"{z:.2f}")</code></pre>
        <span>Этот загадочный код <code class="code">fstring</code> отображает то же самое, что и наша предыдущая стратегия округления.</span>
        <li>Вы можете узнать больше о <a href="https://docs.python.org/3/library/functions.html?highlight=float#float"><code class="code">float</code></a> в документации Python</li>
        <h2 id="def">Def</h2>
        <li>Было бы неплохо создать свои собственные функции?</li>
        <li>Давайте вернем наш посдедний код <code class="code">hello.py</code>, введя <code class="code">code hello.py</code> в окно терминала. Ваш начальный код должен выглядеть следующим образом:</li>
        <pre class="highlight"><code># Ask the user for their name, remove whitespace from the str and capitalize the first letter of each word
name = input("What's your name? ").strip().title()

# Print the output
print(f"hello, {name}")</code></pre>
        <span>Мы можем улучшить наш код, чтобы создать собственную специальную функцию, которая говорит нам "hello!"</span>
        <li>Сотрите весь код в текстовом редакторе, и давайте начнем с нуля:</li>
        <pre class="highlight"><code>name = input("What's your name? ")
hello()
print(name)</code></pre>
        <span>При попытке запустить этот код ваш компилятор выдаст ошибку. В конце концов, не была создана функция <code class="code">hello</code>.</span>
        <li>Мы можем создать нашу собственную функцию с именем <code class="cd">hello</code> следующим образом:</li>
        <pre class="highlight"><code>def hello():
    print("hello")


name = input("What's your name? ")
hello()
print(name)</code></pre>
        <span>Обратите внимание, что все, что ниже <code class="code">def hello()</code>, имеет отступ. Python — это язык с отступами. Он использует отступ, чтобы понять, что является частью вышеуказанной функции. Поэтому все в функции <code class="code">hello</code> должно быть с отступом. Когда что-то не имеет отступа, оно обрабатывается так, как будто оно не находится внутри функции <code class="code">hello</code>. Запустив <code class="code">python hello.py</code> в окне терминала, вы увидите, что ваш вывод не совсем такой, как вам хотелось бы.</span>
        <li>Мы можем еще улучшить наш код:</li>
        <pre class="highlight"><code># Create our own function
def hello(to):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)</code></pre>
        <span>Здесь, в первых строках, вы создаете свою функцию <code class="code">hello</code>. Однако на этот раз вы сообщаете компилятору, что эта функция принимает единственный параметр: переменную с именем <code class="code">to</code>. Поэтому при вызове <code class="code">hello(name)</code> компьютер передает name в  функцию <code class="code">hello</code> как <code class="code">to</code>. Вот как мы передаем значения в функции. Очень полезно! Запустив <code class="code">python hello.py</code> в окне терминала, вы увидите, что результат намного ближе к нашему идеалу, представленному ранее в этой лекции.</span>
        <li>Мы можем изменить наш код, чтобы добавить значение по умолчанию для <code class="code">hello</code>:</li>
        <pre class="highlight"><code># Create our own function
def hello(to="world"):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()</code></pre>
        <span>Проверьте свой код самостоятельно. Обратите внимание, как первое <code class="code">hello</code> будет вести себя так, как вы ожидаете, а второе hello, которому не передано значение, по умолчанию будет выводить hello, world.</span>
        <li>Нам не обязательно писать нашу функцию в начале нашей программы. Мы можем сдвинуть ее вниз, но нам нужно сообщить компилятору, что у нас есть функция <code class="code">main</code> и отдельная функция <code class="code">hello</code>.</li>
        <pre class="highlight"><code>def main():

# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()


# Create our own function
def hello(to="world"):
print("hello,", to)</code></pre>
        <span>Однако одно это создаст своего рода ошибку. Если мы запустим <code class="code">python hello.py</code>, ничего не произойдет! Причина этого в том, что ничто в этом коде на самом деле не вызывает основную функцию и не оживляет нашу программу.</span>
        <li>Следующая очень маленькая модификация вызовет функцию <code class="cide">main</code> и наша программа начнет работать:</li>
        <pre class="highlight"><code>def main():

# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()


# Create our own function
def hello(to="world"):
print("hello,", to)


main()</code></pre>
        <h2 id="returning-values">Возвращаемые значения</h2>
        <li>Вы можете представить множество сценариев, в которых вы хотите, чтобы функция не только выполняла действие, но и возвращала значение обратно в основную функцию. Например, вместо того, чтобы просто печатать вычисление x + y, вы можете захотеть, чтобы функция возвращала значение этого вычисления обратно в другую часть вашей программы. Эту «возвращаемое значение» значения мы называем return.</li>
        <li>Вернемся к нашему коду в <code class="code">calculator.py</code>, набрав <code class="code">code calculator.py</code>. Сотрите там весь код. Переработайте код следующим образом:</li>
        <pre class="highlight"><code>def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))


def square(n):
    return n * n


main()</code></pre>
        <span><code class="code">x</code> передается в <code class="code">square</code>. Затем вычисление <code class="code">x * x</code> возвращается обратно в функцию main.</span>
        <h2 id="summing-up">Подводя итог</h2>
        <p>Благодаря работе на этой единственной лекции вы узнали способности, которые будете использовать бесчисленное количество раз в своих собственных программах. Вы узнали о…</p>
        <ul>
            <li>Написание кода на Python;</li>
            <li>Функции;</li>
            <li>Баги;</li>
            <li>Переменные;</li>
            <li>Комментарии;</li>
            <li>Псевдокод;</li>
            <li>Строки;</li>
            <li>Параметры;</li>
            <li>Форматирование строк;</li>
            <li>Целые числа;</li>
            <li>Принципы удобочитаемости;</li>
            <li>float;</li>
            <li>Создание собственных функций;</li>
            <li>Возвращаемые значения.</li>
        </ul>
    </main>
</template>



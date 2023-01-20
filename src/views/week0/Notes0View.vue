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
            <pre class="highlight"><code># Ask the user for their name
name = input("What's your name? ")
print("hello,")
print(name)</code></pre>
            <li>Комментарии также могут служить для вас списком то что еще надо сделать в программе.</li>
        </ul>
        <h3 id="pseudocode">Псевдокод</h3>
        <ul>
            <li>Псевдокод — это важный тип комментариев, который становится особым типом списка то что еще надо сделать, особенно когда вы не понимаете, как выполнить задачу. Например, вы можете отредактировать свой код, подобным образом:</li>
            <pre class="highlight"><code># Ask the user for their name
name = input("What's your name? ")

# Print hello
print("hello,")

# Print the name inputted
print(name)</code></pre>
        </ul>
        <h2 id="further-improving-your-first-python-program">Дальнейшее улучшение вашей первой программы на Python</h2>
        <ul>
            <li>Мы можем дополнительно отредактировать наш код следующим образом:</li>
            <pre class="highlight"><code># Ask the user for their name
name = input("What's your name? ")

# Print hello and the inputted name
print("hello, " + name)</code></pre>
            <li>Оказывается, некоторые функции принимают множество аргументов.</li>
            <li>Мы можем использовать запятую <code class="code">,</code> для передачи нескольких аргументов, отредактировав наш код следующим образом:</li>
            <pre class="highlight"><code># Ask the user for their name
name = input("What's your name? ")

# Print hello and the inputted name
print("hello,", name)</code></pre>
        <p>Если бы мы набрали «Дэвид», мы бы получили вывод в терминале <code class="code">hello, David</code>. Ура.</p>
        </ul>
        <h2 id="strings-and-paremeters">Строки и параметры</h2>
        <ul>
            <li>Строка, известная как str в Python, представляет собой последовательность текста.</li>
            <li>Немного вернув наш код обратно к следующему, мы обнаружили визуальный побочный эффект, заключающийся в отображении результата на нескольких строках:</li>
            <pre class="highlight"><code># Ask the user for their name
name = input("What's your name? ")
print("hello,")
print(name)</code></pre>
            <li>Функции принимают аргументы, влияющие на их поведение. Если мы посмотрим на документацию <a href="https://docs.python.org/3/library/functions.html#print">print</a>, вы заметите, что мы можем многое узнать об аргументах, которые принимает функция печати.</li>
            <pre class="highlight"><code></code></pre>
        </ul>
        <h3 id="a-small-problem-with-quotation-marks">Небольшая проблема с кавычками</h3>
        <h2 id="formatting-strings">Форматирование строк</h2>
        <ul>
            <pre class="highlight"><code></code></pre>
        </ul>
        <h2 id="more-on-strings">Подробнее о строках</h2>
        <ul>
            <pre class="highlight"><code></code></pre>
            <pre class="highlight"><code></code></pre>
            <pre class="highlight"><code></code></pre>
            <pre class="highlight"><code></code></pre>
        </ul>
        <h2 id="integers-or-int">Целые числа или int</h2>
        <h2 id="readability-wins">Удобочитаемость выигрывает</h2>
        <h2 id="float-basics">Основы float</h2>
        <h2 id="more-on-floats">Подробнее о float</h2>
        <h2 id="def">Def</h2>
        <h2 id="returning-values">Возвращаемые значения</h2>
        <h2 id="summing-up">Подводя итог</h2>
    </main>
</template>
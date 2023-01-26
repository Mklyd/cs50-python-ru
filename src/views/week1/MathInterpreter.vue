<template>
    <main>
        <h1>Math Interpreter</h1>
        <p>Python уже поддерживает математику, благодаря чему вы можете писать код для сложения, вычитания, умножения или деления значений и даже переменных. Но давайте напишем программу, которая позволит пользователям заниматься математикой, даже не зная Python.</p>
        <p>В файле с именем <code class="code">interpreter.py</code> реализуйте программу, которая запрашивает у пользователя  арифметическое выражение, а затем вычисляет и выводит результат в виде значения с плавающей запятой(float), отформатированного до одного десятичного разряда. Допустим что пользователь вводит данные в формате <code class="code">x y z</code> и с одним пробелом между <code class="code">x</code> и <code class="code">y</code> и одним пробелом между <code class="code">y</code> и <code class="code">z</code> в котором: </p>
        <ul>
            <li><code class="code">x</code> это целое число(int)</li>
            <li><code class="code">y</code> это <code class="code">+</code>,<code class="code">-</code>,<code class="code">*</code> или <code class="code">/</code></li>
            <li><code class="code">z</code> это целое число(int)</li>
        </ul>
        <p>Обратите внимание, что <code class="code">python</code> это интерпретатор Python, а ваша программа <code class="code">interpreter.py</code> будет интерпретатором математики</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a>, включая метод <code class="code">split</code>, который разделяет <code class="code">str</code> в последовательность значений, все они могут быть назначены переменным одновременно. Например, если выражение это <code class="code">str</code> - 1 + 1, то</li>
                <pre class="highlight"><code>x, y, z = expression.split(" ")</code></pre>
                <p>x будет 1, y будет + и z будет второй 1</p>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-udHWr5HxtxP5poDso1aVRB7qC" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/udHWr5HxtxP5poDso1aVRB7qC/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-udHWr5HxtxP5poDso1aVRB7qC" name="asciicast-iframe-udHWr5HxtxP5poDso1aVRB7qC" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 491px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir interpreter</code></pre>
        <p>создаст папку <code class="code">interpreter</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd interpreter</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">interpreter/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code interpreter.py</code> </pre>
        <p>чтобы создать файл с именем , <code class="code"> interpreter.py</code>в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью комманды <code class="code">python interpreter.py</code>. Введите  <code class="code">1 + 1</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>2.0 </code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python interpreter.py</code>. Введите  <code class="code">2 - 3</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>-1.0 </code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python interpreter.py</code>. Введите  <code class="code">2 * 2</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>4.0</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python interpreter.py</code>. Введите  <code class="code">50 / 5</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>10.0</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/interpreter</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/interpreter</code></pre>
    </main>
</template>
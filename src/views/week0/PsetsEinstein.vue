<template>
    <main>
        <h1>Einstein</h1>
        <p>Даже если вы не изучали физику (в последнее время или вообще никогда!), вы, возможно, слышали, что E = mc^2, в которой E - это энергия(измеряется в Джоулях), m - это масса(измеряется в килограммах), а c - это скорость света (измеряемую примерно как 300000000 метров в секунду), согласно <a href="https://en.wikipedia.org/wiki/Albert_Einstein"> Альберту Эйнштейну </a> и др. По сути, формула означает, что масса и энергия эквивалентны.</p>
        <p>В файле с именем <code class="code">einstein.py</code> реализуйте программу на Python, которая запрашивает у пользователя массу в виде целого числа (в килограммах), а затем выводит эквивалентное количество джоулей в виде целого числа. Предположим, что пользователь вводит целое число.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Помните, что <code class="code">input</code> возвращает <code class="code">str</code>, согласно <a href="https://docs.python.org/3/library/functions.html#input">docs.python.org/3/library/functions.html#input</a>.</li>
                <li> Помните, что <code class="code">int</code> можно преобразовать в <code class="code">str</code>, а <code class="code">str</code> в <code class="code">int</code>, согласно <a href="https://docs.python.org/3/library/functions.html#int"> docs.python.org/3/library/functions.html#int</a>.</li>
                <li>Напомним, что Python поставляется с несколькими встроенными функциями, согласно <a href="https://docs.python.org/3/library/functions.html"> docs.python.org/3/library/functions.html</a> .</li>
            </ul>
        </details>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая комманда</p>
        <pre class="highlight"><code>mkdir einstein</code></pre>
        <p>создаст папку <code class="code">einstein</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd einstein</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">einstein/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code einstein.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> einstein.py</code> котором вы будете писать свою программу.</p>
        <h2>Демо</h2>
        <img src="../../assets/week0/demo_einstein.png" alt="">
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью комманды <code class="code">python einstein.py</code>. Введите  <code class="code">1</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>90000000000000000</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python einstein.py</code>. Введите  <code class="code">14</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>1260000000000000000</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python einstein.py</code>. Введите  <code class="code">50</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>4500000000000000000</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/einstein</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/einstein</code></pre>
    </main>
</template>
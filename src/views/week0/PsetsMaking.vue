<template>
    <main>
        <h1>Making Faces</h1>
        <p>До того, как появились смайлики, были смайлики, в которых текст <code class="code">:)</code> - был счастливым лицом, а текст  <code class="code">:(</code> — грустным лицом. В настоящее время программы, как правило, автоматически конвертируют подобные смайлики в эмодзи!</p>
        <p>В файле с именем <code class="code">faces.py</code> реализуйте функцию с именем <code class="code">convert</code>, которая принимает <code class="code">str</code> в качестве входных данных и возвращает те же входные данные с любым <code class="code">:)</code> преобразованным в 🙂 (который известен нам как слегка улыбающееся лицо ) и любым <code class="code">:(</code> преобразованным в 🙁 (иначе известным как слегка хмурое лицо ). Весь остальной текст должен быть возвращен без изменений.</p>
        <p>Затем в том же файле реализуйте вызываемую функцию <code class="code">main</code>, которая запрашивает у пользователя ввод, вызывает <code class="code">convert</code> для ввода текста и печатает результат(<code class="code"> print()</code>). Вы можете, но не обязаны делать явный запрос у пользователя, путем передачи собственной строки(<code class="code">str</code>)в качестве аргумента для ввода(<code class="code">input</code>). Обязательно сделайте вызов функции <code class="code"> main</code> внизу вашего файла.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Помните, что <code class="code">input</code> возвращает <code class="code">str</code>, согласно <a href="https://docs.python.org/3/library/functions.html#input">docs.python.org/3/library/functions.html#input</a>.</li>
                <li>Помните, что у <code class="code">str</code> есть несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods"> docs.python.org/3/library/stdtypes.html#string-methods</a>.</li>
                <li>Смайлик — это на самом деле просто символ, поэтому вы можете обернуть его как любой <code class="code">str</code> в кавычки, а-ля "😐". И вы можете скопировать и вставить эмодзи с этой страницы в свой собственный код по мере необходимости.</li>
            </ul>
        </details>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir faces</code></pre>
        <p>создаст папку <code class="code">faces</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd faces</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">faces/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code faces.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> faces.py</code> котором вы будете писать свою программу.</p>
        <h2>Демо</h2>
        <img src="../../assets/week0/demo_making.png" alt="">
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python faces.py</code>. Введите  <code class="code">Hello :)</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Hello 🙂</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python faces.py</code>. Введите  <code class="code">Goodbye :(</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Goodbye 🙁</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python faces.py</code>. Введите  <code class="code">Hello :) Goodbye :(</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Hello 🙂 Goodbye 🙁</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/faces</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/faces</code></pre>
    </main>
</template>
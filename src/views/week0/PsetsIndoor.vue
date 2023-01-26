<template>
    <main>
        <h1>Indoor Voice</h1>
        <p>НАПИСАНИЕ БОЛЬШИМИ БУКВАМИ ПОХОЖЕ НА КРИК</p>
        <p>Порой лучше использовать свой спокойный голос(indoor voice), написав строчными буквами</p>
        <p>В файле <code class="code">indoor.py</code> реализуйте программу на Python, которая запрашивает у пользователя ввод строки, а затем выводит эту строку в нижнем регистре. Знаки препинания и пробелы должны выводиться без изменений. Вы можете, но не обязаны делать явный запрос у пользователя, путем передачи собственной строки(<code class="code">str</code>)в качестве аргумента для ввода(<code class="code">input</code>)</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Помните, что <code class="code">input</code> возвращает <code class="code">str</code>, согласно <a href="https://docs.python.org/3/library/functions.html#input">docs.python.org/3/library/functions.html#input</a>.</li>
                <li>Помните, что у <code class="code">str</code> есть несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods"> docs.python.org/3/library/stdtypes.html#string-methods</a>.</li>
            </ul>
        </details>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir indoor</code></pre>
        <p>создаст папку <code class="code">indoor</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd indoor</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">indoor/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code indoor.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> indoor.py</code> котором вы будете писать свою программу.</p>
        <h2>Демо</h2>
        <img src="../../assets/week0/demo_indoor.png" alt="">
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную. В <code class="code">indoor/ $</code> командной строке вашего терминала:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python indoor.py</code>. Введите <code class="code">HELLO</code> и нажмите Enter. Ваша программа должна выводить <code class="code">hello</code>.</li>
            <li>Запустите вашу программу с помощью <code class="code">python indoor.py</code>. Введите <code class="code">THIS IS CS50</code> и нажмите Enter. Ваша программа должна выводить <code class="code">this is cs50</code>.</li>
            <li>Запустите вашу программу с помощью <code class="code">python indoor.py</code>. Введите <code class="code">50</code> и нажмите Enter. Ваша программа должна выводить <code class="code">50</code>.</li>
        </ul>
        <p>Если вы столкнулись с ошибкой, говорящей о том, что ваш файл не может быть открыт(file cannot be opened), повторите свои шаги, чтобы убедиться, что вы находитесь внутри своей папки <code class="code">indoor</code> и сохранили там свой файл <code class="code">indoor.py </code>. Помните как это делать?</p>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/indoor</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/indoor</code></pre>
    </main>
</template>
<style>

</style>
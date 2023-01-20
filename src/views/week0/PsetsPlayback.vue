<template>
    <main>
        <h1>Playback Speed</h1>
        <p>У некоторых людей есть привычка читать лекции довольно быстро, и было бы неплохо замедлить их, как скорость воспроизведения YouTube 0,75, или даже заставить сделать паузу между словами.</p>
        <p>В файле с именем <code class="code">playback.py </code> реализуйте программу на Python, которая запрашивает у пользователя ввод, а затем выводит тот же ввод, заменяя каждый пробел на - ... (т. е. тремя точками).</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Помните, что <code class="code">input</code> возвращает <code class="code">str</code>, согласно <a href="https://docs.python.org/3/library/functions.html#input">docs.python.org/3/library/functions.html#input</a>.</li>
                <li>Помните, что у <code class="code">str</code> есть несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods"> docs.python.org/3/library/stdtypes.html#string-methods</a>.</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <img src="../../assets/week0/demo_playback.png" alt="">
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая комманда</p>
        <pre class="highlight"><code>mkdir playback</code></pre>
        <p>создаст папку <code class="code">playback</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd playback</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">playback/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code playback.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> playback.py</code> котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью комманды <code class="code">python playback.py</code>. Введите  <code class="code">This is CS50</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>This...is...CS50</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python playback.py</code>. Введите  <code class="code">This is our week on functions</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>This...is...our...week...on...functions</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python playback.py</code>. Введите  <code class="code">Let's implement a function called hello</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Let's...implement...a...function...called...hello</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/playback</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/playback</code></pre>
    </main>
</template>
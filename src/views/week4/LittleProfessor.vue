<template>
    <main>
        <h1>Emojize</h1>
        <p>Поскольку смайлики не так легко набирать, как текст, по крайней мере, на ноутбуках и настольных компьютерах, некоторые программы поддерживают «коды», с помощью которых вы можете ввести, например, , который будет автоматически преобразован <code class="code">:thumbs_up:</code> в 👍. Некоторые программы дополнительно поддерживают псевдонимы, благодаря чему вы можете более лаконично набирать, например, <code class="code">:thumbsup:</code>, который также будет автоматически преобразован в 👍.</p>
        <p>См. <a href="https://carpedm20.github.io/emoji/all.html?enableList=enable_list_alias">carpedm20.github.io/emoji/all.html?enableList=enable_list_alias</a> для списка кодов с псевдонимами.</p>
        <p>В файле с именем <code class="code">emojize.py</code> реализуйте программу, которая запрашивает у пользователя a <code class="code">str</code> на английском языке, а затем выводит «смайликовую» версию этого <code class="code">str</code>, преобразуя любые коды (или псевдонимы) в них в соответствующие смайлики.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a>, включая метод split.</li>
                <li>Обратите внимание, что вы можете обрабатывать два исключения отдельно с помощью такого кода:</li>
                <pre class="highlight"><code>try:
    ...
except ValueError:
    ...
except ZeroDivisionError:
    ...</code></pre>
                <span>Или вы можете обрабатывать два исключения вместе, например:</span>
                <pre class="highlight"><code>try:
    ...
except (ValueError, ZeroDivisionError):
    ...</code></pre>
            </ul>
        </details>
        <h2>Демо</h2>
        <iframe src="https://asciinema.org/a/6uEeFIieYqM2tlaKcYxA5jA5n/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-6uEeFIieYqM2tlaKcYxA5jA5n" name="asciicast-iframe-6uEeFIieYqM2tlaKcYxA5jA5n" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 494px;"></iframe>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir fuel</code></pre>
        <p>создаст папку <code class="code">fuel</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd fuel</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">fuel/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code fuel.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> fuel.py</code> котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>. Введите  <code class="code">3/4</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>75%</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>. Введите  <code class="code">1/4</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>25%</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>. Введите  <code class="code">4/4</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>F</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>. Введите  <code class="code">0/4</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>E</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>.Введите <code class="code">4/0</code> и нажмите Enter. Ваша программа должна обрабатывать <a href="https://docs.python.org/3/library/exceptions.html#ZeroDivisionError">ZeroDivisionError</a>и снова делать запрос дроби у пользователя.</li>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>.Введите <code class="code">three/four</code> и нажмите Enter. Ваша программа должна обрабатывать <a href="https://docs.python.org/3/library/exceptions.html#ValueError">ValueError</a>и снова делать запрос дроби у пользователя.</li>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>.Введите <code class="code">1.5/3</code> и нажмите Enter. Ваша программа должна обрабатывать <a href="https://docs.python.org/3/library/exceptions.html#ValueError">ValueError</a>и снова делать запрос дроби у пользователя.</li>
            <li>Запустите вашу программу с помощью команды <code class="code">python fuel.py</code>.Введите <code class="code">5/4</code> и нажмите Enter. Ваша программа должна снова делать запрос дроби у пользователя.</li>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/fuel</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/fuel</code></pre>
    </main>
</template>
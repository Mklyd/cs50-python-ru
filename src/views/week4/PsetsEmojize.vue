<template>
    <main>
        <h1>Emojize</h1>
        <p>Поскольку смайлики не так легко набирать, как текст, по крайней мере, на ноутбуках и настольных компьютерах, некоторые программы поддерживают «коды», с помощью которых вы можете ввести смайлики, например,<code class="code">:thumbs_up:</code>, который будет автоматически преобразован в 👍. Некоторые программы дополнительно поддерживают псевдонимы, благодаря чему вы можете быть более лаконичны, например, <code class="code">:thumbsup:</code>, который также будет автоматически преобразован в 👍.</p>
        <p>См. <a href="https://carpedm20.github.io/emoji/all.html?enableList=enable_list_alias">carpedm20.github.io/emoji/all.html?enableList=enable_list_alias</a> - список кодов с псевдонимами.</p>
        <p>В файле с именем <code class="code">emojize.py</code> реализуйте программу, которая запрашивает у пользователя <code class="code">str</code> на английском языке, а затем выводит «смайликовую» версию этого <code class="code">str</code>, преобразуя любые коды (или псевдонимы) в них в соответствующие смайлики.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Обратите внимание, что <code class="code">emoji</code> модуль поставляется с двумя функциями, согласно <a href="https://pypi.org/project/emoji/">pypi.org/project/emoji</a>, одна из которых — <code class="code">emojize</code>, которая принимает необязательный именованный параметр с именем <code class="code">language</code>. Вы можете установить его с помощью:</li>
                <pre class="highlight"><code>pip install emoji</code></pre>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-04rf7dFZ6igDKrLWIYTonN4N1" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/04rf7dFZ6igDKrLWIYTonN4N1/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-04rf7dFZ6igDKrLWIYTonN4N1" name="asciicast-iframe-04rf7dFZ6igDKrLWIYTonN4N1" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 465px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir emojize</code></pre>
        <p>создаст папку <code class="code">emojize</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd emojize</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">emojize/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code emojize.py</code> </pre>
        <p>чтобы создать файл с именем <code class="code"> emojize.py</code>, в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python emojize.py</code>. Введите <code class="code">:1st_place_medal:</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Output: 🥇</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python emojize.py</code>.  Введите <code class="code">:money_bag:</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Output: 💰</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python emojize.py</code>.  Введите <code class="code">:smile_cat:</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Output: 😸</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/emojize</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/emojize</code></pre>
    </main>
</template>
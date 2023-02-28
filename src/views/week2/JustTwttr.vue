<template>
    <main>
        <h1>Просто настройка моего twttr(Just setting up my twttr)</h1>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">just setting up my twttr</p>— jack⚡️ (@jack) <a href="https://twitter.com/jack/status/20?ref_src=twsrc%5Etfw">March 21, 2006</a></blockquote>
        <p>При отправке текстовых сообщений или твитов нередко сокращают слова, чтобы сэкономить время или место, например, опуская гласные, так же, как Twitter изначально назывался twttr. В файле с именем <code class="code">twttr.py</code> реализуйте программу, которая запрашивает у пользователя <code class="code">str</code> текст, а затем выводит тот же текст, но без всех гласных (A, E, I, O и U), независимо от того, введены они в верхнем или нижнем регистре.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a></li>
                <li>Как и <code class="code">list</code> - <code class="code">str</code> является «итерируемым», что означает, что вы можете перебирать каждый из его символов в цикле. Например, если <code class="code">s</code> - это <code class="code">str</code>, вы можете напечатать каждый из его символов по одному с помощью такого кода:
                <pre class="highlight"><code>for c in s:
    print(c, end="")</code></pre>
                </li>        
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-Nv6iLIjNIdxofiRExZ5K9mBHS" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/Nv6iLIjNIdxofiRExZ5K9mBHS/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-Nv6iLIjNIdxofiRExZ5K9mBHS" name="asciicast-iframe-Nv6iLIjNIdxofiRExZ5K9mBHS" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 496px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir twttr</code></pre>
        <p>создаст папку <code class="code">twttr</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd twttr</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">twttr/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code twttr.py</code> </pre>
        <p>чтобы создать файл с именем , <code class="code"> twttr.py</code>в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python twttr.py</code>. Введите  <code class="code">Twitter</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> Twttr </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python twttr.py</code>. Введите  <code class="code">What's your name?</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Wht's yr nm?</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python twttr.py</code>. Введите  <code class="code">CS50</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>CS50 </code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/twttr
</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/twttr</code></pre>
    </main>
</template>
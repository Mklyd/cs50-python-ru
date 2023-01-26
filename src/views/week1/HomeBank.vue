<template>
    <main>
        <h1>Главный Федеральный сберегательный банк (Home Federal Savings Bank)</h1>
        <p>В <a href="https://en.wikipedia.org/wiki/The_Invitations">24 эпизоде 7 сезона</a> <a href="https://en.wikipedia.org/wiki/Seinfeld">« Сайнфелда »</a> <a href="https://en.wikipedia.org/wiki/Cosmo_Kramer">Крамер</a> посещает банк, который обещает дать 100 долларов любому посетителю, который при приветствии не скажет "hello". Вместо этого Крамера говорит "hey", которое, как он настаивает, не является "hello", и поэтому он просит 100 долларов. Менеджер банка предлагает компромисс: «Ваше приветствие начинается на "h", как насчет 20 долларов?» Крамер соглашается.</p>
        <p>В файле с именем <code class="code">bank.py</code> реализуйте программу, которая запрашивает у пользователя приветствие. Если приветствие начинается с "hello", выведите $0. Если приветствие начинается с «h» (но не «hello»), выведите $20. В противном случае выведите $100. Игнорируйте любые начальные пробелы в приветствии пользователя и обрабатывайте приветствие пользователя без учета регистра.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a></li>
                <li>Обязательно дайте 0$ не только за "hello", но и за "hello there", “hello, Newman”, и тому подобное.</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-Pes7djS4b1GmwpwqNu2vj6LgY" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/Pes7djS4b1GmwpwqNu2vj6LgY/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-Pes7djS4b1GmwpwqNu2vj6LgY" name="asciicast-iframe-Pes7djS4b1GmwpwqNu2vj6LgY" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 491px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir bank</code></pre>
        <p>создаст папку <code class="code">bank</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd bank</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">bank/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code bank.py</code> </pre>
        <p>чтобы создать файл с именем , <code class="code"> bank.py</code>в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью комманды <code class="code">python bank.py</code>. Введите  <code class="code">Hello</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> $0 </code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python bank.py</code>. Введите  <code class="code">Hello, Newman</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>$0 </code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python bank.py</code>. Введите  <code class="code">How you doing?</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>$20</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python bank.py</code>. Введите  <code class="code">What's happening?</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>$100</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/bank</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/bank</code></pre>
    </main>
</template>
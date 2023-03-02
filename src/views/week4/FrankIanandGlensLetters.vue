<template>
    <main>
        <h1>Frank, Ian and Glen's Letters</h1>
        <p><a href="https://en.wikipedia.org/wiki/FIGlet">FIGlet</a>, названный в честь <a href="http://www.figlet.org/faq.html">букв Фрэнка, Яна и Глена</a>, представляет собой программу начала 1990-х годов для преобразования обычного текста в форму <a href="https://en.wikipedia.org/wiki/ASCII_art">искусства ASCII</a>:</p>
        <pre class="highlight"><code> _ _ _          _   _     _
| (_) | _____  | |_| |__ (_)___
| | | |/ / _ \ | __| '_ \| / __|
| | |   &lt;  __/ | |_| | | | \__ \
|_|_|_|\_\___|  \__|_| |_|_|___/
</code></pre>
        <p>Среди шрифтов, поддерживаемых FIGlet, есть те, что находятся на <a href="http://www.figlet.org/examples.html">figlet.org/examples.html</a>.</p>
        <p>С тех пор FIGlet был портирован на Python как модуль под названием <a href="https://pypi.org/project/pyfiglet/0.7/">pyfiglet</a>.</p>
        <p>В файле с именем <code class="code">figlet.py</code> реализуйте программу, которая:</p>
        <ul>
            <li>Ожидает ноль или два аргумента командной строки:</li>
            <ul>
                <li>Ноль, если пользователь хочет вывести текст случайным шрифтом.</li>
                <li>Два, если пользователь хочет вывести текст в определенном шрифте, и в этом случае первым из двух должно быть -fили --font, а вторым из двух должно быть имя шрифта.</li>
            </ul>
            <li>Запрашивает у пользователя strтекст.</li>
            <li>Выводит этот текст нужным шрифтом.</li>
        </ul>
        <p>Если пользователь предоставляет два аргумента командной строки, и первый -fили --fontвторой не является именем шрифта, программа должна выйти через sys.exitс сообщением об ошибке.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Вы можете установить pyfigletс помощью:</li>
                <pre class="highlight"><code>pip install pyfiglet</code></pre>
                <li>Документация для pyfiglet не очень понятна, но вы можете использовать модуль следующим образом:</li>
                <pre class="highlight"><code>from pyfiglet import Figlet
figlet = Figlet()</code></pre>
                <span>Затем вы можете получить list доступный шрифт с помощью такого кода:</span>
                <pre class="highlight"><code>figlet.getFonts()</code></pre>
                <span>Вы можете установить шрифт с помощью кода, подобного этому, где fимя шрифта как str:</span>
                <pre class="highlight"><code>figlet.setFont(font=f)</code></pre>
                <span>И вы можете вывести текст в этом шрифте с помощью кода, подобного этому, где sэтот текст как str:</span>
                <pre class="highlight"><code>print(figlet.renderText(s))</code></pre>
                <li>Обратите внимание, что randomмодуль имеет довольно много функций, согласно <a href="https://docs.python.org/3/library/random.html">docs.python.org/3/library/random.html</a>.</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <p>В первом выводе этой демонстрации использовался случайный шрифт. Ваш вывод может отличаться.</p>
        <div id="asciicast-container-LIo5QcHpUiXepVFiL4fTBwmuE" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/LIo5QcHpUiXepVFiL4fTBwmuE/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-LIo5QcHpUiXepVFiL4fTBwmuE" name="asciicast-iframe-LIo5QcHpUiXepVFiL4fTBwmuE" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 465px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir figlet</code></pre>
        <p>создаст папку <code class="code">figlet</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd figlet</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">figlet/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code figlet.py</code> </pre>
        <p>чтобы создать файл с именем <code class="code"> figlet.py</code>в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python figlet.py test</code>. Ваша программа должна выйти через sys.exit и вывести сообщение об ошибке:</li>
            <pre class="highlight"><code>Invalid usage</code></pre>
            <li>Запустите вашу программу с помощью <code>python figlet.py -a slant</code>. Ваша программа должна выйти через sys.exit и вывести сообщение об ошибке:</li>
            <pre class="highlight"><code>Invalid usage</code></pre>
            <li>Запустите вашу программу с помощью <code>python figlet.py -f invalid_font</code>. Ваша программа должна выйти через sys.exitи вывести сообщение об ошибке:</li>
            <pre class="highlight"><code>Invalid usage</code></pre>
            <li>Запустите вашу программу с помощью python figlet.py -f slant. Тип CS50. Ваша программа должна напечатать следующее:</li>
            <pre class="highlight">
                <code>  
   ___________ __________ 
  / ____/ ___// ____/ __ \
 / /    \__ \/___ \/ / / /
/ /___ ___/ /___/ / /_/ / 
\____//____/_____/\____/ </code>
            </pre>
            <li>Запустите вашу программу с помощью <code class="code">python figlet.py -f rectangles</code>. Тип Hello, world. Ваша программа должна напечатать следующее:</li>
            <pre class="highlight"><code> _____     _ _                        _   _ 
|  |  |___| | |___      _ _ _ ___ ___| |_| |
|     | -_| | | . |_   | | | | . |  _| | . |
|__|__|___|_|_|___| |  |_____|___|_| |_|___|
                  |_|                      </code></pre>
            <li>Запустите вашу программу с помощью <code class="code">python figlet.py -f alphabet</code>. Тип Moo. Ваша программа должна напечатать следующее:</li>
            <pre class="highlight"><code>M   M         
MM MM         
M M M ooo ooo 
M   M o o o o 
M   M ooo ooo     </code></pre>

        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/figlet</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/figlet</code></pre>
    </main>
</template>
<style scoped>
.highlight {
    line-height: 120%;  
    padding-bottom: 10px;
    padding-top: 10px;
}
</style>
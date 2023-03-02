<template>
    <main>
        <h1>Автомат с Колой</h1>
        <div class="pset">
            <p>Предположим, что автомат продает бутылки Coca-Cola (Coke) по 50 центов и принимает монеты только следующих номиналов: 25 центов, 10 центов и 5 центов.</p>
            <p>В файле с именем coke.py реализуйте программу, предлагающую пользователю вставлять монету в автомат по одной, каждый раз информируя пользователя о сумме, которую он еще должен всавить в автомат. Как только пользователь введет не менее 50 центов, выведите сколько центов сдачи причитается пользователю. Предположим, что пользователь будет вводить только целые числа и игнорировать любые целые числа, не являющиеся допустимым номиналом.</p>
        </div>
        <img src="https://cs50.harvard.edu/python/2022/psets/2/coke/coke.png" width="100%" height="100%" alt="Бутылка кока-колы CS50">     
        <h2>Демо</h2>
        <div id="asciicast-container-DuIJvOFsuZiBswsLhSuUaDYe2" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/DuIJvOFsuZiBswsLhSuUaDYe2/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-DuIJvOFsuZiBswsLhSuUaDYe2" name="asciicast-iframe-DuIJvOFsuZiBswsLhSuUaDYe2" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 450px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir coke</code></pre>
        <p>создаст папку <code class="code">coke</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd coke</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">coke/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code coke.py</code> </pre>
        <p>чтобы создать файл с именем <code class="code">coke.py</code>, в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python coke.py</code>. При появлении <code class="code">Insert Coin:</code> запроса введите <code class="">25</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> Amount Due: 25 </code></pre>
            <span>и продолжайте запрашивать у пользователя монеты.</span>
            <li>Запустите вашу программу с помощью команды <code class="code">python coke.py</code>. При появлении <code class="code">Insert Coin:</code> запроса введите <code class="">10</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Amount Due: 40</code></pre>
            <span>и продолжайте запрашивать у пользователя монеты.</span>
            <li>Запустите вашу программу с помощью команды <code class="code">python coke.py</code>. При появлении <code class="code">Insert Coin:</code> запроса введите <code class="">5</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Amount Due: 45</code></pre>
            <span>и продолжайте запрашивать у пользователя монеты.</span>
            <li>Запустите вашу программу с помощью команды <code class="code">python coke.py</code>. При появлении <code class="code">Insert Coin:</code> запроса введите <code class="">30</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Amount Due: 50</code></pre>
            <span>потому что автомат не принимает 30-центовые монеты! Затем ваша программа должна продолжать запрашивать у пользователя монеты.</span>
            <li>Запустите вашу программу с помощью команды <code class="code">python coke.py</code>. При появлении <code class="code">Insert Coin:</code> запроса введите <code class="">25</code> и нажмите Enter, затем введите <code class="">25</code> еще раз и нажмите Enter. Ваша программа должна остановиться и отобразить:</li>
            <pre class="highlight"><code>Change Owed: 0</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python coke.py</code>. При появлении <code class="code">Insert Coin:</code> запроса введите <code class="">25</code> и нажмите Enter, затем введите <code class="">10</code> и нажмите Enter. Введите <code class="">25</code> еще раз и нажмите Enter, после чего ваша программа должна остановиться и отобразить:</li>
            <pre class="highlight"><code>Change Owed: 10</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/coke</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Следите за тем, чтобы подсказки и ответы печатались точно так, как показано выше. Если ваша программа напечатает какой-либо дополнительный текст, это может привести к сбою <code class="code">check50</code>.</li>
            </ul>
        </details>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/coke</code></pre>
    </main>
</template>
<style scoped>
.pset {
    width: 80%;
}
</style>
<template>
    <main>
        <h1>Время приема пищи (Meal Time)</h1>
        <p>Предположим, вы находитесь в стране, где принято завтракать с 7:00 до 8:00, обедать с 12:00 до 13:00, а ужинать с 18:00 до 19:00. Было бы неплохо, если бы у вас была программа, которая могла бы сказать вам, что и когда есть?</p>
        <p>В <code class="code">meal.py</code>, реализуйте программу, которая запрашивает у пользователя время и выводит, является ли это <code class="code">breakfast time</code>, <code class="code">lunch time</code>, или <code class="code">dinner time</code>. Если это не время приема пищи, вообще ничего не выводите. Предположим, что пользовательский ввод будет отформатирован в 24-часовом формате как <code class="code">#:##</code> или <code class="code">##:##</code>. И предположим, что диапазон времени каждого приема пищи является инклюзивным. Например, будь то 7:00, 7:01, 7:59, 8:00 или любое другое время между ними, пора завтракать.</p>
        <p>Структурируйте свою программу, как показано ниже, в которой <code class="code">convert</code> функция (которую можно вызвать из <code class="code">main</code>), которая преобразует <code class="code">time</code>, строку <code class="code">str</code> в 24-часовом формате, в соответствующее количество часов в виде <code class="code">float</code>. Например, <code class="code">time</code> равен <code class="code">"7:30"</code> (т. е. 7 часов 30 минут), тогда <code class="code">convert</code> должен вернуть <code class="code">7.5</code>(т. е. 7.5 часов).</p>
        <pre class="highlight"><code>def main():
    ...

def convert(time):
    ...

if __name__ == "__main__":
    main()</code></pre>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a>, включая метод <code class="code">split</code>, который разделяет <code class="code">str</code> в последовательность значений, все они могут быть назначены переменным одновременно. Например, если <code class="code">time</code> это <code class="code">str</code> равный <code class="code">"7:30"</code>, то</li>
                <pre class="highlight"><code>hours, minutes = time.split(":")</code></pre>
                <p><code class="code">"7"</code> будет помещен в переменную<code class="code">hours</code>, а <code class="code">"30"</code> в <code class="code">minutes</code></p>
                <li>Держите в уме, что в 1 часе 60 минут</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-r50SdWETBghko6aqkpawWhj1G" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/r50SdWETBghko6aqkpawWhj1G/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-r50SdWETBghko6aqkpawWhj1G" name="asciicast-iframe-r50SdWETBghko6aqkpawWhj1G" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 491px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir meal</code></pre>
        <p>создаст папку <code class="code">meal</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd meal</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">meal/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code meal.py</code> </pre>
        <p>чтобы создать файл с именем , <code class="code"> meal.py</code>в котором вы будете писать свою программу.</p>
        <h2>Вызов</h2>
        <p>Если вы готовы принять вызов, при желании добавьте поддержку 12-часового времени, что позволит пользователю вводить время и в этих форматах:</p>
        <ul>
            <li><code class="code">#:## a.m.</code> и <code class="code">##:## a.m.</code></li>
            <li><code class="code">#:## p.m.</code> и <code class="code">##:## p.m.</code></li>
        </ul>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python meal.py</code>. Введите  <code class="code">7:00</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>breakfast time</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python meal.py</code>. Введите  <code class="code">7:30</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>breakfast time </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python meal.py</code>. Введите  <code class="code">12:42</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>lunch time </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python meal.py</code>. Введите  <code class="code">18:32</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>dinner time </code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/meal</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/meal</code></pre>
    </main>
</template>
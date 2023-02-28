<template>
    <main>
        <h1>Продуктовый список(Grocery List)</h1>
        <p>Предположим, у вас есть привычка составлять список продуктов, которые вам нужны в продуктовом магазине.</p>
        <p>В файле с именем <code class="code">grocery.py</code> реализуйте программу, которая запрашивает у пользователя элементы, по одному в строке, до тех пор, пока пользователь не введет control-d (что является распространенным способом завершения ввода в программу). Затем выведите список продуктов пользователя в верхнем регистре, отсортированный в алфавитном порядке по элементам, с префиксом каждой строки, указывающим, сколько раз пользователь ввел этот элемент. Не нужно ставить элементы во множественное число. Обрабатывайте ввод пользователя без учета регистра.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Обратите внимание, что вы можете определить, когда пользователь ввел control-d, перехватив <a href="https://docs.python.org/3/library/exceptions.html#EOFError">EOFError</a> такой код:</li>
                <pre class="highlight"><code>try:
    item = input()
except EOFError:
    ...</code></pre>
                <li>Скорее всего, вы захотите сохранить свой список покупок в виде файла dict.</li>
                <li>Обратите внимание, что у <code class="code">dict</code> есть несколько методов <a href="https://docs.python.org/3/library/stdtypes.html#mapping-types-dict">docs.python.org/3/library/stdtypes.html#mapping-types-dict</a>, среди которых и метод <code class="code">get</code>, а также он поддерживает такие операции, как:</li>
                <pre class="highlight"><code>d[key]</code></pre>
                <span>и</span>
                <pre class="highlight"><code>if key in d:
    ...</code></pre>
                <span>где <code class="code">d</code> это <code class="code">dict</code> и <code class="code">key</code> это <code class="code">str</code>.</span>
                <li>Удостоверьтесь, что избежали или поймали  KeyError.</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-oBVcf1rps4m8egqd3QTZmbwAl" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/oBVcf1rps4m8egqd3QTZmbwAl/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-oBVcf1rps4m8egqd3QTZmbwAl" name="asciicast-iframe-oBVcf1rps4m8egqd3QTZmbwAl" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 455px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir grocery</code></pre>
        <p>создаст папку <code class="code">grocery</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd grocery</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">grocery/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code grocery.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> grocery.py</code> котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python grocery.py</code>. Введите mangoи нажмите Enter, затем введите strawberryи нажмите Enter, а затем Ctrl-d. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>1 MANGO
1 STRAWBERRY</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python grocery.py</code>. Введите milkи нажмите Enter, затем введите milkеще раз и нажмите Enter, а затем Ctrl-d. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>2 MILK</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python grocery.py</code>.  Введите tortillaи нажмите Enter, затем введите sweet potatoи нажмите Enter, а затем Ctrl-d. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>1 SWEET POTATO
1 TORTILLA</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/grocery</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/grocery</code></pre>
    </main>
</template>
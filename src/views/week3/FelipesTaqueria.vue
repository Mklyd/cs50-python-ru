<template>
    <main>
        <h1>Felipe's Taqueria</h1>
        <p>Одним из самых популярных мест, где можно поесть на <a href="https://en.wikipedia.org/wiki/Harvard_Square">Гарвардской площади</a>, является Felipe's Taqueria, где предлагается <a href="https://www.felipesboston.com/menu">меню</a> основных блюд, как показано в <code class="code">dict</code> ниже, где значение каждого ключа это цена в долларах:</p>
        <pre class="highlight"><code>{
    "Baja Taco": 4.00,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}</code></pre>
        <p>В файле с именем <code class="code">taqueria.py</code> реализуйте программу, которая позволяет пользователю размещать заказ, предлагая ему ввести по одному блюду в строке, до тех пор, пока пользователь не введет control-d (что является распространенным способом завершения ввода в программу). После каждого введенного элемента отобразите общую стоимость всех введенных элементов со знаком доллара <code class="code">($)</code> в начале и отформатируйте до двух знаков после запятой. Не обращайте внимание на регистр ввода пользователя. Игнорируйте любой ввод, который не является элементом из словаря. Предположим, что каждый пункт меню будет иметь <a href="https://docs.python.org/3/library/stdtypes.html#str.title">заглавную букву</a>.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Обратите внимание, что вы можете определить, когда пользователь ввел control-d, перехватив <a href="https://docs.python.org/3/library/exceptions.html#EOFError">EOFError</a> такой код:</li>
                <pre class="highlight"><code>try:
    item = input()
except EOFError:
    ...</code></pre>
                <span>Возможно, вы захотите напечатать новую строку, чтобы курсор пользователя (и последующее приглашение) не оставался на той же строке, что и собственное приглашение вашей программы.</span>
                <li>Ввод control-d также не требует ввода Enter, поэтому курсор пользователя (и последующий запрос) может оставаться на той же строке, на которой ваша программа делает запрос. Вы можете переместить курсор пользователя на новую строку, напечатав \n!</li>
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
        <div id="asciicast-container-J20VZsCKXRPoavI0nFwCreRmr" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/J20VZsCKXRPoavI0nFwCreRmr/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-J20VZsCKXRPoavI0nFwCreRmr" name="asciicast-iframe-J20VZsCKXRPoavI0nFwCreRmr" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 162px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir taqueria</code></pre>
        <p>создаст папку <code class="code">taqueria</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd taqueria</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">taqueria/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code taqueria.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> taqueria.py</code> котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python taqueria.py</code>. Введите  <code class="code">Taco</code> и нажмите Enter, затем введите Taco. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Total: $6.00</code></pre>
            <span>и продолжайте предлагать ввод пользователю, пока он не нажмет control-d.</span>
            <li>Запустите вашу программу с помощью <code>python taqueria.py</code>. Введите <code class="code">Baja Taco</code> и нажмите Enter, затем введите <code class="code">Tortilla Salad</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Total: $12.00</code></pre>
           <span>и продолжайте предлагать пользователю ввод, пока он не нажмет control-d.</span>
           <li>Запустите вашу программу с помощью <code>python taqueria.py</code>. Введите <code class="code">Burger</code> и нажмите Enter. Ваша программа должна повторно сделать запрос у пользователя.</li>
        </ul>
        <p>Обязательно попробуйте другие продукты и измените регистр вашего ввода. Ваша программа должна вести себя так, как ожидалось, без учета регистра.</p>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/taqueria</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/taqueria</code></pre>
    </main>
</template>
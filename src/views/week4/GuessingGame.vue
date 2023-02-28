<template>
    <main>
        <h1>Outdated</h1>
        <p>В Соединенных Штатах даты обычно форматируются в порядке <a href="https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_United_States">месяц-день-год (ММ/ДД/ГГГГ)</a>, также известном как <a href="https://en.wikipedia.org/wiki/Endianness#Middle-endian">средний</a> порядок байтов, который, возможно, является плохим дизайном. Даты в этом формате не могут быть легко отсортированы, потому что год даты идет последним, а не первым. Попробуйте отсортировать, например, 2/2/1800, 3/3/1900, и в 1/1/2000хронологическом порядке в любой программе (например, электронной таблице). Даты в этом формате также неоднозначны. Гарвард был <a href="https://www.harvard.edu/about/history/">основан</a> 8 сентября 1636 года, но 9/8/1636 также можно интерпретировать как 9 августа 1636 года!</p>
        <p>К счастью, компьютеры, как правило, используют <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>, международный стандарт, который предписывает, что даты должны быть отформатированы в порядке год-месяц-день (ГГГГ-ММ-ДД), независимо от страны, форматируя годы с четырьмя цифрами, месяцы с двумя цифрами, и дни с двумя цифрами, «дополняя» каждую начальными нулями по мере необходимости.</p>
        <p>В файле с именем <code class="code">outdated.py</code> реализуйте программу, которая запрашивает у пользователя дату,<a href="https://en.wikipedia.org/wiki/Anno_Domini">anno Domini</a>, в порядке месяц-день-год, отформатированном как <code class="code">9/8/1636</code> или <code class="code">September 8, 1636</code>, где месяц в последнем может быть любым из следующих значений <code class="code">list</code>:</p>
        <pre class="highlight"><code>[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]</code></pre>
        <p>Затем выведите ту же дату в формате <code class="code">YYYY-MM-DD</code>. Если ввод пользователя не является допустимой датой ни в одном из форматов, запросите пользователя еще раз. Предположим, что в каждом месяце не более 31 дня; нет необходимости проверять, имеет ли месяц 28, 29, 30 или 31 день.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Напомним, что a <code class="code">str</code>поставляется с несколькими методами, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a>, включая <code class="code">split</code></li>
                <li>Напомним, что a listпоставляется с несколькими методами, согласно <a href="https://docs.python.org/3/tutorial/datastructures.html#more-on-lists">docs.python.org/3/tutorial/datastructures.html#more-on-lists</a> , среди которых есть index.</li>
                <li>Обратите внимание, что вы можете отформатировать int начальные нули с помощью кода, подобного</li>
                <pre class="highlight"><code>print(f"{n:02}")</code></pre>
                <span>при этом, если n это одна цифра, перед ней будет стоять единица 0 согласно <a href="https://docs.python.org/3/library/string.html#format-string-syntax">docs.python.org/3/library/string.html#format-string-syntax</a> .</span>
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-iPkyZlnBAjrPTE75LLhJVenUd" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/iPkyZlnBAjrPTE75LLhJVenUd/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-iPkyZlnBAjrPTE75LLhJVenUd" name="asciicast-iframe-iPkyZlnBAjrPTE75LLhJVenUd" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 465px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir outdated</code></pre>
        <p>создаст папку <code class="code">outdated</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd outdated</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">outdated/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code outdated.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> outdated.py</code> котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python outdated.py</code>. Введите <code class="code">9/8/1636</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>1636-09-08</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python outdated.py</code>. Введите <code class="code">September 8, 1636</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>1636-09-08</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python outdated.py</code>.  Введите 23/6/1912и нажмите Enter. Ваша программа должна повторно подсказывать пользователю.</li>
            <li>Запустите вашу программу с помощью <code class="code">python outdated.py</code>. Введите <code class="code">December 80, 1980</code> и нажмите Enter. Ваша программа должна повторно подсказывать пользователю.</li>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/outdated</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/outdated</code></pre>
    </main>
</template>
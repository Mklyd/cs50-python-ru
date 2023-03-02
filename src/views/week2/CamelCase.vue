<template>
    <main>
        <h1>camelCase</h1>
        <img src="https://cs50.harvard.edu/python/2022/psets/2/camel/1024px-CamelCase_new.svg.png" alt="" width="496">
        <p class="small">Источник: <a href="https://en.wikipedia.org/wiki/Camel_case">https://en.wikipedia.org/wiki/Camel_case</a></p>
        <p>В некоторых языках принято использовать <a href="https://en.wikipedia.org/wiki/Camel_case">camel case</a>(верблюжий регистр, также известный как «смешанный регистр») для имен переменных, когда эти имена состоят из нескольких слов, при этом первая буква первого слова — строчная, а первая буква каждого последующего слова — прописная. Например, переменная name может называться <code class="code">name</code>, переменная first name может называться <code class="code">firstName</code>, а переменная для предпочитаемого имени пользователя(preferred first name)(например, псевдонима) может называться preferredFirstName.</p>
        <p>Python, напротив, рекомендует <a href="https://peps.python.org/pep-0008/#function-and-variable-names">змеиный регистр</a> в котором слова разделяются символом подчеркивания (_), а все буквы в нижнем регистре. Например , в Python те же самые переменные будут называться <code class="code">name</code>, <code class="code">first_name</code>, и , соответственно <code class="code">preferred_first_name</code>.</p>
        <p>В файле с именем <code class="code">camel.py</code> реализуйте программу, которая запрашивает у пользователя имя переменной в верблюжьем регистре и выводит соответствующее имя в змеином регистре. Предположим, что пользовательский ввод действительно будет в верблюжьем регистре.</p>
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
        <div id="asciicast-container-bbXilkZPylKGt0bo3g65wE5hU" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/bbXilkZPylKGt0bo3g65wE5hU/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-bbXilkZPylKGt0bo3g65wE5hU" name="asciicast-iframe-bbXilkZPylKGt0bo3g65wE5hU" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 496px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir camel</code></pre>
        <p>создаст папку <code class="code">camel</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd camel</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">camel/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code camel.py</code> </pre>
        <p>чтобы создать файл с именем <code class="code">camel.py</code>, в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python camel.py</code>. Введите  <code class="code">name</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> name </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python camel.py</code>. Введите  <code class="code">firstName</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>first_name </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python camel.py</code>. Введите  <code class="code">preferredFirstName</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>preferred_first_name </code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/camel</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/camel</code></pre>
    </main>
</template>
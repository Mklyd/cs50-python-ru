<template>
    <main>
        <h1>Vanity Plates</h1>        
        <img src="https://cs50.harvard.edu/python/2022/psets/2/plates/plate.png" alt="">
        <p>В штате Массачусетс, где находится Гарвардский университет, можно запросить <a href="https://www.mass.gov/how-to/request-a-vanity-license-plate">эксклюзивный номерной знак</a> для вашего автомобиля с выбранными вами буквами и цифрами вместо случайных. Однако среди требований:</p>
        <ul>
            <li>«Все эксклюзивные номерные знаки должны начинаться как минимум с двух букв».</li>
            <li>«… таблички для номерных знаков могут содержать не более 6 и не менее 2 символов(букв или цифр)».</li>
            <li>«Числа нельзя использовать в середине номерных знаков, они должны быть в конце. Например, AAA222 будет приемлемым… номерным знаком; AAA22A неприемлем. Первое используемое число не может быть «0».</li>
            <li>«Точки, пробелы и знаки препинания не допускаются».</li>
        </ul>
        <p>В <code class="code">plates.py</code>, реализуйте программу, которая запрашивает у пользователя номерной знак, а затем выводит результат <code class="code">Valid</code>если он соответствует всем требованиям или <code class="code">Invalid</code> если нет. Предположим, что любые буквы вводимые пользователем будут в верхнем регистре. Структурируйте свою программу в соответствии с приведенным ниже кодом, при этом <code class="code">is_valid</code> возвращает <code class="code">True</code> если все требования соблюдены, а <code class="code">False</code> если нет. Предположим, что <code class="code">s</code> это будет <code class="code">str</code>. Вы можете реализовать дополнительные функции для <code class="code">is_valid</code> вызова (например, по одной функции на каждое требование).</p>
        <pre class="highlight"><code>def main():
    plate = input("Plate: ")
    if is_valid(plate):
        print("Valid")
    else:
        print("Invalid")

def is_valid(s):
    ...

main()</code></pre>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Не забывайте, что <code class="code">str</code> имеет несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">docs.python.org/3/library/stdtypes.html#string-methods</a></li>
                <li>Подобно list str представляет собой «последовательность» (символов), что означает, что ее можно <a href="https://docs.python.org/3/library/stdtypes.html#common-sequence-operations">«нарезать»</a> на более короткие строки с синтаксисом вроде s[i:j]. Например, если s = "CS50", то s[0:2] будет "CS". (Это называлется срезом)
                </li>        
            </ul>
        </details>
        <h2>Демо</h2>
        <div id="asciicast-container-w851L8m3HFuSVcHslP4DGKELp" class="asciicast" style="display: block; float: none; overflow: hidden; padding: 0px; margin: 20px 0px;"><iframe src="https://asciinema.org/a/w851L8m3HFuSVcHslP4DGKELp/iframe?autoplay=1&amp;loop=1&amp;cols=80&amp;rows=12" id="asciicast-iframe-w851L8m3HFuSVcHslP4DGKELp" name="asciicast-iframe-w851L8m3HFuSVcHslP4DGKELp" scrolling="no" allowfullscreen="true" style="overflow: hidden; margin: 0px; border: 0px; display: inline-block; width: 100%; float: none; visibility: visible; height: 482px;"></iframe></div>
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните команду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir plates</code></pre>
        <p>создаст папку <code class="code">plates</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd plates</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">plates/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code plates.py</code> </pre>
        <p>чтобы создать файл с именем , <code class="code"> plates.py</code>в котором вы будете писать свою программу.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью команды <code class="code">python plates.py</code>. Введите  <code class="code">CS50</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code> Valid </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python plates.py</code>. Введите  <code class="code">CS05</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Invalid</code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python plates.py</code>. Введите  <code class="code">CS50P</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Invalid </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python plates.py</code>. Введите  <code class="code">PI3.14</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Invalid </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python plates.py</code>. Введите  <code class="code">H</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Invalid </code></pre>
            <li>Запустите вашу программу с помощью команды <code class="code">python plates.py</code>. Введите  <code class="code">OUTATIME</code> и нажмите Enter.Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Invalid </code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/plates
</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/plates</code></pre>
    </main>
</template>
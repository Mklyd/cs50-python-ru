<template>
    <main>
        <h1>Tip Calculator</h1>
        <blockquote>
            <p>А теперь мой калькулятор чаевых для волшебника.</p>
            <p>— Морти Сайнфелд</p>
        </blockquote>
        <p>В Соединенных Штатах принято оставлять официанту чаевые после обеда в ресторане, обычно это сумма, равная 15% или более от стоимости вашего блюда. Не беспокойтесь, мы написали для вас калькулятор чаевых ниже!</p>
        <pre class="highlight"><code><span style="color:#dc3545">def</span> <span style="color:#D2A8FF">main</span>():
    dollars = dollars_to_float(input("How much was the meal? "))
    percent = percent_to_float(input("What percentage would you like to tip? "))
    tip = dollars * percent
    <span style="color:#dc3545">print</span>(f"Leave ${tip:.2f}")
<span style="color:#dc3545">def</span> <span style="color:#D2A8FF">dollars_to_float</span>(d):
    # TODO
<span style="color:#dc3545">def</span> <span style="color:#D2A8FF">percent_to_float</span>(p):  
    # TODO
main()</code></pre>
        <p>Что ж, мы написали <em>большую</em> часть калькулятора чаевых для вас. К сожалению, мы не успели реализовать две функции:</p>
        <ul>
            <li><code class="code">dollars_to_float</code>, который должен принимать <code class="code">str</code> в качестве входных данных (в формате <code class="code">$##.##</code>, где каждый знак<code class="code">#</code> представляет собой десятичную цифру), удалять начальный знак <code class="code">$</code> и возвращать сумму в виде <code class="code">float</code>. Например, при вводе <code class="code">$50.00</code> он должен возвращать <code class="code">50.0</code>.</li>
            <li><code class="code">percent_to_float</code>, который должен принимать <code class="code">str</code> в качестве входных данных (в формате <code class="code">##%</code>, где каждый знак <code class="code">#</code> представляет собой десятичную цифру), удалять конечный знак<code class="code">%</code>, и возвращать процент в виде <code class="code">float</code>. Например, при вводе <code class="code">15%</code> он должен возвращать <code class="code">0.15</code>.</li>
        </ul>
        <p>Предположим, что пользователь будет вводить значения в ожидаемых форматах.</p>
        <details>
            <summary>Подсказки</summary>
            <ul>
                <li>Помните, что <code class="code">input</code> возвращает <code class="code">str</code>, согласно <a href="https://docs.python.org/3/library/functions.html#input">docs.python.org/3/library/functions.html#input</a>.</li>
                <li> Помните, что <code class="code">float</code> можно преобразовать в <code class="code">str</code>, а <code class="code">str</code> в <code class="code">float</code>, согласно <a href="https://docs.python.org/3/library/functions.html#float"> docs.python.org/3/library/functions.html#float</a>.</li>
                <li>Помните, что у <code class="code">str</code> есть несколько методов, согласно <a href="https://docs.python.org/3/library/stdtypes.html#string-methods"> docs.python.org/3/library/stdtypes.html#string-methods</a>.</li>
            </ul>
        </details>
        <h2>Демо</h2>
        <img src="../../assets/week0/demo_calculator.png" alt="">
        <h2>Перед тем как приступить к заданию</h2>
        <p>Перейдите по ссылке <a href="https://code.cs50.io/">code.cs50.io</a> и зайдите в свой аккаунт. Выполните комманду <code class="code">cd</code> в вашем терминальном окне. Ваше терминальное окно должно выглядить как представлено ниже:</p>
        <pre class="highlight"><code>$</code></pre>
        <p>Следующая команда</p>
        <pre class="highlight"><code>mkdir tip</code></pre>
        <p>создаст папку <code class="code">tip</code> в вашем рабочем пространстве.</p>
        <p>Затем выполните</p>
        <pre class="highlight"><code>cd tip</code></pre>
        <p>чтобы изменить директорию в папке. Вы должны увидеть в терминале <code class="code">tip/ $</code>. Вы можете сейчас выполнить</p>
        <pre class="highlight"><code>code tip.py</code> </pre>
        <p>чтобы создать файл с именем , в <code class="code"> tip.py</code> котором вы будете писать свою программу. Скопируйте и вставьте приведенный выше код в файл и завершите реализации <code class="code">dollars_to_float</code> и <code class="code">percent_to_float</code>, заменив каждую TODO одной или несколькими строками собственного кода.</p>
        <h2>Как проверить</h2>
        <p>Вот как протестировать код вручную:</p>
        <ul>
            <li>Запустите вашу программу с помощью комманды <code class="code">python tip.py</code>. Введите  <code class="code">$50.00</code>и нажмите Enter. Затем введите <code class="code">15%</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Leave $7.50</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python tip.py</code>. Введите  <code class="code">$100.00</code> и нажмите Enter.Затем введите <code class="code">18%</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Leave $18.00</code></pre>
            <li>Запустите вашу программу с помощью комманды <code class="code">python tip.py</code>. Введите  <code class="code">$15.00</code> и нажмите Enter. Затем введите <code class="code">25%</code> и нажмите Enter. Ваша программа должна вывести:</li>
            <pre class="highlight"><code>Leave $3.75</code></pre>
        </ul>
        <p>Вы можете выполнить приведенную ниже команду, чтобы проверить свой код с помощью <code>check50</code>,являющейся программой которой CS50 будет проверять ваш код при отправке. Но перед отправкой обязательно протестируйте свой код сами!</p>
        <pre  class="highlight"><code>check50 cs50/problems/2022/python/tip</code></pre>
        <p>Зеленые смайлики означают, что ваша программа прошла проверку! Красные означают, что ваша программа выводит что-то неожиданное. Посетите URL-адрес, который выводит <code class="code">check50</code>, чтобы увидеть ответ <code class="code">check50</code>, переданный вашей программе, какой вывод она ожидала и какой вывод фактически выдала ваша программа.</p>
        <h2>Как отправить</h2>
        <p> В своем терминале выполните следующее, чтобы отправить свою работу.</p>
        <pre class="highlight"><code>submit50 cs50/problems/2022/python/tip</code></pre>
    </main>
</template>
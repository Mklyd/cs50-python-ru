<template>
    <main>
        <h1>Лекция 0</h1>
        <ul>
            <li><a href="#exceptions">Исключения</a></li>
            <li><a href="#runtime-errors">Runtime Errors</a></li>
            <li><a href="#try"><code class="code">try</code></a></li>
            <li><a href="#else"><code class="code">else</code></a></li>
            <li><a href="#creating-a-function-to-get-an-integer">Создание функции для получения целого числа</a></li>
            <li><a href="#pass">pass</a></li>
            <li><a href="#summing-up">Подводя итог</a></li>
        </ul>
        <h2 id="exceptions">Исключения</h2>
        <ul>
            <li>Исключения — это то, что идет не так в нашем коде.</li>
            <li>В текстовом редакторе введите <code class="code">code hello.py</code>, чтобы создать новый файл. Введите следующий текст (включая преднамеренные ошибки):</li>
            <pre class="highlight"><code>print("hello, world)</code></pre>
            <span>Обратите внимание, что мы намеренно опустили кавычку.</span>
            <li>После запуска команды <code class="code">python hello.py</code> в окне терминала будет выводится ошибка. Компилятор сообщает, что это «синтаксическая ошибка»(syntax error). Синтаксические ошибки(syntax error) — это те ошибки, которые требуют от вас перепроверить правильность введенного кода.</li>
            <li>Вы можете узнать больше об <a href="https://docs.python.org/3/tutorial/errors.html">ошибках и исключениях(Errors and Exceptions)</a> в документации Python.</li>
        </ul>
        <h2 id="runtime-errors">Runtime Errors</h2>
        <ul>
            <li>Runtime Errors относятся к ошибкам, вызванным неожиданным поведением вашего кода. Например, возможно, вы хотели, чтобы пользователь ввел число, но вместо этого он ввел символ. Ваша программа может выдать ошибку из-за этого неожиданного ввода от пользователя.</li>
            <li>В окне терминала запустите команду <code class="code">code number.py</code>. Код в текстовом редакторе выглядит следующим образом:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
print(f"x is {x}")</code></pre>
            <span>Обратите внимание, что, включив <code class="code">f</code>, мы сообщаем Python интерполировать то, что находится в фигурных скобках, как значение <code class="code">x</code>. Далее, тестируя свой код, вы можете представить, как можно было бы легко ввести строку или символ вместо числа. Тем не менее, пользователь мог вообще ничего не набирать — просто нажимал клавишу ввода.</span>
            <li>Как программисты, мы должны защищаться, чтобы гарантировать, что наши пользователи вводят то, что мы ожидали. Мы могли бы рассмотреть  «крайние случаи», такие как <code class="code">-1</code>, <code class="code">0</code> или <code class="code">cat</code>.</li>
            <li>Если мы запустим эту программу и введем <code class="code">'cat'</code>, мы вдруг увидим <code class="code">ValueError: invalid literal for int() with base 10: 'cat'</code>. По существу, интерпретатору Python не нравится, что мы передали 'cat' в <code class="code">print</code> функцию.</li>
            <li>Эффективной стратегией исправления этой потенциальной ошибки было бы создание «обработки ошибок», чтобы гарантировать, что пользователь ведет себя так, как мы задумали.</li>
            <li>Вы можете узнать больше об <a href="https://docs.python.org/3/tutorial/errors.html">ошибках и исключениях(Errors and Exceptions)</a> в документации Python.</li>
        </ul>
        <h2 id="try">try</h2> 
        <ul>
            <li>В Python <code class="code">try</code> и <code class="code">except</code> — это способы проверки пользовательского ввода до того, как появится какая-либо ошибка. Измените код следующим образом:</li>
            <pre class="highlight"><code>try:
    x = int(input("What's x?"))
    print(f"x is {x}")
except ValueError:
    print("x is not an integer")</code></pre>
            <span>Обратите внимание, как при запуске этого кода ввод <code class="code">50</code> будет принят. Тем не менее, ввод <code class="code">cat</code> приведет к ошибке, видимой пользователю, с указанием, почему его ввод не был принят.</span>
            <li>Это все еще не лучший способ реализации этого кода. Обратите внимание, что мы пытаемся выполнить две строки кода. В соответствии с лучшей практикой, мы должны использовать в <code class="code">try</code>, как можно меньше количества строк кода, которые, по нашему мнению, могут дать сбой. Настройте свой код следующим образом:</li>
            <pre class="highlight"><code>try:
    x = int(input("What's x?"))
except ValueError:
    print("x is not an integer")

print(f"x is {x}")</code></pre>
            <span>Обратите внимание, что, хотя наша цель писать как можно меньше строк кода, достигнута, теперь мы сталкиваемся с новой ошибкой! Мы сталкиваемся с <code class="code">NameError</code>, где <code class="code">x is not defined</code>. Посмотрите на этот код и подумайте: почему x в некоторых случаях может быть не определен?</span>
            <li>Действительно, если вы проверите порядок операции справа налево в коде<code class="code">x = int(input("What's x?"))</code>, он может принять неправильно введенный символ и попытаться присвоить его как целое число. Если присвоение не удается, <code class="code">x</code> никогда не будет определен. Следовательно, в нашей последней строке кода не нужно печатать x.</li>
        </ul>
        <h2 id="else">else</h2>
        <ul>
            <li>Оказывается, есть еще один способ реализации <code class="code">try</code>, который мог бы отлавливать ошибки такого характера.</li>
            <li>Настройте свой код следующим образом:</li>
            <pre class="highlight"><code>try:
    x = int(input("What's x?"))
except ValueError:
    print("x is not an integer")
else:
    print(f"x is {x}")</code></pre>
            <span>Обратите внимание, что если исключения не возникнет, он запустит блок кода внутри <code class="code">else</code>. Запустив команду<code class="code">python number.py</code> и введя <code class="code">50</code>, вы заметите, что результат будет напечатан. Попробовав еще раз, на этот раз указав <code class="code">cat</code>, вы заметите, что программа перехватывает ошибку.</span>
            <li>Обдумывая улучшение нашего кода, обратите внимание, что мы немного грубим с нашим пользователем. Если наш пользователь не будет сотрудничать, мы просто завершим нашу программу. Подумайте, как мы можем использовать цикл, чтобы запрашвать x до тех пор пока пользователь не введет его! Улучшите свой код следующим образом:</li>
            <pre class="highlight"><code>while True:
    try:
        x = int(input("What's x?"))
    except ValueError:
        print("x is not an integer")
    else:
        break
print(f"x is {x}")</code></pre>
            <span>Обратите внимание, что <code class="code">while True</code> это бесконечный цикл. Если пользователю удастся ввести правильный ввод, мы можем выйти из цикла и затем распечатать вывод. Теперь пользователю, который вводит что-то неправильно, будет предложено ввести его снова.</span>
        </ul>
        <h2 id="creating-a-function-to-get-an-integer">Создание функции для получения целого числа</h2>
        <ul>
            <li>Конечно, мы хотели бы получить целое число от нашего пользователя. Измените код следующим образом:</li>
            <pre class="highlight"><code>def main():
    x = get_int()
    print(f"x is {x}")

def get_int():
    while True:
        try:
            x = int(input("What's x?"))
        except ValueError:
            print("x is not an integer")
        else:
            break
    return x

main()</code></pre>
            <span>Обратите внимание, что мы проявляем множество замечательных свойств. Во-первых, мы абстрагировались от возможности получить целое число. Теперь вся эта программа сводится к первым трем строкам программы.</span>
            <li>Тем не менее, мы можем улучшить эту программу. Подумайте, что еще вы могли бы сделать, чтобы улучшить эту программу. Измените код следующим образом:</li>
            <pre class="highlight"><code>def main():
    x = get_int()
    print(f"x is {x}")

def get_int():
    while True:
        try:
            x = int(input("What's x?"))
        except ValueError:
            print("x is not an integer")
        else:
            return x

main()
</code></pre>
            <span>Обратите внимание, что это <code class="code">return</code> не только вырвет вас из цикла, но и вернет значение.</span>
            <li>Некоторые люди могут возразить, что вы можете сделать следующее:</li>
            <pre class="highlight">
                <code>def main():
    x = get_int()
    print(f"x is {x}")

def get_int():
    while True:
        try:
            return int(input("What's x?"))
        except ValueError:
            print("x is not an integer")

main()</code>
            </pre>
            <span>Обратите внимание, что это делает то же самое, что и предыдущая итерация нашего кода, только с меньшим количеством строк.</span>
        </ul>
        <h2 id="pass">pass</h2>
        <ul>
            <li>Мы можем сделать так, чтобы наш код не предупреждал нашего пользователя, а просто повторно задавал ему наш наводящий вопрос, изменив наш код следующим образом:</li>
            <pre class="highlight">
                <code>def main():
    x = get_int()
    print(f"x is {x}")

def get_int():
    while True:
        try:
            return int(input("What's x?"))
        except ValueError:
            pass

main()</code>
            </pre>
            <span>Обратите внимание, что наш код по-прежнему будет работать, но не будет повторно информировать пользователя об их ошибке. В некоторых случаях вам нужно четко указать пользователю, какая ошибка возникает. В других случаях вы можете решить, что просто хотите снова попросить их ввести данные.</span>
            <li>Последнее уточнение, которое может улучшить реализацию get_int функции. Прямо сейчас обратите внимание, что в настоящее время мы полагаемся на систему чести, что x находится как в функции main, так и в функции get_int. Вероятно, мы хотим передать подсказку, которую пользователь увидит, когда его попросят ввести данные. Измените код следующим образом.</li>
            <pre class="highlight">
                <code>def main():
    x = get_int("What's x? ")
    print(f"x is {x}")

def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            pass

main()</code>
            </pre>
            <li>Вы можете узнать больше в документации Python о <a href="https://docs.python.org/3/tutorial/controlflow.html#pass-statements"><code class="code">pass</code></a>.</li>
        </ul>
        <h2 id="summing-up">Подводя итог</h2>
        <p>Ошибки в вашем коде неизбежны. Однако у вас есть возможность использовать то, что вы узнали сегодня, чтобы предотвратить эти ошибки. На этой лекции вы узнали о…</p>
        <ul>
            <li>Исключения</li>
            <li>Value Errors</li>
            <li>Runtime Errors</li>
            <li><code class="code">try</code></li>
            <li><code class="code">else</code></li>
            <li><code class="code">pass</code></li>
        </ul>
    </main>
</template>



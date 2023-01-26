<template>
    <main>
        <h1>Лекция 1</h1>
        <ul>
            <li>Условные выражения</li>
            <li>Оператор if</li>
            <li>Управление потоком, elif, and else</li>
            <li>or</li>
            <li>and</li>
            <li>Modulo</li>
            <li>Создание функции для определении четности числа</li>
            <li>Pythonic</li>
            <li>match</li>
            <li><a href="#summing-up">Подводя итог</a></li>
        </ul>
        <h2>Условные выражения</h2>
        <ul>
            <li>Условные выражения позволяют вам, программисту, разрешить вашей программе принимать решения: как если бы у вашей программы был выбор между левым или правым путем в зависимости от определенных условий</li>
            <li>В Python встроен набор «операторов», с помощью которых можно задавать математические вопросы.</li>
            <li><code class="code">></code> и <code class="code">&lt;</code> символы, вероятно, вам хорошо знакомы.</li>
            <li><code class="code">>=</code> означает «больше или равно».</li>
            <li><code class="code">&lt;=</code> означает «меньше или равно».</li>
            <li><code class="code">==</code> означает «равно», обратите внимание на двойной знак равенства! Один знак равенства будет присваивать значение. Двойной знак равенства используются для сравнения переменных.</li>
            <li><code class="code">!= </code>означает «не равно».</li>
            <li>Условные операторы сравнивают левое выражение с правым выражением.</li>
        </ul>
        <h2>Оператор if</h2>
        <ul>
            <li>В окне терминала введите <code class="code">code compare.py</code>. Это создаст новый файл с именем «compare».</li>
            <li>В окне текстового редактора начните со следующего:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x &lt; y:
    print("x is less than y")</code></pre>
            <span>Обратите внимание, как ваша программа принимает ввод пользователя как для x, так и для y, преобразуя их в целые числа и сохраняя их в соответствующие переменные x и y. Затем  оператор <code class="code">if</code> сравнивает x и y. Если условие <code class="code">x &lt; y</code> выполнено, выполняется функция <code class="code">print</code>.</span>
            <li>Операторы if используют <code class="code">bool</code> или логические значения (true или false), чтобы решить, выполнять код или нет. Если утверждение <code class="code">x > y</code> верно, компилятор зарегистрирует его как true и выполнит код.</li>
        </ul>
        <h2>Управление потоком, elif, and else</h2>
        <ul>
            <li>Далее измените свой код следующим образом:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x &lt; y:
    print("x is less than y")
if x > y:
    print("x is greater than y")
if x == y:
    print("x is equal to y")</code></pre>
            <span>Обратите внимание, как выглядит серия if утверждений. Сначала if оценивается первое утверждение. Затем второй if оператор выполняет свою проверку. Наконец, последний if оператор выполняет проверку. Этот поток решений называется «поток управления»(control flow).</span>
            <li>Наш код можно представить следующим образом:</li>
            <img src="../../assets/week1/note1_1.png" alt="">
            <li>Эту программу можно улучшить, если не задавать три последовательных вопроса. Ведь все три вопроса могут не иметь верный ответ! Измените свою программу следующим образом:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x &lt; y:
    print("x is less than y")
elif x > y:
    print("x is greater than y")
elif x == y:
    print("x is equal to y")</code></pre>
            <span>Обратите внимание, что использование <code class="code">elif</code> позволяет программе принимать меньше решений. Сначала проверяется <code class="code">if</code>. Если это утверждение окажется верным, все <code class="code">elif</code> утверждения вообще не будут выполняться. Однако, если <code class="code">if</code> проверяется и оказывается ложным, будет проверяться первый <code class="code">elif</code>. Если утверждение будет верным, последняя проверка выполняться не будет.</span>
            <li>Наш код можно представить следующим образом:</li>
            <img src="../../assets/week1/note1_2.png" alt="">
            <li>Хотя ваш компьютер может не заметить разницы в скорости между нашей первой программой и этой исправленной программой, подумайте, об онлайн-сервере, выполняющий миллиарды или триллионы таких вычислений каждый день, определенно такое небольшое кодовое решение может повлиять на производительность.</li>
            <li>И последнее улучшение, которое мы можем внести в нашу программу. Обратите внимание, насколько логически выполнение<code class="code">elif x == y</code>проверки не является обязательным. В конце концов, если логически x не меньше y И x не больше y, x ДОЛЖЕН равняться y. Поэтому нам не нужно проверять <code class="code">elif x == y</code>. Мы можем создать «универсальный» результат по умолчанию, используя else оператор. Мы можем переписать код следующим образом:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x &lt; y:
    print("x is less than y")
elif x > y:
    print("x is greater than y")
else:
    print("x is equal to y")</code></pre>
            <span>Обратите внимание, как относительная сложность этой программы уменьшилась благодаря нашей редакции.</span>
            <li>Наш код можно представить следующим образом:</li>
            <img src="../../assets/week1/note1_3.png" alt="">
            </ul>
            <h2>or</h2>
            <ul>
                <li><code class="code">or</code> позволяет вашей программе выбирать между одной или несколькими альтернативами. Например, мы могли бы дополнительно отредактировать нашу программу следующим образом:</li>
                <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x &lt; y or x > y:
    print("x is not equal to y")
else:
    print("x is equal to y")</code></pre>
                <span>Обратите внимание, что результат нашей программы тот же, но сложность уменьшилась, а эффективность нашего кода увеличилась.</span>
                <li>На данный момент наш код довольно хорош. Однако можно ли еще улучшить конструкцию? Мы могли бы дополнительно отредактировать наш код следующим образом:</li>
                <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x != y:
    print("x is not equal to y")
else:
    print("x is equal to y")</code></pre>
                <span>Обратите внимание, что мы полностью удалили <code class="code">or</code> и просто спросили: «Разве x не равно y?»(x is not equal to y) Мы задаем один и только один вопрос. Очень эффективно!</span>
                <li>Для иллюстрации мы также можем изменить наш код следующим образом:</li>
            <pre class="highlight"><code>x = int(input("What's x? "))
y = int(input("What's y? "))

if x == y:
    print("x is equal to y")
else:
    print("x is not equal to y")</code></pre>
                <span>Обратите внимание, что оператор <code class="code">==</code> проверяет, равны ли друг другу то, что находится слева и справа. Использование двойного знака равенства очень важно. Если вы используете только один знак равенства, компилятор, скорее всего, выдаст ошибку.</span>
                <li>Наш код можно проиллюстрировать следующим образом:</li>
                <img src="../../assets/week1/note1_4.png" alt="">
            </ul>
            <h2>and</h2>
            <ul>
                <li>Подобно <code class="code">or</code>, <code class="code">and</code> можно использовать в условных операторах.</li>
                <li>Выполнить в окне терминала <code class="code">code grade.py</code>. Заполните новую программу следующим образом:</li>
                <pre class="highlight"><code>score = int(input("Score: "))

if score >= 90 and score &lt;= 100:
    print("Grade: A")
elif score >=80 and score &lt; 90:
    print("Grade: B")
elif score >=70 and score &lt; 80:
    print("Grade: C")
elif score >=60 and score &lt; 70:
    print("Grade: D")
else:
    print("Grade: F")</code></pre>
                <span>Обратите внимание, что при выполнении <code class="cod">python grade.py</code> вы сможете ввести балл и получить оценку. Однако обратите внимание, на возможные ошибки.</span>
                <li>Как правило, мы никогда не доверяем нашему пользователю вводить правильную информацию. Мы могли бы улучшить наш код следующим образом:</li>
                <pre class="highlight"><code>  score = int(input("Score: "))

if 90 &lt;= score &lt;= 100:
    print("Grade: A")
elif 80 &lt;= score &lt; 90:
    print("Grade: B")
elif 70 &lt;= score &lt; 80:
    print("Grade: C")
elif 60 &lt;= score &lt; 70:
    print("Grade: D")
else:
    print("Grade: F")</code></pre>
                <span>Обратите внимание на то, как Python позволяет вам связывать операторы и условия способом, совершенно необычным для других языков программирования.</span>
                <li>Тем не менее, мы можем еще больше улучшить нашу программу:</li>
                <pre class="highlight"><code>score = int(input("Score: "))

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")</code></pre>
                <span>Обратите внимание, как улучшилась программа за счет меньшего количества вопросов. Это делает нашу программу более легкой для чтения и гораздо более удобной в обслуживании в будущем.</span>
                <li>Вы можете подробнее узнать о <a href="https://docs.python.org/3/tutorial/controlflow.html">control flow</a> в документации Python </li>
            </ul>
            <h2>Modulo</h2>
            <ul>
                <li>В математике паритет означает, является ли число четным или нечетным.</li>
                <li>Оператор по модулю <code class="code">%</code> в программировании позволяет увидеть, делятся ли два числа нацело или делятся и имеют остаток.</li>
                <li>Например, <code class="code">4 % 2</code> даст ноль, потому что делится без остатка. Однако <code class="code">3 % 2</code> не делится без остатка и даст число, отличное от нуля!</li>
                <li>В окне терминала создайте новую программу, набрав <code class="code">code parity.py</code>. В окне текстового редактора введите код следующим образом:</li>
                <pre class="highlight"><code>x = int(input("What's x? "))

    if x % 2 == 0:
        print("Even")
    else:
        print("Odd")</code></pre>
                <span>Обратите внимание, как наши пользователи могут ввести любое число, чтобы увидеть, четное оно или нечетное.</span>
            </ul>
            <h2>Создание функции для определении четности числа</h2>
            <ul>
                <li>Как обсуждалось в лекции 0, вам будет полезно создать собственную функцию!</li>
                <li>Мы можем создать функцию для проверки того, является ли число четным или нечетным. Настройте свой код следующим образом:</li>
                <pre class="highlight"><code>def main():
    x = int(input("What's x? ")
    if is_even(x):
        print("Even")
    else:
        print("Odd")

def is_even(n):
    if n % 2 == 0:
        return True
    else:
        return False

main()</code></pre>
            <span>Обратите внимание, что одна из причин, по которой наше <code class="code">if</code> утверждение <code class="code">is_even(x)</code> работает, даже несмотря на то, что там нет оператора. Это потому, что наша функция возвращает bool(или логическое значение), true или false обратно в основную функцию. Оператор <code class="code">if</code> просто проверяет, является ли x из функции <code class="code">is_even</code> true  или false.</span>
            </ul>
            <h2>Pythonic</h2>
            <ul>
                <li>В мире программирования есть типы программирования, которые по своей природе называются «Pythonic». То есть существуют способы программирования, которые иногда встречаются только в программировании на Python. Рассмотрим следующую модификацию нашей программы:</li>
                <pre class="highlight"><code>def main():
    x = int(input("What's x? ")
    if is_even(x):
        print("Even")
    else:
        print("Odd")


def is_even(n):
    return True if n % 2 == 0 else False


main()</code></pre>
                <span>Обратите внимание, что этот оператор возврата в нашем коде почти похож на предложение на английском языке. Это уникальный способ кодирования, встречающийся только в Python.</span>
                <li>Мы можем дополнительно пересмотреть наш код и сделать его более читабельным:</li>
                <pre class="highlight"><code>def main():
    x = int(input("What's x? ")
    if is_even(x):
        print("Even")
    else:
        print("Odd")


def is_even(n):
    return n % 2 == 0


main()</code></pre>
                <span>Обратите внимание, что программа провеярет <code class="code">n % 2 == 0</code>как true или false и возвращает это функции main.</span>
            </ul>
            <h2>match</h2>
            <ul>
                <li>Подобно операторам <code class="code">if</code>, <code class="code">elif</code> и <code class="code">else</code>, <code class="code">match</code> оператор можно использовать для условного запуска кода, соответствующего определенным значениям.</li>
                <li>Рассмотрим следующую программу:</li>
                <pre class="highlight"><code>  name = input("What's your name? ")

if name == "Harry":
    print("Gryffindor")
elif name == "Hermione":
    print("Gryffindor")
elif name == "Ron": 
    print("Gryffindor")
elif name == "Draco":
    print("Slytherin")
else:
    print("Who?")</code></pre>
                <span>Обратите внимание, что первые три условных оператора выводят один и тот же ответ.</span>
                <li>Мы можем немного улучшить этот код, используя ключевое слово <code class="code">or</code>:</li>
                <pre class="highlight"><code> name = input("What's your name? ")

if name == "Harry" or name == "Hermione" or name == "Ron": 
    print("Gryffindor")
elif name == "Draco":
    print("Slytherin")
else:
    print("Who?")</code></pre>
                <span>Обратите внимание, что количество  операторов <code class="code">elif</code> уменьшилось, что улучшило читаемость нашего кода.</span>
                <li>В качестве альтернативы мы можем использовать операторы <code class="code">match</code> для сопоставления имен с домами. Рассмотрим следующий код:</li>
                <pre class="highlight"><code>name = input("What's your name? ")

match name: 
    case "Harry":
        print("Gryffindor")
    case "Hermione":
        print("Gryffindor")
    case "Ron": 
        print("Gryffindor")
    case "Draco":
        print("Slytherin")
    case _:
        print("Who?")</code></pre>
                <span>Обратите внимание на использование <code class="code">_</code> символа в последнем случае. Это будет соответствовать любому другому вводу, что приведет к поведению, аналогичному поведению  оператора <code class="code">else</code>.</span>
                <li>Оператор <code class="code">match</code> сравнивает значение, следующее за  ключевым словом <code class="code">match</code>, с каждым из значений, следующих за  ключевыми словами <code class="code">case</code>. В случае обнаружения совпадения выполняется соответствующий участок кода с отступом, и программа останавливает сравнение.</li>
                <li>Мы можем улучшить код:</li>
                <pre class="highlight"><code> name = input("What's your name? ")

match name: 
    case "Harry" | "Hermione" | "Ron":
        print("Gryffindor")
    case "Draco":
        print("Slytherin")
    case _:
        print("Who?")</code></pre>
                <span>Обратите внимание на использование одной вертикальной черты <code class="code">|</code>. Подобно ключевому слову <code class="code">or</code>, это позволяет нам проверять несколько значений в одном  выражении <code class="code">case</code>.</span>
            </ul>
        <h2 id="summing-up">Подводя итог</h2>
        <p>Теперь у вас есть возможность в Python использовать условные операторы, чтобы задавать вопросы, и ваша программа выполняет соответствующие действия. В этой лекции мы обсудили…</p>
        <ul>
            <li>Условные выражения;</li>
            <li>Оператор if;</li>
            <li>Управление потоком, elif, and else;</li>
            <li>or;</li>
            <li>and;</li>
            <li>modulo;</li>
            <li>Создание функции;</li>
            <li>Pythonic кодирование</li>
            <li>и match</li>
        </ul>
    </main>
</template>
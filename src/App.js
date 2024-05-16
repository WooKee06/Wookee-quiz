import React from 'react'
import './index.scss'

const questions = [
	{
		title:
			'Максимально возможная интеграция программных продуктов с другими программами, обеспечение обмена данными в общих форматах представления (экспорт/импорт баз данных, внедрение или связывание объектов обработки и др.) означает их... ',
		variants: [
			'модифицируемость',
			'эффективность ',
			'мобильность',
			'коммуникативность ',
		],
		correct: 3,
	},
	{
		title:
			'Наличие дружественного интерфейса, контекстно-зависимой подсказки, хорошей документации является таким показателем качества программного продукта, как ...  ',
		variants: [
			'коммуникативность',
			'эффективность',
			'мобильность ',
			' учет человеческого фактора  ',
		],
		correct: 3,
	},
	{
		title:
			'В соответствии с ГОСТ 19.102-77 детальное описание действий в виде:  1)постановки задачи,  2)выбора критериев эффективности,  3)проведения предварительных научно-исследовательских работ,  4)разработки технического задания, определяет содержание этапа модели ЖЦ ...  ',
		variants: [
			'Эскизный проект ',
			'Технический проект ',
			'Техническое задание ',
			'Рабочий проект  ',
		],
		correct: 0,
	},
	{
		title:
			'Наличие обратных связей между этапами жизненного цикла, определяющих возможность проведения проверок и корректировок проектируемого ПС на каждой стадии разработки, является основной особенностью ...  ',
		variants: [
			'каскадной модели жизненного цикла  ',
			'итерационной модели жизненного цикла  ',
			'спиральной модели жизненного цикла ПО 18  ',
			'модели жизненного цикла UML ',
		],
		correct: 1,
	},
	{
		title:
			'Функционирование программного продукта в соответствии с техническим заданием соответствует характеристике эксплуатационных требований ...  ',
		variants: [
			'правильность',
			'универсальность',
			'надежность',
			'адаптируемость ',
		],
		correct: 2,
	},
	{
		title:
			'Обеспечение правильности результатов при наличии различного рода сбоев соответствует характеристике эксплуатационных требований ...  ',
		variants: [
			'правильность ',
			'универсальность',
			'надежность',
			'защищенность  ',
		],
		correct: 3,
	},
	{
		title:
			'Обеспечение погрешности результатов не выше заданной соответствует характеристике эксплуатационных требований...  ',
		variants: [
			'правильность ',
			'проверяемость ',
			'точность результатов ',
			'защищенность ',
		],
		correct: 2,
	},
	{
		title: 'Функциональная диаграмма имеет аббревиатуру ...  ',
		variants: ['ERD', 'SADT  ', 'DFD ', 'STD '],
		correct: 2,
	},
	{
		title:
			'Для описания основных (стандартных) типов данных на языке С++ определены следующие ключевые слова...  ',
		variants: [
			'int, char, bool, double, void ',
			'int, char, float, double, bool ',
			'int, wchar_t, float, double, char ',
		],
		correct: 1,
	},
	{
		title:
			'При обращении к функции в соответствии с требованиями хорошего стиля программирования рекомендуется (но не обязательно), чтобы ... ',
		variants: [
			'имена формальных и фактических параметров были различными  ',
			'количество формальных параметров соответствовало количеству фактических параметров  ',
			' типы формальных параметров соответствовали типам фактических параметров ',
			' порядок перечисления фактических параметров соответствовал порядку перечисления формальных параметров  ',
		],
		correct: 1,
	},
	{
		title:
			'В объектно-ориентированной среде программирования обработчики любых событий для компонентов размещаются в окне ...',
		variants: ['Формы ', 'Инспектора объектов ', 'Кода ', 'Дерева объектов '],
		correct: 2,
	},
	{
		title:
			'В объектно-ориентированной среде программирования к любому компоненту в программе можно обратиться по его свойству ...  ',
		variants: ['Caption ', 'Align ', 'Кода ', 'Name '],
		correct: 2,
	},
	{
		title: 'Абстрактным называется класс, который ...',
		variants: [
			'не содержит функций ',
			'не содержит переменных ',
			'содержит хотя бы одну виртуальную функцию  ',
			'содержит хотя бы одну чисто виртуальную функцию   ',
		],
		correct: 1,
	},
	{
		title: 'Модульное тестирование предполагает ... ',
		variants: [
			'тестирование минимально возможного для тестирования компонента, например, отдельного класса или функции   ',
			'поиск каких-либо проблем в интерфейсах и взаимодействии между компонентами программы ',
			'тестирование интегрированной системы на ее соответствие исходным требованиям  ',
			'имитацию реальной работы с системой штатными разработчиками либо реальной работы с системой потенциальными пользователями/заказчиком на стороне разработчика  ',
		],
		correct: 1,
	},
	{
		title: 'Интеграционное тестирование предполагает ... ',
		variants: [
			'тестирование минимально возможного для тестирования компонента, например отдельного класса или функции  ',
			'поиск каких-либо проблем в интерфейсах и взаимодействии между компонентами программы  ',
			'тестирование интегрированной системы на ее соответствие исходным требованиям',
			'распространение версии с ограничениями (по функциональности или времени работы) для некоторой группы лиц с тем, чтобы убедиться, что продукт содержит достаточно мало ошибок  ',
		],
		correct: 1,
	},
	{
		title: 'Системное тестирование предполагает ...  ',
		variants: [
			'поиск каких-либо проблем в интерфейсах и взаимодействии между компонентами программы  ',
			'тестирование интегрированной системы на ее соответствие исходным требованиям ',
			'имитацию реальной работы с системой штатными разработчиками либо реальной работы с системой потенциальными пользователями/заказчиком на стороне разработчика ',
			'распространение версии с ограничениями (по функциональности или времени работы) для некоторой группы лиц с тем, чтобы убедиться, что продукт содержит достаточно мало ошибок  ',
		],
		correct: 3,
	},
	{
		title: 'Альфа-тестирование предполагает ... ',
		variants: [
			'поиск каких-либо проблем в интерфейсах и взаимодействии между компонентами программы ',
			'тестирование интегрированной системы на ее соответствие исходным требованиям  ',
			'имитацию реальной работы с системой штатными разработчиками либо реальной работы с системой потенциальными пользователями/заказчиком на стороне разработчика  ',
			'распространение версии с ограничениями (по функциональности или времени работы) для некоторой группы лиц с тем, чтобы убедиться, что продукт содержит достаточно мало ошибок ',
		],
		correct: 2,
	},
	{
		title: ' Бета-тестирование предполагает ...  ',
		variants: [
			'поиск каких-либо проблем в интерфейсах и взаимодействии между компонентами программы ',
			'тестирование интегрированной системы на ее соответствие исходным требованиям  ',
			'имитацию реальной работы с системой штатными разработчиками либо реальной работы с системой потенциальными пользователями/заказчиком на стороне разработчика  ',
			'распространение версии с ограничениями (по функциональности или времени работы) для некоторой группы лиц с тем, чтобы убедиться, что продукт содержит достаточно мало ошибок ',
		],
		correct: 2,
	},
	{
		title:
			'Видимость переменных и методов класса только в пределах данного модуля определяет спецификатора доступа ...  ',
		variants: ['private ', 'protected', 'public ', 'published '],
		correct: 1,
	},
	{
		title:
			'Видимость переменных и методов класса в любом месте программы определяет спецификатора доступа ...',
		variants: ['private ', 'protected', 'public ', 'published '],
		correct: 2,
	},
	{
		title:
			'Процесс, в ходе которого один объект может приобретать свойства другого, называется... ',
		variants: [
			'наследование ',
			'инкапсуляция ',
			'полиморфизм ',
			'динамический полиморфизм  ',
		],
		correct: 2,
	},
	{
		title:
			'На основе наследования и виртуальных функций реализуется принцип ... ',
		variants: [
			'наследования',
			'инкапсуляция ',
			'статического полиморфизма ',
			'динамического полиморфизма  ',
		],
		correct: 2,
	},
	{
		title:
			'В приведённом коде измените или добавьте один символ чтобы код напечатал 20 звёздочек - *. \nint i, N = 20; \nfor(i = 0; i < N; i--)printf("*");',
		variants: [
			'int i, N = 40;for(i = 0; i < N; i--)    printf("*"); ',
			'int i, N = 20;for(i = 0; i < N; N--)    printf("*");',
			'int i, N = 20;for(i = 20; i < N; i--)    printf("*");  ',
			'int i, N = 20;for(i = 19; i < N; i--)    printf("*");   ',
		],
		correct: 2,
	},
	{
		title: 'Какой индекс имеет последний элемент массива A[6]?',
		variants: ['int A[6];', 'int A[7];', 'int A[5]; ', 'int A[0];  '],
		correct: 2,
	},
	{
		title: 'Какими знаками заканчивается большинство строк кода в С++?',
		variants: [
			':   (двоеточие);',
			'.   (точка); ',
			';   (точка с запятой); ',
			',  (запятая)  ',
		],
		correct: 2,
	},
	{
		title:
			'Какой из перечисленных типов данных не является типом данных в С++? ',
		variants: ['real', 'int', 'double ', 'float'],
		correct: 0,
	},
	{
		title: 'Какая из следующих записей - правильный комментарий в С++? ',
		variants: [
			'*/ Комментарии */',
			'{комментарий}',
			'** Комментарий **',
			'/* комментарий */',
		],
		correct: 0,
	},
	{
		title: ' Класс - это: ',
		variants: [
			'любой тип данных, определяемый пользователем ',
			'тип данных, определяемый пользователем и сочетающий в себе данные и функции их обработки ',
			'структура, для которой в программе имеются функции работы с нею ',
		],
		correct: 1,
	},
	{
		title: 'Членами класса могут быть? ',
		variants: [
			'как переменные, так и функции, могут быть объявлены как private и как public ',
			'только переменные, объявленные как private ',
			'только функции, объявленные как private ',
			'только переменные и функции, объявленные как private ',
			'только переменные и функции, объявленные как public ',
		],
		correct: 1,
	},
	{
		title: 'Что называется конструктором? ',
		variants: [
			'метод, имя которого совпадает с именем класса и который вызывается автоматически при создании объекта класса ',
			'метод, имя которого совпадает с именем класса и который вызывается автоматически при объявлении класса (до создания объекта класса) ',
			'метод, имя которого необязательно совпадает с именем класса и который вызывается при создании объекта класса',
			' метод, имя которого совпадает с именем класса и который необходимо явно вызывать из головной программы при объявлении объекта класса ',
		],
		correct: 1,
	},
	{
		title: 'Объект - это',
		variants: [
			'переменная, содержащая указатель на класс',
			'экземпляр класса ',
			'класс, который содержит в себе данные и методы их обработки',
		],
		correct: 1,
	},
	{
		title: ' Отметьте правильные утверждения',
		variants: [
			'конструкторы класса не наследуются ',
			'конструкторов класса может быть несколько, их синтаксис определяется программистом',
			'конструкторов класса может быть несколько, но их синтаксис должен подчиняться правилам перегрузки функций ',
			'конструктор возвращает указатель на объект ',
			'конструктор не возвращает значение',
		],
		correct: 2,
	},
	{
		title: 'Что называется наследованием? ',
		variants: [
			'это механизм, посредством которого производный класс получает элементы родительского и может дополнять либо изменять их свойства и методы',
			'это механизм переопределения методов базового класса ',
			'это механизм, посредством которого производный класс получает все поля базового класса ',
			'это механизм, посредством которого производный класс получает элементы родительского, может их дополнить, но не может переопределить ',
		],
		correct: 0,
	},
	{
		title: 'Выберите правильные утверждения: ',
		variants: [
			'если элементы класса объявлены как private, то они доступны только наследникам класса, но не внешним функциям',
			'если элементы класса объявлены как private, то они недоступны ни наследникам класса, ни внешним функциям ',
			'если элементы объявлены как public, то они доступны наследникам класса, но не внешним функциям ',
			'если элементы объявлены как public, то они доступны и наследникам класса, и внешним функциям ',
		],
		correct: 1,
	},
	{
		title:
			'Возможность и способ обращения производного класса к элементам базового определяется ',
		variants: [
			'ключами доступа: private, public, protected в теле производного класса',
			'только ключом доступа protected в заголовке объявления производного класса',
			'ключами доступа: private, public, protected в заголовке объявления производного класса',
			'ключами доступа: private, public, protected в теле базового класса ',
		],
		correct: 2,
	},
	{
		title: 'Шаблон функции - это... ',
		variants: [
			'определение функции, в которой типу обрабатываемых данных присвоено условное обозначение ',
			'прототип функции, в котором вместо имен параметров указан условный тип',
			'определение функции, в котором указаны возможные варианты типов обрабатываемых параметров ',
			'определение функции, в котором в прототипе указан условный тип, а в определении указаны варианты типов обрабатываемых параметров ',
		],
		correct: 0,
	},
	{
		title: 'Выберите правильные утверждения: ',
		variants: [
			'по умолчанию члены класса имеют атрибут private ',
			'по умолчанию члены класса имеют атрибут public; ',
			'члены класса имеют доступ только к элементам public;',
			'элементы класса с атрибутом private доступны только членам класса ',
		],
		correct: 0,
	},
	{
		title: 'Переопределение операций имеет вид: ',
		variants: [
			'имя_класса, ключевое слово operation, символ операции',
			'имя_класса, ключевое слово operator, символ операции, в круглых скобках могут быть указаны аргументы ',
			'имя_класса, ключевое слово operator, список аргументов ',
			'имя_класса, два двоеточия, ключевое слово operator, символ операции ',
		],
		correct: 0,
	},
	{
		title: ' Полиморфизм – это : ',
		variants: [
			'средство, позволяющее использовать одно имя для обозначения действий, общих для родственных классов; ',
			'средство, позволяющее в одном классе использовать методы с одинаковыми именами;',
			'средство, позволяющее в одном классе использовать методы с разными именами для выполнения одинаковых действий ',
			'средство, позволяющее перегружать функции для работы с разными типами или разным количеством аргументов.',
		],
		correct: 1,
	},
	{
		title: 'Полиморфизм реализован через механизмы: ',
		variants: [
			'перегрузки функций, виртуальных функций, шаблонов ',
			'перегрузки функций, наследования методов, шаблонов ',
			'наследования методов, виртуальных функций, шаблонов ',
			' перегрузки функций, наследования, виртуальных функций. ',
		],
		correct: 1,
	},
	{
		title: 'Без какой библиотеки не будет работать ввод/вывод данных? ',
		variants: ['math', 'random', 'iostream', 'string'],
		correct: 2,
	},
	{
		title: 'Какая команда используется для ввода/вывода данных в C++? ',
		variants: ['readln /Writeln ', 'cin/cout', ' alert/ prompt'],
		correct: 1,
	},
]

function Result({ correct }) {
	const successList = [
		'https://i.pinimg.com/564x/22/1f/4a/221f4a3cdbb7b74d9374b1dcd6ac53ab.jpg',
		'https://i.pinimg.com/564x/92/b0/b2/92b0b27b3ee2c4f42528ac135f8965c1.jpg',
		'https://i.pinimg.com/564x/63/68/0b/63680bc7f5020f5446259126b2ce0de0.jpg',
		'https://i.pinimg.com/564x/ed/f2/7f/edf27fcb251e0fd992a2784e7ed6e95d.jpg',
		'https://i.pinimg.com/564x/0f/67/29/0f67293c02526a2cf19fe754ac80b889.jpg',
		'https://i.pinimg.com/564x/00/e2/39/00e2394cc29d9e8e53e3eb84a16da8c5.jpg',
		'https://i.pinimg.com/736x/c7/fb/02/c7fb025c2cc7b4e9f30a717488efbf0e.jpg',
		'https://i.pinimg.com/564x/30/a0/54/30a054cf9bf350b4715cc78ba6724031.jpg',
		'https://i.pinimg.com/564x/f4/1d/6e/f41d6e9dc95394f5d2a573ff90f4f681.jpg',
		'https://i.pinimg.com/564x/08/4a/cf/084acff920ead16b1906539455660092.jpg',
		'https://i.pinimg.com/originals/58/63/b2/5863b2517825b2fefd15cbd19f122711.jpg',
	]

	console.log(successList.length, ' successList')
	let randomNumber = Math.round(Math.random() * 10)
	console.log(randomNumber)

	return (
		<div className='result'>
			<img src={`${successList[randomNumber]}`} />
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<a href='https://wookee06.github.io/Wookee-quiz/'>
				<button className='resilt-btn'>Попробовать снова</button>
			</a>
		</div>
	)
}

const Game = ({ data, stepClick, step }) => {
	const percentage = Math.round((step / questions.length) * 100)

	return (
		<>
			<div className='steps'>
				<h2>{step}</h2>/<span>{questions.length}</span>
			</div>
			<div className='progress'>
				<div
					style={{ width: `${percentage}%` }}
					className='progress__inner'
				></div>
			</div>
			<h1>{data.title}</h1>
			<ul>
				{data.variants.map((text, i) => (
					<li onClick={() => stepClick(i)} key={text}>
						{text}
					</li>
				))}
			</ul>
		</>
	)
}

function App() {
	const [step, setStep] = React.useState(0)
	const [correct, setCorrect] = React.useState(0)
	const question = questions[step]

	const stepClick = i => {
		setStep(step + 1)

		if (i === question.correct) {
			setCorrect(correct + 1)
		}
	}

	return (
		<div className='App'>
			{step !== questions.length ? (
				<Game step={step} stepClick={stepClick} data={question} />
			) : (
				<Result correct={correct} />
			)}
		</div>
	)
}

export default App

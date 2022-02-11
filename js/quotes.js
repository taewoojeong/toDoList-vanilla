const quotes = [
	{
		quote:
			'비관론자는 모든 기회에서 어려움을 찾아내고, 낙관론자는 모든 어려움에서 기회를 찾아낸다.',
		author: '윈스턴 처칠',
	},
	{
		quote: '계획 없는 목표는 한낱 꿈에 불과하다.',
		author: '생텍쥐페리',
	},
	{
		quote: '사랑하는 것은 천국을 살짝 엿보는 것이다.',
		author: '카렌 선드',
	},
	{
		quote: '시작이 반이다.',
		author: '아리스토텔레스',
	},
	{
		quote: '내 사전에 불가능이란 단어는 없다',
		author: '나폴레옹',
	},
	{
		quote: '피할 수 없으면 즐겨라',
		author: '로버트 엘리엇',
	},
	{
		quote: '1퍼센트의 가능성, 그것이 나의 길이다',
		author: '나폴레옹',
	},
	{
		quote: '교육의 목적은 기계를 만드는 것이 아니라 인간을 만드는 데 있다',
		author: '루소',
	},
	{
		quote: '티끌 모아 태산',
		author: '공자',
	},
	{
		quote: '잘 살아라 그게 최고의 복수다',
		author: '탈무드',
	},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}-`;

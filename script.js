console.log('connected!');
let bulbs = document.querySelectorAll('.lightbulb');
let wrapper = document.querySelector('#wrapper');
let bulb1 = document.querySelector("#lightbulb1");
let bulb2 = document.querySelector("#lightbulb2");
let bulb3 = document.querySelector("#lightbulb3");
let bulb4 = document.querySelector("#lightbulb4");
let bulb5 = document.querySelector("#lightbulb5");
let lightsOutDiv = document.querySelector('#lightsout');
let button = document.querySelector('.button');
let count = 0;
let blackout = 0;
let winCount = 0;
let resultDiv = document.querySelector('#result');
let message = document.querySelector("#winner");


bulb1.addEventListener('click', e => {
		bulb5.classList.toggle('active');
	});

bulb2.addEventListener('click', e => {
		bulb5.classList.toggle('active');
		bulb2.classList.toggle('active');
	});

bulb3.addEventListener('click', e => {
		bulb1.classList.toggle('active');
		bulb3.classList.toggle('active');
		bulb4.classList.toggle('active');
	});

bulb4.addEventListener('click', e => {
		bulb5.classList.toggle('active');
		bulb2.classList.toggle('active');
	});

bulb5.addEventListener('click', e => {
		bulb1.classList.toggle('active');
	});

button.addEventListener('click', e => {
	count = 0;
	bulbs.forEach(bulb => {
		if(bulb.classList.contains('active')) {
			count+=1;
		}
	if(count === 0) {
		resultDiv.innerHTML = `All the lights are off!`;
	}
	else if(count !== 1) {
		resultDiv.innerHTML = `There are ${count} bulbs on!`;
	} 
	else {
		resultDiv.innerHTML = `There is ${count} bulb on!`;
	}
	resultDiv.classList.remove('hidden');
	})
})

bulbs.forEach((bulb) => {
	bulb.addEventListener('click', e => {
		blackout +=1;
		if(blackout > 10) {
			bulbs.forEach((bulb) => {	
				bulb.classList.add('hidden');
			})
			lightsOutDiv.innerHTML = `<h1>YOU HAD 10 ATTEMPTS. GAME OVER.</h1>`;
			lightsOutDiv.innerHTML += `<center><img src = 'sashay.gif'/></center>`;
			lightsOutDiv.classList.remove('hidden');
			button.classList.add('hidden');
			wrapper.classList.add('hidden');
		}
	})

})

document.addEventListener('click', e => {
	winCount = 0;
	bulbs.forEach((bulb) => {
		if(bulb.classList.contains('active')) {
			winCount += 1;
		}
		if(winCount === 5) {
			bulbs.forEach((bulb) => {	
				bulb.classList.add('hidden');
			})
			message.innerHTML = `<h1>YOU'RE A WINNER BABY<h1>`;
			message.innerHTML += `<center><img src ='rupaul.gif'/></center>`;
			message.classList.remove('hidden');
			button.classList.add('hidden');
			wrapper.classList.add('hidden');
		}
	})
})
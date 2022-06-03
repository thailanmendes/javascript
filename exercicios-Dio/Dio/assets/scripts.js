var count = 0;
var CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if(count > 0) {
        document.body.style.background = '#e2cd9f'
    }else if(count == 0){
        document.body.style.background = 'rgb(177, 225, 255)'
    }
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if(count < 0) {
        document.body.style.background = 'red'
    }else if(count == 0){
        document.body.style.background = 'rgb(177, 225, 255)'
    }
}




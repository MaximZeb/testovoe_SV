// группа меняющая названия у 12 блоков 
// 1
const rename = document.getElementById('name');
const btn_rename = document.querySelector('.btn_rename');

rename.addEventListener('click', function rnm() {
		
	const name = document.querySelector('.rename');

	name.style.display = 'block';
});

function renameBtn () {
	let inp = document.getElementById('renameInp').value;
	const name = document.querySelector('.rename');

	rename.innerHTML = inp;
	name.style.display = 'none';
}

btn_rename.addEventListener('click', renameBtn);

// 2
const rename2 = document.getElementById('name2');
const btn_rename2 = document.querySelector('.btn_rename2');

rename2.addEventListener('click', function rnm2() {
		
	const name2 = document.querySelector('.rename2');

	name2.style.display = 'block';
});

function renameBtn2 () {
	let inp2 = document.getElementById('renameInp2').value;
	const name2 = document.querySelector('.rename2');

	rename2.innerHTML = inp2;
	name2.style.display = 'none';
}

btn_rename2.addEventListener('click', renameBtn2);

// 3
const rename3 = document.getElementById('name3');
const btn_rename3 = document.querySelector('.btn_rename3');

rename3.addEventListener('click', function rnm3() {
		
	const name3 = document.querySelector('.rename3');

	name3.style.display = 'block';
});

function renameBtn3 () {
	let inp3 = document.getElementById('renameInp3').value;
	const name3 = document.querySelector('.rename3');

	rename3.innerHTML = inp3;
	name3.style.display = 'none';
}

btn_rename3.addEventListener('click', renameBtn3);

// 4
const rename4 = document.getElementById('name4');
const btn_rename4 = document.querySelector('.btn_rename4');

rename4.addEventListener('click', function rnm4() {
		
	const name4 = document.querySelector('.rename4');

	name4.style.display = 'block';
});

function renameBtn4 () {
	let inp4 = document.getElementById('renameInp4').value;
	const name4 = document.querySelector('.rename4');

	rename4.innerHTML = inp4;
	name4.style.display = 'none';
}

btn_rename4.addEventListener('click', renameBtn4);

// 5
const rename5 = document.getElementById('name5');
const btn_rename5 = document.querySelector('.btn_rename5');

rename5.addEventListener('click', function rnm5() {
		
	const name5 = document.querySelector('.rename5');

	name5.style.display = 'block';
});

function renameBtn5 () {
	let inp5 = document.getElementById('renameInp5').value;
	const name5 = document.querySelector('.rename5');

	rename5.innerHTML = inp5;
	name5.style.display = 'none';
}

btn_rename5.addEventListener('click', renameBtn5);

// 6
const rename6 = document.getElementById('name6');
const btn_rename6 = document.querySelector('.btn_rename6');

rename6.addEventListener('click', function rnm6() {
		
	const name6 = document.querySelector('.rename6');

	name6.style.display = 'block';
});

function renameBtn6 () {
	let inp6 = document.getElementById('renameInp6').value;
	const name6 = document.querySelector('.rename6');

	rename6.innerHTML = inp6;
	name6.style.display = 'none';
}

btn_rename6.addEventListener('click', renameBtn6);

// 7
const rename7 = document.getElementById('name7');
const btn_rename7 = document.querySelector('.btn_rename7');

rename7.addEventListener('click', function rnm7() {
		
	const name7 = document.querySelector('.rename7');

	name7.style.display = 'block';
});

function renameBtn7 () {
	let inp7 = document.getElementById('renameInp7').value;
	const name7 = document.querySelector('.rename7');

	rename7.innerHTML = inp7;
	name7.style.display = 'none';
}

btn_rename7.addEventListener('click', renameBtn7);

// 8
const rename8 = document.getElementById('name8');
const btn_rename8 = document.querySelector('.btn_rename8');

rename8.addEventListener('click', function rnm8() {
		
	const name8 = document.querySelector('.rename8');

	name8.style.display = 'block';
});

function renameBtn8 () {
	let inp8 = document.getElementById('renameInp8').value;
	const name8 = document.querySelector('.rename8');

	rename8.innerHTML = inp8;
	name8.style.display = 'none';
}

btn_rename8.addEventListener('click', renameBtn8);

// 9
const rename9 = document.getElementById('name9');
const btn_rename9 = document.querySelector('.btn_rename9');

rename9.addEventListener('click', function rnm9() {
		
	const name9 = document.querySelector('.rename9');

	name9.style.display = 'block';
});

function renameBtn9 () {
	let inp9 = document.getElementById('renameInp9').value;
	const name9 = document.querySelector('.rename9');

	rename9.innerHTML = inp9;
	name9.style.display = 'none';
}

btn_rename9.addEventListener('click', renameBtn9);

// 10
const rename10 = document.getElementById('name10');
const btn_rename10 = document.querySelector('.btn_rename10');

rename10.addEventListener('click', function rnm10() {
		
	const name10 = document.querySelector('.rename10');

	name10.style.display = 'block';
});

function renameBtn10 () {
	let inp10 = document.getElementById('renameInp10').value;
	const name10 = document.querySelector('.rename10');

	rename10.innerHTML = inp10;
	name10.style.display = 'none';
}

btn_rename10.addEventListener('click', renameBtn10);

// 11
const rename11 = document.getElementById('name11');
const btn_rename11 = document.querySelector('.btn_rename11');

rename11.addEventListener('click', function rnm11() {
		
	const name11 = document.querySelector('.rename11');

	name11.style.display = 'block';
});

function renameBtn11 () {
	let inp11 = document.getElementById('renameInp11').value;
	const name11 = document.querySelector('.rename11');

	rename11.innerHTML = inp11;
	name11.style.display = 'none';
}

btn_rename11.addEventListener('click', renameBtn11);

// 12
const rename12 = document.getElementById('name12');
const btn_rename12 = document.querySelector('.btn_rename12');

rename12.addEventListener('click', function rnm12() {
		
	const name12 = document.querySelector('.rename12');

	name12.style.display = 'block';
});

function renameBtn12 () {
	let inp12 = document.getElementById('renameInp12').value;
	const name12 = document.querySelector('.rename12');

	rename12.innerHTML = inp12;
	name12.style.display = 'none';
}

btn_rename12.addEventListener('click', renameBtn12);

// кнопка меню табличный вид

// список 
const menu = document.querySelector('.menu__list');
const ere = document.querySelector('.menu__list1')

menu.addEventListener('mouseover', function tnc () {
	ere.style.display = 'block';
});
menu.addEventListener('mouseout', function tnc () {
	ere.style.display = 'none';
});
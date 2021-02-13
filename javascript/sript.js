
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

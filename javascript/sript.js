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

//
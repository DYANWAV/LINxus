const input = document.querySelector("input");
const inputLink = document.querySelector(".input-link");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const text = input.value;
	const link = inputLink.value;

	if (link !== '') {
		const li = document.createElement("li");
        const div = document.createElement('div');
		const a = document.createElement("a");
        const url = document.createElement('a');

        div.setAttribute('class', 'flex');
        url.setAttribute('class', 'url');

        if(text == ''){
            a.textContent = 'Sin Título';
            url.textContent = link;
        }
        else{
            a.textContent = text;
            url.textContent = link;
        }
        

            
        
		a.setAttribute("href", link);
		a.setAttribute("target", "_blank");

        li.appendChild(div);
        div.appendChild(a);
        div.appendChild(url);
		// li.appendChild(a);
        // li.appendChild(url);
		li.appendChild(addDeleteBtn());
		ul.appendChild(li);

		input.value = "";
		inputLink.value = "";
		empty.style.display = "none";
	}
});

function addDeleteBtn() {
	const deleteBtn = document.createElement("button");

	deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
	deleteBtn.className = "btn-delete";

	deleteBtn.addEventListener("click", (e) => {
		const item = e.target.parentElement;
		ul.removeChild(item);

		const items = document.querySelectorAll("li");

		if (items.length === 0) {
			empty.style.display = "block";
		}
	});

	return deleteBtn;
}

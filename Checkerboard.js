function toggleRedChip () {
	if(this.childNodes.length == 0){
		addChip(this);
	}
	else{
		removeChip(this);
	}
}

function removeChip (td) {
	td.removeChild(td.childNodes[0]);
}

function addChip (td) {
	var img = document.createElement("img");
	img.src = "checker.gif";
	td.appendChild(img);
}

function onLoadBody () {
	var table = document.getElementById('board');
	var td;
	for (var i = 0; i < table.rows.length; i++) {
		
		for (var j = 0; j < table.rows[i].cells.length; j++) {

			/*Even Rows*/
			if(i%2==0){ 
				if(j%2 == 0){ //even columns
					table.rows[i].cells[j].style.backgroundColor = "red";
				}else{
					table.rows[i].cells[j].style.backgroundColor = "black";	
					td = table.rows[i].cells[j];
					td.onclick = toggleRedChip;
				}
			}

			/*Odd Rows*/
			else{
				if(j%2 != 0){
					table.rows[i].cells[j].style.backgroundColor = "red";
				}else{
					table.rows[i].cells[j].style.backgroundColor = "black";	
					td = table.rows[i].cells[j];
					td.onclick = toggleRedChip;
					
				}
			}
			
		};

	};

}	



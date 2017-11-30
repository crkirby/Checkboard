function onLoadBody () {
	var table = document.getElementById('board');
	table.style.border="1px solid black";
	
	for (var i = 0; i < table.rows.length; i++) {
		
		for (var j = 0; j < table.rows[i].cells.length; j++) {

			/*Even Rows*/
			if(i%2==0){ 
				if(j%2 == 0){ //even columns
					table.rows[i].cells[j].innerHTML = "red";
				}else{
					table.rows[i].cells[j].innerHTML = "black";	
				}
			}

			/*Odd Rows*/
			else{
				if(j%2 != 0){
					table.rows[i].cells[j].innerHTML = "red";
				}else{
					table.rows[i].cells[j].innerHTML = "black";	
				}
			}
			
		};

	};

}	

function toggleRedChip (square) {
	
}

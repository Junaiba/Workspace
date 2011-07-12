var grid;
/****************************Initialising Main Functions********************************************/

$(function(){
   createArray(20,20);
	createTable(20,20);
	updateTable();
});

/**************************************************************************************************/

/**************function to create a table of m rows and n columns and to add class****************/

function createTable(m,n){
	for(i=0;i<m;i++){
		$('.rtable').append('<tr></tr>');
	}
	$('.rtable tr').append(function(index,html){
		var str ="";
		for(i=0;i<n;i++){
			var classname =  index + "-" + i;
			str+="<td class=" + classname +"></td>";
		}
		return str;
	});
}

/***************************************************************************************************/
	
/************function to get colours on the  table on click********************************************/

function updateTable(){

    rc = grid.length;
    cc = grid[0].length;
    for (var row=0;row<rc;row++){
        for(var col=0;col<cc;col++){
        	if(grid[row][col] == 1){
			    setRed(row,col);
			  }
			if(grid[row][col] == 2){
				setBlue(row,col);
				}
        }
    }
}

/***************************************************************************************************/


/***********Function on clicking the respective cell**************************************************/
var turn = 1;
$(function(){
	$('td').click(function(){
		val = $(this).attr('class');
		var myArr = val.split("-");
		var row = parseInt(myArr[0]);
		var col = parseInt(myArr[1]);
		isClickable();
		if(grid[row][col] == 0){
			grid[row][col] = turn;
			turn = turn == 1? 2 : 1;
			
			updateTable();
		}
		else
			alert("You cant modify an occupied cell");
});
});

/***************************************************************************************************/


/************function to set colours on the  table on click********************************************/

function setRed(row,col){
	var new_class = "."+ row +"-"+col;
	$(new_class).css("background","red");	
}

function setBlue(row,col){
	var new_class = "."+ row +"-"+col;
	$(new_class).css("background","#00ff00");
}
	
/***************************************************************************************************/


/*******************function to create array*********************************************************/

function createArray(m, n) {
    grid = new Array(m);

    for(var i=0;i<m;i++){
      grid[i] = new Array(n);
    }

    for (var row=0;row<m;row++){
        for(var col=0;col<n;col++){
            grid[row][col] = 0;
        }
    }
    
    grid[m-1][0] = 1;
    grid[0][n-1] = 2;

}

/***************************************************************************************************/


/********************************function to check whether cell is clickable or not*********************/

function isClickable(){
	alert(turn);
}
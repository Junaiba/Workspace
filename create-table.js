var grid;
/****************************Initialising Main Functions********************************************/

$(function(){
   createArray(5,4);
	createTable(5,4);
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

/***************************************************************************************************
 * updateTable
 * Update the html table with  the contents of the grid
 ***************************************************************************************************/

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
		//alert(grid[row][col]);
		
	    if(isClickable(row,col,turn)){
			grid[row][col] = turn;
			
			turn = turn == 1? 2 : 1;
			updateTable();
			updateAdjacentCell(row,col,turn);
		}
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

function setNewBlue(row,col){
	var new_class = "."+ row +"-"+col;
	$(new_class).css("background","#00ff00");
	grid[row][col] = 2;
}

function setNewRed(row,col){
	var new_class = "."+ row +"-"+col;
	$(new_class).css("background","red");
	grid[row][col] = 1;
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

function isClickable(row,col,turn){
	
	if(grid[row][col] != 0){
		alert("you cant click an occupied cell");
		return false;
	}
	
	rc = grid.length;
	cc = grid[0].length;
	
	if( (row-1 >= 0) && (col-1 >= 0) && (grid[row-1][col-1] == turn) ) return true;
	if( (row-1 >= 0) && (grid[row-1][col] == turn) )   return true;
	if( (row-1 >= 0) && (col+1 < cc) && (grid[row-1][col+1] == turn) ) return true;
	
	if( (col-1 >= 0) && (grid[row][col-1] == turn) )   return true;
	if( (col+1 < cc) && (grid[row][col+1] == turn) )  return true;
	
	if( (row+1 < rc) && (col+1 < cc) && (grid[row+1][col+1] == turn) ) return true;
	if( (row+1 < rc) && (grid[row+1][col] == turn) )   return true;
	if( (row+1 < rc) && (col-1 >= 0) && (grid[row+1][col-1] == turn) ) return true;
	
	var color = turn == 1? "red" : "green";
	alert("It is " + color + "'s turn and please click a box next to " + color + " box");
	
	return false;
	
	
}
/***************************************************************************************************/


/********************************function to change the color of  adjacent cells*******************************/

function updateAdjacentCell(row,col,turn){
	rc = grid.length;
	cc = grid[0].length;
	if ( (row-1 >= 0) && (col-1 >= 0) && (grid[row-1][col-1] !=0) ) {
		if(grid[row-1][col-1] == 1 && grid[row][col] == 2){
			setNewBlue(row-1,col-1);
		}
	  if(grid[row-1][col-1] == 2 && grid[row][col] == 1){
			setNewRed(row-1,col-1);
		}
	}
	if ( (row-1 >= 0) && (grid[row-1][col] != 0) ){
		if(grid[row-1][col] == 1 && grid[row][col] == 2){
			setNewBlue(row-1,col);
		}
	  if(grid[row-1][col] == 2 && grid[row][col] == 1){
			setNewRed(row-1,col);
		}
		}
	if ( (row-1 >= 0) && (col+1 < cc) && (grid[row-1][col+1] != 0) ){
		if(grid[row-1][col+1] == 1 && grid[row][col] == 2){
			setNewBlue(row-1,col+1);
		}
	  if(grid[row-1][col+1] == 2 && grid[row][col] == 1){
			setNewRed(row-1,col+1);
		}
		}
	
	if ( (col-1 >= 0) && (grid[row][col+1] !=0 ) ) {
		if(grid[row][col+1] == 1 && grid[row][col] == 2){
			setNewBlue(row,col+1);
		}
	  if(grid[row][col+1] == 2 && grid[row][col] == 1){
			setNewRed(row,col+1);
		}
		}
	if ( (col+1 < cc) && (grid[row+1][col+1] !=0) ){
		if(grid[row+1][col+1] == 1 && grid[row][col] == 2){
			setNewBlue(row+1,col+1);
		}
	  if(grid[row+1][col+1] == 2 && grid[row][col] == 1){
			setNewRed(row+1,col+1);
		}
		}
	
	if ( (row+1 < rc) && (col+1 < cc) && (grid[row+1][col] != 0) ) {
		if(grid[row+1][col] == 1 && grid[row][col] == 2){
			setNewBlue(row+1,col);
		}
	  if(grid[row+1][col] == 2 && grid[row][col] == 1){
			setNewRed(row+1,col);
		}
		}
	if ( (row+1 < rc) && (grid[row+1][col-1] != 0) ){
		if(grid[row+1][col-1] == 1 && grid[row][col] == 2){
			setNewBlue(row+1,col-1);
		}
	  if(grid[row+1][col-1] == 2 && grid[row][col] == 1){
			setNewRed(row+1,col-1);
		}
		}
	if ( (row+1 < rc) && (col-1 >= 0) && (grid[row][col-1] != 0) ) {
		if(grid[row][col-1] == 1 && grid[row][col] == 2){
			setNewBlue(row,col-1);
		}
	  if(grid[row][col-1] == 2 && grid[row][col] == 1){
			setNewRed(row,col-1);
		}
	}

}
		


















$(function(){
	//alert("hi");
	createTable(10,10);
	
});

/*function to create a table of m rows and n columns and to add class*/

function createTable(m,n){
	for(i=0;i<m;i++){
		$('.rtable').append('<tr></tr>');
	}

	$('.rtable tr').append(function(index,html){
		var str ="";
		for(i=0;i<n;i++){
			var classname =  index + "-" + i;
			str+="<td class=" + classname +"></td>";
			//alert(classname);
		}
		//alert(str);
		return str;
	});
}
	
	
	/*$('tr').each(function(i){
		$(this).addClass('row'+i);
	});
	
	for(i=0;i<m;i++){
		$(".row" + i + " td").each(function(index){
			$(this).addClass("col"+index);
		})
	}
	$('td').each(function(i){
		$(this).addClass('col'+i);
	});*/



$(function(){
	$('td').click(function(){
		var val = $(this).attr('class');
		var myArr = val.split("-");
		var row = parseInt(myArr[0]);
		var col = parseInt(myArr[1]);
		
		//alert("you  clicked the cell" + row +  "-" + col);
		var new_class = "."+ row +"-"+(col+1);
		//alert(new_class);
		//$(new_class).css("background","#8080ff");
});
});


	
	function createArray(m, n) {
		var grid = new Array(m);
		for(var i=0;i<m;i++){
			grid[i] = new Array(n);
		}
		
		for (var row=0;row<m;row++){
			for(var col=0;col<n;col++){
				grid[row][col] = 0;
			}
			alert(grid[row]);
		}
		
		/*for(var y=0;y<m;y++){
			alert(grid[row]);
		}*/
		
	}
$(function(){
	$('input').click(function(){
		//alert("hi");
		createArray(10,10);
	});
});	


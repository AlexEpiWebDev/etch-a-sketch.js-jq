$(document).ready(function(){
		
			ctr = $("#container");
			
			colorChoices = [];
			
			var emptyArray = function() {
				colorChoices.length = 0;
			};
			
			var firstRow = function() {
				var brk = $("<div class='break'></div>");
				for(var i = 0; i < 16; i++) {
					ctr.append("<div class='box'></div>");
				}
				brk;
			};
			
			var firstGrid = function() {
				for(var i=0;i<16;i++) {
				firstRow();
				}
			};
			
			var colorBoxes = function() {
				$(".box").on("mouseenter", function() {
					var currentColor = $(".color").val();
					$(this).css({"background-color":"#"+currentColor});
				});	
			};
			
			var clearGrid = function() {
				$(".box").remove();
			};
			
			$("#defaultGen").on("click", function() {
				clearGrid();
				firstGrid();
				if($("#paintOn").prop("checked")) {
					colorBoxes();
				}
			});
			
			$("#choose").on("click", function() {
				var numBoxesPerRow = prompt("How many boxes would you like per row?");
				if(numBoxesPerRow != null) {
					if(numBoxesPerRow > 24) {
						alert("Sorry, the number of boxes per row has to be 24 or less.  Do you think boxes grow on trees or something?");
					}
					else if(numBoxesPerRow <= 1) {
						alert("One box does not a sketch make :P.");
						}
					else if(isNaN(numBoxesPerRow)) {
						alert("That ain't a number I ever heard of! ;)");
					}
					else {
						var userGenRow = function() {
							var boxLength = (640/numBoxesPerRow)+"px";
							for(var i=1;i<=numBoxesPerRow;i++) {
								ctr.append("<div class='box'></div>");
								$(".box").css({"width":boxLength, "height":boxLength});
							}
						};
						var userGenGrid = function() {
							for(var i=1;i<=numBoxesPerRow;i++) {
								userGenRow();
							}
						};
						clearGrid();
						userGenGrid();
						if($("#paintOn").prop("checked")) {
							colorBoxes();
						}
					}
				}
			});
			
			$("#listChoices").on("click", function() {
				if(colorChoices.length == 12) {
					("#listChoices").off();
				}
				else {
					var currentColor = $(".color").val();
					colorChoices.push(currentColor);
					if(colorChoices.length == 1	) {
						$("#arrayP").append(colorChoices + "<br />");
					}
					else if(colorChoices.length > 1) {
						$("#arrayP").append(colorChoices[colorChoices.length - 1] + "<br />");
					}
				}
			});
			
			$("#clearList").on("click", function() {
				emptyArray();
				$("#arrayP").empty();
			});
			
			$("#toggleBorders").on("click", function() {
				$(".box").toggleClass("borders");
			});
			
			$(".color").click(function() {
				$("#colorp").css({"color":"#44749D"});
			});
			
			$("#paintOff").on("click", function() {
				$(".box").off();
			});
		
			$("#paintOn").on("click", colorBoxes);	
		});

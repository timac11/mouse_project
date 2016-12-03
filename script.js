// GLOBAL CONSTANTS /////////////////
	/////////////////////////////////////
	var  globMass = [],	// mssiv of points
		 massSize = 2000, // size of massiv
		 passLength = 95,
		 smallSighns = 'abcdefghijklmnopqrstuvwxyz',
		 bigSighns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		 numbers = '1234567890',
		 specSighns = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
	var password;
	   function move(width) {
chrome.browserAction.onClicked.addListener(function() { 
  alert('Hello, World!'); 
})
 alert('Hello, World!'); 			var elem = document.getElementById("myBar"); 
					if (width >= 100) {
					
					} else {
						console.log(width);
						width++; 
						elem.style.width = width + '%'; 
						document.getElementById("label").innerHTML = width * 1 + '%';
				}
		}
		function generatePassword(){
			console.log('asdasd');

			console.log(globMass);
			//Getting of length of the password
			// min length of the password is 8 symbols
			var pwlen = 16,
				symbols = '',
		
				symbolsMass,
				newSymbol = '',
				passMas = [],
				n = 0,
				genpas_spec_symbols = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
			//Determination of options 
			/*if($('#az').attr('checked'))*/ symbols = symbols + smallSighns;
			/*if($('#az2').attr('checked'))*/ symbols = symbols + bigSighns;
			/*if($('#n09').attr('checked'))*/ symbols = symbols + numbers;
			/*if($('#schr').attr('checked'))*/ symbols = symbols + specSighns;
			//Replacing of some sequences
			//if($('#skipamb').attr('checked')) {
			//	symbols = symbols.replace(new RegExp('[B8G6I1l\|0OQDS5Z2]','g'),'');
			//}
			// generation of massiv of symbols
			symbolsMass = symbols.split("");
			// random string of symbols
			symbols = replacingSymbolsInString(symbolsMass);
			// generationPassword
			password = '';
			while (n<16){
				if (n == 0){
					password = symbols.charAt(generateSymbol());
					n++;
				}
				else {
					symbol = password.charAt(n-1);
					newSymbol = symbols.charAt(generateSymbol());
					if (filtering(symbol,newSymbol)){
						password = password + newSymbol;
						n++;
					}
				}
			}
			console.log(password);
			jQuery('.pass').html(password);
			alert('suka hui'+password);
		}
	
	////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////	
		
		function replacingSymbolsInString(symbolsMass){
			// replacing of symbols in the string of formulating password
			var rand1,rand2,
				replacedSymbol,
				min = 0,
				max = passLength,
				newPassMass = symbolsMass;
			for (i=0; i<passLength;i++){
				rand1 = (Math.floor(Math.random() * (max - min )) + min)%passLength;
				rand2 = (Math.floor(Math.random() * (max - min )) + min)%passLength;
				// replacing 
				replacedSymbol = newPassMass[rand1];
				newPassMass[rand1] = newPassMass[rand2];
				newPassMass[rand2] = replacedSymbol;
			}
		console.log(newPassMass);
		return newPassMass.join("");
		}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////	
	////// filtration of similar symbols/////////////////////////////////////////////////////////////// 
		
		function filtering (firstSymbol, secondSymbol){
			// finding similar simbols near and
			// excluding pairs from string 
			// search overlaps
			if  ((smallSighns.indexOf(firstSymbol) != -1) && (smallSighns.indexOf(secondSymbol) != -1) ) return false;
			if  ((bigSighns.indexOf(firstSymbol) != -1) && (bigSighns.indexOf(secondSymbol) != -1) ) return false;
			if  ((numbers.indexOf(firstSymbol) != -1) && (numbers.indexOf(secondSymbol) != -1) ) return false;
			if  ((specSighns.indexOf(firstSymbol) != -1) &&  (specSighns.indexOf(secondSymbol) != -1)) return false;
		 return true;	
		}
	
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
	
		function generateSymbol(){
			var symbol = '',
			passLength = 95,
			number = 0 ;
			for (i=0;i<100;i++){
				number = (number + globMass[Math.floor(Math.random() * (2000))] )%passLength;
			}
			return number;
		} 
    
	
	////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////	
		(function(exports,$) {
			//var globMass = [],  
			bits = 10, step = 0, width = 0;
	
			$(document).on('mousemove', function(event) {
					step = step + 1;
					var x = event.clientX,
						y = event.clientY;
					addPoints (x,y);
					console.log(x,y);	
					
					if (step == bits ){
						step = 0;
						width ++;
						move(width);
					}
					
					if (width == 100){ $('#generate').html(password);
						$('#generate').show();	
						printMass();
					}
					
            });

			function printMass() {
				console.log (globMass);
			}
		
			function addPoints (x,y){
				globMass.push(x);
				globMass.push(y);
			};
	 
		
	
	///////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////
	
		
	})(window, jQuery);
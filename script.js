function play(){
	
	var playerOne; 
	playerOne=prompt("Player One, choose: Rock, Paper or Scissors");
	var playerTwo; 
	playerTwo=prompt("Player One, choose: Rock, Paper or Scissors");
	
	//If player One Chooses Rock//
	if(playerOne=="Rock"){
		if(playerTwo=="Rock"){
			alert("Its a Draw");
		}
		else if(playerTwo=="Paper"){
			alert("Player Two Wins");
		}
		else if(PlayerTwo=="Scissors"){
			alert("Player One Wins");
		}
		else{
			alert("Invalid Entry");
		}	
	}	
	//If Player One Chooses Paper//
	else if(playerOne=="Paper"){
		if(playerTwo=="Rock"){
			alert("Player One Wins");
		}
		else if(playerTwo=="Paper"){
			alert("Its a Draw");
		}
		else if(PlayerTwo=="Scissors"){
			alert("Player One Wins");
		}
		else{
			alert("Invalid Entry");
		}	
	}	
		
	//If Player One Chooses Scissors//	
	else if(playerOne=="Scissors"){
		if(playerTwo=="Rock"){
			alert("Player Two Wins");
		}
		else if(playerTwo=="Paper"){
			alert("Player One Wins");
		}
		else if(PlayerTwo=="Scissors"){
			alert("Its a Draw");
		}
		else{
			alert("Invalid Entry");
		}	
	}	
		
	//If Player One's Entry is Invalid//	
	else{
		alert("Invalid Entry");
	}
	
	
}
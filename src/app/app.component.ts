import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	searchText="";

  	patients=[{'firstName':'Alison', 'lastName':'DiLaurentis','emailAddress':'AlisonDiLaurentis@gmail.com','profileImage':'assets/images/AlisonDiLaurentis.png','doctorName':'David'},
			{'firstName':'Spencer', 'lastName':'Hastings','emailAddress':'SpencerHastings@gmail.com','profileImage':'assets/images/SpencerHastings.png','doctorName':'Mariana'},
			{'firstName':'Hanna', 'lastName':'Marin','emailAddress':'HannaMarin@gmail.com','profileImage':'assets/images/HannaMarin.jpg','doctorName':'Laura'},
			{'firstName':'Mona', 'lastName':'Vanderwaal','emailAddress':'MonaVanderwaal@gmail.com','profileImage':'assets/images/MonaVanderwaal.png','doctorName':'Laura'},
			{'firstName':'Aria', 'lastName':'Montgomery','emailAddress':'AriaMontgomery@gmail.com','profileImage':'assets/images/AriaMontgomery.jpg','doctorName':'Maya'},
			{'firstName':'Emily', 'lastName':'Fileds','emailAddress':'EmilyFields@gmail.com','profileImage':'assets/images/EmilyFields.jpg','doctorName':'Bryon'},
			{'firstName':'Caleb', 'lastName':'Rivers','emailAddress':'CalebRivers@gmail.com','profileImage':'assets/images/CalebRivers.jpg','doctorName':'David'},
			{'firstName':'Mary', 'lastName':'Drake','emailAddress':'MaryDrake@gmail.com','profileImage':'assets/images/MaryDrake.png','doctorName':'Laura'},
			{'firstName':'Paige', 'lastName':'McCullers','emailAddress':'PaigeMcCullers@gmail.com','profileImage':'assets/images/PaigeMcCullers.jpg','doctorName':'Maya'},
			{'firstName':'Toby', 'lastName':'Cavanaugh','emailAddress':'TobyCavanaugh@gmail.com','profileImage':'assets/images/TobyCavanaugh.jpg','doctorName':'Bryon'}]

	SearchByName(parameter:String){
		let inputs=parameter.split(" ");
		let inputKey=inputs[0];
		let inputValue=inputs[1];

		if (inputKey.toLowerCase()==="doctor"){
			document.getElementsByClassName("view")[0].innerHTML="<thead><tr><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Profile Image</th><th>Doctor Name</th></tr></thead><tbody>";
			for (var patient in this.patients){
				//console.log(patient);
				if(this.patients[patient]['doctorName'].toLowerCase()===inputValue.toLowerCase()){
					console.log("test2");
					document.getElementsByClassName("view")[0].innerHTML=document.getElementsByClassName("view")[0].innerHTML+"<tr>"+
																		  "<td>"+this.patients[patient]['firstName']+"</td>"+
																		  "<td>"+this.patients[patient]['lastName']+"</td>"+
																		  "<td>"+this.patients[patient]['emailAddress']+"</td>"+
																		  "<td><img height='64px width='64px' src='"+this.patients[patient]['profileImage']+"'></td>"+
																		  "<td>"+this.patients[patient]['doctorName']+"</td></tr>";
			
			
			
				}
			}
			document.getElementsByClassName("view")[0].innerHTML+="</tbody></table>";
		}else if (inputKey.toLowerCase()==="name"){
			document.getElementsByClassName("view")[0].innerHTML="<thead><tr><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Profile Image</th><th>Doctor Name</th></tr></thead><tbody>";
			for (var patient in this.patients){
				//console.log(patient);
				if(this.patients[patient]['firstName'][0].toLowerCase()===inputValue[0].toLowerCase()){
					console.log("test2");
					document.getElementsByClassName("view")[0].innerHTML=document.getElementsByClassName("view")[0].innerHTML+"<tr>"+
																		  "<td>"+this.patients[patient]['firstName']+"</td>"+
																		  "<td>"+this.patients[patient]['lastName']+"</td>"+
																		  "<td>"+this.patients[patient]['emailAddress']+"</td>"+
																		  "<td><img height='64px width='64px' src='"+this.patients[patient]['profileImage']+"'></td>"+
																		  "<td>"+this.patients[patient]['doctorName']+"</td></tr>";
			
			
			
				}
			}
			document.getElementsByClassName("view")[0].innerHTML+="</tbody></table>";
		}

	}


}

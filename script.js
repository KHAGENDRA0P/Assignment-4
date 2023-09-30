var names=new Array();

names[0]="Khagendra";
names[1]="John";
names[2]="Yaakov";
names[3]="Jason";
names[4]="Paul";
names[5]="Brock";
names[6]="Laura";
names[7]="Gojo";
names[8]="Adam";
names[9]="Jimmy";
names[10]="Eren"


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}

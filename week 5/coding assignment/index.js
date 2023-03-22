class Dog {
    constructor (name, breed, size){
        this.name= name;
        this.breed= breed;
        this.size= size;
    }
}
class Shelter {
    constructor(shelterName) {
        this.shelterName= shelterName; 
        this.allDogs = [];
    }
    createDogs() {
        this.allDogs.push(new Dog('Molly', 'Chihuahua', 'Small'))
    }
}

class Menu {
        constructor () {
            this.allShelter= [];
        }
        createShelter() {

        }
        start () { 
            let selection= this.showMainMenuOptions ();
                while (selection != 0) {
                    switch (selection) {
                    case '1':
                        this.createShelter();
                        break;
                    case '2':
                        this.viewShelter();
                        break;
                    case '3':
                        this.deleteShelter();
                        break;
                    case '4':
                        this.displayAllShelters();
                        break;
                    default: 
                        selection= 0;            
        }
        selection= this.showMainMenuOptions ();
    }
        alert('Goodbye!');
        }
showMainMenuOptions () {
    return prompt(` 
    0)Exit
    1)CreateShelter
    2)ViewShelter 
    3)DeleteShelter
    4)Display allShelters
`);
}
showShelterMenuOptions (shelterInfo) {
    return prompt (`
        0)back 
        1)createDog
        2)adoptDog
...............
        ${shelterInfo}
`);
    }
    displayAllShelters () {
        let shelterString = '       ';
        for (let i = 0; i < this.allShelter.length; i++) {
            shelterString += i + ') ' + this.allShelter [i].shelterName+ '\n';
        }
        alert (shelterString);
    }
    createShelter (){
        let name= prompt ('Enter name for new shelter');
        this.allShelter.push(new Shelter (name));
    }
    viewShelter (){
        let index = prompt ('Enter the index of the shelter you wish to view');
        if (index > -1 && index < this.allShelter.length){
            this.selectedShelter = this.allShelter[index];
            let description = 'Shelter Name: ' + this.selectedShelter.shelterName + '\n';
            for (let i= 0; i < this.selectedShelter.allDogs.length; i++){
                description += i +') ' + this.selectedShelter.allDogs[i].name + ''
                + this.selectedShelter.allDogs[i]. size +
                this.selectedShelter.allDogs[i]. breed +
                '\n';
                
            }
        let selection= this.showShelterMenuOptions (description);
            switch (selection) {
                case '1':
                    this.createDog ();
                    break;
                case '2':
                    this.adoptDog ();
           }   } }
    deleteShelter (){
        let index = prompt ('Enter the index of the shelter you wish to delete:');
        if (index > -1 && index < this.allShelter.length) {
            this.allShelter.splice(index,1);
        }
    }

    createDog (){
        let name= prompt ('Enter name for new dog:');
        let breed= prompt ('Enter breed for new dog:');
        let size= prompt ('Enter size for new dog:');
        this.selectedShelter.allDogs.push (new Dog (name, breed, size));
    }
    adoptDog() {
        let index= prompt ('Enter the index of the breed you wish to adopt:');
        if (index > -1 && index < this.selectedShelter.allDogs.length){
            this.selectedShelter.allDogs.splice (index, 1);
        }
    }
}
    let menu= new Menu();
    menu.start();
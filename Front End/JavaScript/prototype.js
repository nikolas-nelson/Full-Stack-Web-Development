
        var Hero = function(firstName, secondName, title, homeCity) {
            this.firstName = firstName;
            this.secondName = secondName;
            this.title = title;
            this.homeCity = homeCity;
        }

        Hero.prototype.getName = function() {
            return this.firstName + " " + this.secondName;
        };

        Hero.prototype.getDescription = function() {
            return this.firstName + " " + this.secondName + ", A.K.A " + this.title + ", protects " + this.homeCity + " from bad guys!";
        };

        console.dir(Hero);

        var superman = new Hero("Clark", "Kent", "Superman", "Metropolis");
        var batman = new Hero("Bruce", "Wayne", "Batman", "Gotham");

        console.log(superman.getName());
        console.log(superman.getDescription());

        console.log(batman.getName());
        console.log(batman.getDescription());

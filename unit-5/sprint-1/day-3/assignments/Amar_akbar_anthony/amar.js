function Person(name, skills, city) {
        this.name = name;
        this.skills = skills;
        this.city = city;
        this.getSkill = function () {
                console.log(this.skill);
        };
}

let amar = new Person("Amar", "Coder", "Delhi");
let akbar = new Person("Akbar", "Magician", "Mumbai");
let anthony = new Person("Anthony", "Actor", "Banglore");

akbar.getskill.call(amar);
amar.getskill.call(anthony);
anthony.getskill.call(akbar);



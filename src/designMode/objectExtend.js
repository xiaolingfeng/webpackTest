function extendTest(){
    function Person(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    Person.prototype.hello = function(){
        console.log(`Hello, my name is ${this.name}, ${this.age} years old now`)
    }


    function Student(name,gender,age,grade){
        //构造函数继承  不会继承prototype上的属性和方法
        Person.call(this,name,gender,age)
        this.grade = grade
    }

//原型链继承 prototype
//Object.create 创建一个以Person.prototype为原型的新对象，避免直接引用
    Student.prototype = Object.create(Person.prototype)
    Student.prototype.hello = function(){
        console.log(`Hello, my name is ${this.name}, ${this.age} years old, grade ${this.grade}`)
    }

    const student = new Student('Martin',1,20,3);
    student.hello();

    const person = new Person("Martin2",1,25);
    person.hello();
}

Function.prototype.extends = function(constructor){
    const _this = this;
    const cons = function(args){
        constructor.call(_this,args)
    }
    cons.prototype = Object.create(constructor.prototype);
    return cons;
}

function extendFunctionTest(){
    function Person(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    Person.prototype.hello = function(){
        console.log(`Hello, my name is ${this.name}, ${this.age} years old now`)
    }

    function Teacher(name,gender,age,grade){}
    Teacher = Teacher.extends(Person)
    Teacher.prototype.teach = function(lesson){
        console.log(`Teacher ${this.name} is teaching lesson ${lesson}`)
    }

    const teacher = new Teacher('Martin',1,20,33);
    console.log(teacher);
    teacher.teach('English');
}

extendFunctionTest();




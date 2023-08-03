{
    function Parent(){
        this.name = 'Martin'
        this.age = 30
        this.hobby = [1,2]
    }

    function Child(grade){
        this.type = 'child'
        this.grade = grade
    }

    Child.prototype = new Parent()

    let c1 = new Child(1)
    let c2 = new Child(2)
    c1.hobby.push(99)

    c1.age = 40
    c1.__proto__.age = 50
    console.log(c1,c2)
}

{
    function Parent(){
        this.name = 'Martin'
        this.age = 34
    }

    function Child(gender){
        Parent.call(this,gender)
    }

    const c1 = new Child('boy')
}

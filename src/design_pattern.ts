namespace AbstractFactoryPattern {
    export interface AbstractProductA {
        methodA(): string;
    }
    export interface AbstractProductB {
        methodB(): number;
    }

    export interface AbstractFactory {
        createProductA(param?: any) : AbstractProductA;
        createProductB() : AbstractProductB;
    }


    export class ProductA1 implements AbstractProductA {
        methodA = () => {
            return "This is methodA of ProductA1";
        }
    }
    export class ProductB1 implements AbstractProductB {
        methodB = () => {
            return 1;
        }
    }

    export class ProductA2 implements AbstractProductA {
        methodA = () => {
            return "This is methodA of ProductA2";
        }
    }
    export class ProductB2 implements AbstractProductB {
        methodB = () => {
            return 2;
        }
    }


    export class ConcreteFactory1 implements AbstractFactory {
        createProductA(param?: any) : AbstractProductA {
            return new ProductA1();
        }

        createProductB(param?: any) : AbstractProductB {
            return new ProductB1();
        }
    }
    export class ConcreteFactory2 implements AbstractFactory {
        createProductA(param?: any) : AbstractProductA {
            return new ProductA2();
        }

        createProductB(param?: any) : AbstractProductB {
            return new ProductB2();
        }
    }


    export class Tester {
        private abstractProductA: AbstractProductA;
        private abstractProductB: AbstractProductB;

        constructor(factory: AbstractFactory) {
            this.abstractProductA = factory.createProductA();
            this.abstractProductB = factory.createProductB();
        }

        public test(): void {
            console.log(this.abstractProductA.methodA());
            console.log(this.abstractProductB.methodB());
        }
    }

 }





namespace ObserverPattern {
    export class Subject {
        private observers: Observer[] = [];

        public register(observer: Observer): void {
            console.log(observer, "is pushed!");
            this.observers.push(observer);
        }

        public unregister(observer: Observer): void {
            var n: number = this.observers.indexOf(observer);
            console.log(observer, "is removed");
            this.observers.splice(n, 1);
        }

        public notify(): void {
            console.log("notify all the observers", this.observers);
            var i: number
              , max: number;

            for (i = 0, max = this.observers.length; i < max; i += 1) {
                this.observers[i].notify();
            }
        }
    }

    export class ConcreteSubject extends Subject {
        private subjectState: number;

        get SubjectState(): number {
            return this.subjectState;
        }

        set SubjectState(subjectState: number) {
            this.subjectState = subjectState;
        }
    }

    export class Observer {
        public notify(): void {
            throw new Error("Abstract Method!");
        }
    }

    export class ConcreteObserver extends Observer {
        private name: string;
        private state: number;
        private subject: ConcreteSubject;

        constructor (subject: ConcreteSubject, name: string) {
            super();
            console.log("ConcreteObserver", name, "is created!");
            this.subject = subject;
            this.name = name;
        }

        public notify(): void {
            console.log("ConcreteObserver's notify method");
            console.log(this.name, this.state);
            this.state = this.subject.SubjectState;
        }

        get Subject(): ConcreteSubject {
            return this.subject;
        }

        set Subject(subject: ConcreteSubject) {
            this.subject = subject;
        }
    }
}
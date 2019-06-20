/** Separate the construction of a complex object from its representation
* so that the same construction process can create different representations.*/
interface IBuilder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class Builder implements IBuilder {
    private product: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    /**
     * Конкретные Строители должны предоставить свои собственные методы
     * получения результатов.
     *
     * Обычной практикой является вызов метода сброса в конце тела
     * метода getProduct. Однако такое поведение не является обязательным.
     */
    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: IBuilder;

    public setBuilder(builder: IBuilder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director: Director) {
    const builder = new Builder();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    // We can use pattern without Director
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);

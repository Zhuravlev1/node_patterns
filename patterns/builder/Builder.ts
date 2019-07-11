/** Separate the construction of a complex object from its representation
* so that the same construction process can create different representations.*/
interface HouseBuilder {
    produceHouse(): void;
    produceSwimmingPool(): void;
    produceGarden(): void;
}

class Builder implements HouseBuilder {
    private product: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    public produceHouse(): void {
        this.product.parts.push('House');
    }

    public produceSwimmingPool(): void {
        this.product.parts.push('Swimming pool');
    }

    public produceGarden(): void {
        this.product.parts.push('Garden');
    }

    /**
     * Конкретные Строители должны предоставить свои собственные методы
     * получения результатов.
     *
     * Обычной практикой является вызов метода сброса в конце тела
     * метода getResult. Однако такое поведение не является обязательным.
     */
    public getResult(): Product {
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
    private builder: HouseBuilder;

    public setBuilder(builder: HouseBuilder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.produceHouse();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.produceHouse();
        this.builder.produceSwimmingPool();
        this.builder.produceGarden();
    }
}

function clientCode(director: Director) {
    const builder = new Builder();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getResult().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getResult().listParts();

    // We can use pattern without Director
    console.log('Custom product:');
    builder.produceHouse();
    builder.produceGarden();
    builder.getResult().listParts();
}

const director = new Director();
clientCode(director);

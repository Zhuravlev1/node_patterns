import {VictorianFurnitureFactory} from "./VictorianFurnitureFactory";
import {ModernFurnitureFactory} from "./ModernFurnitureFactory";

export interface AbstractFactory {
    createChair(): Chair;
    createTable(): Table;
}

export interface Chair {
    chairStyle(): string;
}

export interface Table {
    tableStyle(): string;
    collaboratorWith(collaborator: Chair): string;
}

function clientCode(factory: AbstractFactory) {
    const chair = factory.createChair();
    const table = factory.createTable();

    console.log(chair.chairStyle());
    console.log(table.tableStyle());
    console.log(table.collaboratorWith(chair));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new VictorianFurnitureFactory());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ModernFurnitureFactory());

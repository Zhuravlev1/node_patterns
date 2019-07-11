import {AbstractFactory, Chair, Table} from "./AbstractFactory";

export class VictorianFurnitureFactory implements AbstractFactory {
    public createChair(): Chair {
        return new VictorianChair();
    }

    public createTable(): Table {
        return new VictorianTable();
    }
}

class VictorianChair implements Chair {
    public chairStyle(): string {
        return 'Victorian Chair.';
    }
}

class VictorianTable implements Table {

    public tableStyle(): string {
        return 'This is Victorian Table.';
    }

    public collaboratorWith(collaborator: Chair): string {
        const result = collaborator.chairStyle();
        return `Victorian Table collaborating only with the (${result})`;
    }
}

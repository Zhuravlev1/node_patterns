import {AbstractFactory, Chair, Table} from "./AbstractFactory";

export class ModernFurnitureFactory implements AbstractFactory {
    public createChair(): Chair {
        return new ModernChair();
    }

    public createTable(): Table {
        return new ModernTable();
    }
}

class ModernChair implements Chair {
    public chairStyle(): string {
        return 'Modern chair.';
    }
}

class ModernTable implements Table {

    public tableStyle(): string {
        return 'This is modern table.';
    }

    public collaboratorWith(collaborator: Chair): string {
        const result = collaborator.chairStyle();
        return `Modern table collaborating only with the (${result})`;
    }
}

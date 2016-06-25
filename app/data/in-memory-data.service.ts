export class InMemoryDaraService {
    createDB() {
        let recipes = [
            {id: 1, name: 'Insalata', }

        ];
        return {recipes};
    }
}
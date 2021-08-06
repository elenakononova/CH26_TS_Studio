import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    name: string | undefined;
    totalCapacityKg: number | undefined;
    cargoItems: Cargo[] = [];
    astrinauts: Astronaut[] = [];
    
    constructor(
        name: string,
        totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;}

// Returns the sum of all items using each item's massKg property
        sumMass(items: Payload[] ): number {
            let totalMass = 0;
            for (let i = 0; i< items.length; i++){
                totalMass +=items[i].massKg;
            } 
            return totalMass;
        }
// Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        currentMassKg(): number {
            let astronautMass: number = this.sumMass(this.astrinauts);
            let cargoMass: number = this.sumMass(this.cargoItems);
            return astronautMass + cargoMass;
        }

        canAdd(item: Payload): boolean {
            return this.currentMassKg() + item.massKg <= this.totalCapacityKg
        }

        

        addCargo(cargo: Cargo): boolean {
            if (this.canAdd(cargo)) {
                this.cargoItems.push(cargo);
                return true;
            }
            return false;
        }

        /* Uses this.canAdd() to see if another astronaut can be added.
If true, adds astronaut to this.astronauts and returns true.
If false, returns false. */

        addAstronaut(astronaut: Astronaut): boolean {
            if (this.canAdd(astronaut)) {
                // if this true, adds astronaut to this.astronuats and returns true.
                this.astrinauts.push(astronaut);
                return true;        
            }
            return false;
        }
 }
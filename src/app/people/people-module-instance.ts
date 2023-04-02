import { IPerson } from "./person";

export interface IPeopleStateInterface {
    isLoading: boolean;
    error: string | null;
    people: IPerson [];
    selectedPerson: IPerson | null
}
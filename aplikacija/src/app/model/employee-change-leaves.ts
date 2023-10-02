import { Employee } from './employee';
export interface ChangeLeaves {
    employee: Employee;
    amountChange: number;
}
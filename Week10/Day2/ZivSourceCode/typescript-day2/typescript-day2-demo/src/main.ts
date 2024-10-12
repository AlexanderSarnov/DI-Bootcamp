/** type Aliases */

type StringNumber = string | number;

type StringNumberBollean = StringNumber | boolean;

interface Student  {
    name: string;
    id: StringNumber;
    active: StringNumberBollean
}

let studet1: Student = {
    name: "Marry",
    id: 1,
    active: 1
}

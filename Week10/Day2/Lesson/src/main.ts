/** type Aliases */
type StringNumber = string | number;
type StringNumberBoolean = StringNumber | boolean;

type Student = {
    name: string;
    id: StringNumber;
    active: StringNumberBoolean;
};

let student1: Student = {
    name: 'John Doe',
    id: 12345,
    active: true,
};

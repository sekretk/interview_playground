//genertic function?


const toBeGeneric = <T extends number | string>(val: T): Array<T> => [val];


toBeGeneric(1);
toBeGeneric(2);
toBeGeneric('hello');
toBeGeneric(true);//error!

//Geric type?

type myType<T> = keyof T;

//Record?
//{a: number, b: string} create {a: boolean, b: boolean}
type ometype = {a: number, b: string};
type resultType = {a: boolean, b: boolean};//create this with a Record?

const record : Record<T> = {
    a: true,
    b: false
}

type myTypeWithRecord<T> = Record<keyof T, boolean>

type myIssueType = myTypeWithRecord<ometype>;


//

type State = {
    firstName: string;
    secondName: string;
}

const state: State = {
    firstName: 'Joe',
    secondName: 'Dow'
}

const updateState = (updateSet: Partial<State>): State => ({...state, ...updateSet});

// updateState('hello');//Disaster!
updateState({firstName: 'me'});//only!`
updateState({firstName: 'me', secondName: 'sn'});//only!`

type IssueType = {a: string, b: number};
const handler = (_: IssueType): void => {}

handler({a: 'asd', b: 1})


//TS guard? keyword `is`?

const guardString = (val: unknown): val is string => typeof val === 'string';

const variab = 1;

if (guardString(variab)) {
    variab//string
}
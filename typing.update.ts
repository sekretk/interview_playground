type State = {
    firstName: string;
    secondName: string;
}

const state: State = {
    firstName: 'Joe',
    secondName: 'Dow'
}

const updateState = (updateSet: unknown): State => ({...state, ...updateSet});

updateState('hello');//Disaster!
updateState({firstName: 'me'});//OK
updateState({firstName: 'me', secondName: 'sn'});//error!
updateState({secondName: 'sn'});//OK
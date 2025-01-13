//Narrow
//Exhaustive check
//Guard


const checkIfString = (val: unknown) => false; //??
const consumerOfGuard = (val: number | string): void => {
    if (checkIfString(val)) {
        //handle string
    }
}

type IssueType = 'A' | 'B';

const narrowConsumer = (val: IssueType) => {
    if (val === 'A') {
        console.log('A');
        return;
    }

    if (val === 'B') {
        console.log('B');
        return;
    }

    //Check if its handle all!
}



//rewrite with a switch
type Param = {a: number, b: string};

const func = (_ : Param) => {}

const param: Param = {a: 1, b: "123"};

func({a: 2, b: '123', v: true});

//ADR

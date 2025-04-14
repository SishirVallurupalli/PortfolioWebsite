

export const ExecuteCommand: (input:string) => string[] = (input: string) => {
    const inputArray = input.split(" ");
    console.log(inputArray)
    const [command, ...descriptor] = inputArray
    const result: string[] = [];
    switch (command){
        case "echo":
            result.push(descriptor.join(" "))
            break; 
        default:
            result.push(`$ Command ${command} not found`)
            break;
    }
    return result;
}


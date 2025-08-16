import { useDispatch } from "react-redux";
import { clearHistory } from "../redux/historySlice";

let dispatch: ReturnType<typeof useDispatch>;
export const setDispatch = (d: ReturnType<typeof useDispatch>) => {
  dispatch = d;
};

export const ExecuteCommand: (input: string) => string[] = (input: string) => {
  const inputArray = input.split(" ");
  console.log(inputArray);
  const [command, ...descriptor] = inputArray;
  const directory = [""];
  const result: string[] = [];
  switch (command) {
    case "echo":
      result.push(descriptor.join(" "));
      break;
    case "ls":
      result.push(...directory);
      break;
    case "clear":
      dispatch(clearHistory());
      break;
    case "help":
      result.push("Available commands: echo, ls, clear, cd, help");
      result.push("Use 'cd <directory>' to change directories");
      result.push("Use 'echo <text>' to display text");
      result.push("Use 'ls' to list files in the current directory");
      result.push("Use 'clear' to clear the console");
      result.push("Use 'help' to see this message again");
      result.push("Use 'cat <file>' to display the contents of a file");
      break;
    case "cd":
      if (descriptor.length === 0) {
        result.push("cd: missing argument");
      } else {
        const dir = descriptor[0];
        if (directory.includes(dir)) {
          result.push(`Changed directory to ${dir}`);
        } else {
          result.push(`cd: ${dir}: No such file or directory`);
        }
      }
      break;
    case "cat":
      if (descriptor.length === 0) {
        result.push("cat: missing argument");
      } else {
        const file = descriptor[0];
        if (file === "AboutMe.txt") {
          result.push(
            "Hello! I'm Sishir, a software engineer with a passion for technology and innovation. I love coding and exploring new ideas."
          );
        } else if (file === "secretText.txt") {
          result.push("This is a secret file. Shhh!");
        } else {
          result.push(`cat: ${file}: No such file or directory`);
        }
      }
      break;
    default:
      result.push(`$ Command ${command} not found`);
      break;
  }
  return result;
};

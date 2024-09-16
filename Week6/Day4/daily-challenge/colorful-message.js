import chalk from "chalk";

export const displayColorMessage = msg => {
    return chalk.bold.green(msg);  // bold green text
};

export const displayAnotherColorMessage = msg => { 
    return chalk.underline.red(msg);  // underlined blue text
}
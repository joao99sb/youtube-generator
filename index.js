import readline from "readline-sync";

function main() {
  const content = {};

  content["searchTerm"] = askAndReturnSearchTerm();
  content["prefix"] = askAndReturnPrefix();
  console.log(content);
}

function askAndReturnSearchTerm() {
  return readline.question("Qual o tem a ser pesquisado na Wikipedia:");
}
function askAndReturnPrefix() {
  const prefixes = ["Who is", "What is", "The history of"];
  const selectedPrefixIndex = readline.keyInSelect(prefixes);
  console.log(selectedPrefixIndex);
  const selectedItem = prefixes[selectedPrefixIndex];

  return selectedItem;
}

main();

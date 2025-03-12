const SERVERERROR = "Error del servidor, no se puede ejecutar tu acción"
const terminalOutput = document.getElementById("terminal-output-text")
const helpOptions = "./help.txt"
const neofetch = "./neofetch.txt"

const outputInterface = {
      printHelp: function() {
            printFromFile(helpOptions)
      },
      printNeofetch: function() {
            printFromFile(neofetch) 
      }
}
function printFromFile(file){
      fetch(file)
      .then(response => response.text())
      .then(data => {
                  terminalOutput.innerText = data 
            })
      .catch(error => {
                  terminalOutput.innerText = SERVERERROR
                  console.log(error)
            })
}

export default outputInterface

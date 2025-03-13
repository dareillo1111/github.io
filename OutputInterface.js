const SERVERERROR = "Error del servidor, no se puede ejecutar tu acción"
const terminalOutput = document.getElementById("terminal-output-text")
const terminalOutputScroll = document.getElementById("terminal-output");
const helpOptions = "./help.txt"
const neofetch = "./neofetch.txt"
const loadingScreen = "./loading.txt"

const outputInterface = {
      printHelp: function() {
            printFromFile(helpOptions);
      },
      printNeofetch: function() {
            printFromFile(neofetch);
      },
      printLoadingScreen: async function() {
            await printFromFile(loadingScreen);
            terminalOutput.innerText = " ";
            await sleep(800);
            this.printNeofetch();
      }
}
async function printFromFile(file){
      terminalOutput.innerText = "";

      try {
            const loadedFile = await fetch(file);
            const data = await loadedFile.text();
            const lines = data.split("\n");
            
            for (const line of lines){
                  for (const char of line){
                        terminalOutput.innerText += char;
                        terminalOutputScroll.scrollTop = terminalOutputScroll.scrollHeight;
                        await sleep(1);
                  }
                  terminalOutput.innerText += "\n"
            }
      }catch (error){
            terminalOutput.innerText = SERVERERROR;
            console.log(error);
      }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default outputInterface

const SERVERERROR = "Error del servidor, no se puede ejecutar tu acción";

const terminalOutput = document.getElementById("terminal-output-text");
const terminalOutputScroll = document.getElementById("terminal-output");
const currentProject = document.getElementById("current-project"); 

const helpOptions = "./help.txt";
const neofetch = "./neofetch.txt";
const loadingScreen = "./loading.txt";

const outputInterface = {
      printHelp: function() {
            currentProject.innerText = "Manual";
            printFromFile(helpOptions);
      },
      printNeofetch: function() {
            currentProject.innerText = "Neofetch";
            printFromFile(neofetch);
      },
      printLoadingScreen: async function() {
            currentProject.innerText = "Cargando";
            await printFromFile(loadingScreen);
            terminalOutput.innerText = " ";
            await sleep(700);
            this.printNeofetch();
      }
}
async function printFromFile(file){
      terminalOutput.innerText = "";

      try {
            const loadedFile = await fetch(file);
            const data = await loadedFile.text();
            const lines = data.split("\n");
            var terminalText = terminalOutput.innerText;
            
            for (const line of lines){
                  for (const char of line){
                        terminalText += char;
                        terminalOutput.innerText = terminalText;
                        terminalOutputScroll.scrollTop = terminalOutputScroll.scrollHeight;
                        await sleep(1);
                  }
                  terminalText += "\n";
            }
      }catch (error){
            terminalOutput.innerText = SERVERERROR;
            console.log(error);
      }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default outputInterface;

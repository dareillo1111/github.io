import OutputInterface from "./OutputInterface.js"

const terminalInput = document.getElementById("terminal-input-box")

OutputInterface.printLoadingScreen();

terminalInput.focus();
terminalInput.addEventListener("keypress", function(e){
      if (e.key === "Enter"){
            readAction();
      }
})

function readAction(){
      const terminalInputText = terminalInput.value.trim()
      switch (terminalInputText) {
            case "-h":
                  OutputInterface.printHelp()
                  break
            case "neofetch":
                  OutputInterface.printNeofetch()
                  break
      } 
      terminalInput.value = ""
}

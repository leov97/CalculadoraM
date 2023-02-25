class calcuos {
  dat() {
    const col = parseInt(document.querySelector("#col").value);
    const row = parseInt(document.querySelector("#row").value);
    this.values = [col, row];
  }
  //---------------------------------------------
  tab() {
    const table = document.createElement("table");
    table.setAttribute("id", "table-1") // con esto creo la tabla

    const head = table.createTHead(); //con esto creo su encabezado
    const r = head.insertRow();
    const c = r.insertCell();
    const co = this.values[0];
    const ro = this.values[1];
    for (let i = 0; i < ro; i++) {
      const r = table.insertRow();
      const c = r.insertCell();

      for (let j = 0; j < co; j++) {
        const c = r.insertCell();
        const inputs = document.createElement("input"); //creo el input
        inputs.type = "text"; //le asigno un tipo
        inputs.size = 1; // le asigno su size
        c.appendChild(inputs);
      }
    }
    /* const calcu=document.createElement("input")
          calcu.type="submit"
          calcu.name="calcu"
          table.appendChild(calcu)*/
    //procedo a agregar mi tabla a mi archivo html
    const tables = document.querySelectorAll("div","#table-1");
    const tab = document.getElementById('tab')
    console.log(tab.length)
    if (tab.length < 2 ){
        
        tab.appendChild(table);
    }
    return tab
    
    //tab.innerHTML=""
    //tab.appendChild(table);
    //tab.appendChild(document.createElement("br"));
  }
  //------------------------------------------------------------
  matric() {}
  //---------------------------------------------
  alcul() {}
}

function myMatrix() {
  //tab.innerHTML = "suma de matrices";
  const myclass = new calcuos();
  myclass.dat();
  const tab = myclass.tab();
  const mycla = new calcuos();
  mycla.dat();
  mycla.tab();

  const calcu = document.createElement("input");
  calcu.type = "submit";
  calcu.name = "calcu";
  calcu.id = "calculo";
  


  const calculo = document.getElementById("calculo");
  calculo.addEventListener("click", function () {
    console.log("hola como estas ");
  });
}

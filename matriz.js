class CreateMatrix{
    constructor(id) {
        this.id= id
    }
    
    datosInputs(){
        // optengo los valores de mis inputs que definen las dimenciones de la matriz 
        const col= parseInt(document.querySelector('#col').value)
        const row= parseInt(document.querySelector('#row').value)
        this.values=[col, row]
    }
//*****************************************************************************
    tablaMatrix(){
        //creo la tabla pa la matriz de inputs 
        const table= document.createElement("table")// con esto creo la tabla 
        table.setAttribute("id", `${this.id}`);  //le agrego un id a mi tabla
        const head= table.createTHead()//con esto creo su encabezado
        const r= head.insertRow()
        const c= r.insertCell()
        //llamo los valores de mi metodo datosInputs
        const co=this.values[0]
        const ro=this.values[1]
        /*se hace un ciclo for para que me cree la cantidad de inputs que 
        el usuario especifique en las dimenciones*/
        for(let i=0; i<ro; i++){
            const r= table.insertRow()
            const c= r.insertCell()
//----------------------------------------------------------------------------        
            for(let j=0; j<co; j++){
              const c= r.insertCell()
              const inputs= document.createElement("input")//creo el input 
              inputs.type="number" //le asigno un tipo
              inputs.size=1// le asigno su size
              c.appendChild(inputs)
            }
          }
         /* const calcu=document.createElement("input")
          calcu.type="submit"
          calcu.name="calcu"
          table.appendChild(calcu)*/
          //procedo a agregar mi tabla a mi archivo html
          const tab= document.getElementById("tab")
          //tab.innerHTML=""
          tab.appendChild(table)
   //tab.appendChild(document.createElement("br"));
    }
//*****************************************************************************
    sumaMatrixId(){
       
    }
//*****************************************************************************

}
//----------------------------------------------------------------------------

function myMatrix() {
    tab.innerHTML="suma de matrices"
    const myclass= new CreateMatrix("id1")
    myclass.datosInputs()
    myclass.tablaMatrix()
//----------------------------------------------------------------------------
    const mycla= new CreateMatrix("id2")
    mycla.datosInputs()
    mycla.tablaMatrix()
//----------------------------------------------------------------------------
    const calcu=document.createElement("input")
    calcu.type="submit"
    calcu.name="calcu"
    calcu.id="calculo"
//----------------------------------------------------------------------------
    const CalcularSuma= document.getElementById("tab")
    CalcularSuma.appendChild(calcu)

    const calculo = document.getElementById("calculo");

    calculo.addEventListener("click", function(){
        //llamo la tabla con id= "id1"
        const tablaId=document.getElementById("id1")
        const tablaMatrixId=[]
        //console.log(tablaId)
       
        for(const tr of tablaId.querySelectorAll("tr")){
            const filasId=[]
            const inputsId = Array.from(tr.querySelectorAll("td input"))
            for(const valoreInputs of inputsId){
                if (valoreInputs){
                    filasId.push(valoreInputs.value)
                }
            }
            if(filasId.length > 0){
            tablaMatrixId.push(filasId)
            }
        } 

        const tablaId2=document.getElementById("id2")
        const tablaMatrixId2=[]

        for(const tr of tablaId2.querySelectorAll("tr")){
            const filasId=[]
            const inputsId = Array.from(tr.querySelectorAll("td input"))
            for(const valoreInputs of inputsId){
                if (valoreInputs){
                    filasId.push(valoreInputs.value)
                }
            }
            if(filasId.length > 0){
            tablaMatrixId2.push(filasId)
            }
        } 
       
        

        function suma(Array1,Array2){

            const result = []
            for (let i = 0; i < Array1.length; i++) {
                result.push([])
        
                for (let j = 0; j < Array1[i].length; j++) {
            
                    result[i][j]= parseFloat(Array1[i][j])+parseFloat(Array2[i][j])
        
                }
            }
            return result
        }

        console.log(tablaMatrixId)
        console.log(tablaMatrixId2)
        const resultado =suma(tablaMatrixId,tablaMatrixId2)
        console.log(resultado)
    }       
        
    )
}


import {
    SET_TASKS,
    ADD_TASKS,
    REORDER,   
  } from '../actions';
  
  const INIT_STATE = {
    data: [],
    dataFiltered:[],
    dataEstados:[],
  }; 
  
  const Estados:  any = (data:any) => {  
    let hash:any = {};
    const dataFiltrada = data.map((item:any)=>  { return ({descripcion:item.estado })}); 
    const dataEstado = dataFiltrada.filter((o:any) => hash[o.descripcion] ? false : hash[o.descripcion] = true);
    return dataEstado;  
  };
    
  const changeEstado = ( destination:any, draggableId:any, data:any)=>{  
  
      data.map(function(item:any){
        const {text} = item;       
        if(text === draggableId){         
          item.estado = destination.droppableId;
        }        
        
      });
      return data;
  };

  const ReOrdenar = ( source : any, destination:any, draggableId:any,  data:any) => {  
   
    let dataOrder = data || [];
  
    if (source.droppableId !== destination.droppableId){
      dataOrder = changeEstado( destination,draggableId, data);      
    }

    return dataOrder;
   // public static void reordenar(int[] p, int numero) { //Siendo p[] el array de posiciones y numero la posición del kart que adelanta
      //Tenemos que p = [10,9,8,7,6,5,4,3,2,1] y posicion = 2
  
    //  int aux = p[numero]; //Guardamos el que adelanta en una variable auxiliar
      //En aux guardamos el número 8
  
   //   p[numero] = p[numero-1];
      //Sobreescribimos esa posición con el valor anterior, quedaría así el array
      //p = [10,9,9,7,6,5,4,3,2,1];
  
   //   p[numero - 1] = aux;
      //Sobreescribimos en la posición numero-1 el valor que habíamos guardado
      // Queda así p = [10,8,9,7,6,5,4,3,2,1];
  
  };

  export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
      case SET_TASKS:        
        return { ...state, data: action.payload, dataFiltered: action.payload, dataEstados: Estados(action.payload)};
      case ADD_TASKS:   
        return {  ...state,
          dataFiltered: [...state.dataFiltered, action.payload]
      } 
      case REORDER:       
        const {source, destination , draggableId} = action.payload;
        return { ...state,  dataFiltered: ReOrdenar(source, destination, draggableId, state.dataFiltered)};      
      default:
        return { ...state };
    }
 };
  

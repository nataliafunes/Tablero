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
    
  const changeEstado = ( destination:any, draggableId:any, dataFiltrada:any)=>{  
      dataFiltrada.map(function(item:any){
        const {text} = item;       
        if(text === draggableId){         
          item.estado = destination.droppableId;
        }           
      });
      return dataFiltrada;
  };
  
  const ReOrdenar = ( source : any, destination:any, draggableId:any,  dataFiltrada:any) => {     
    let dataOrder = [...dataFiltrada];
    const direction = dataOrder.filter((i:any) =>i.estado ===destination.droppableId);
    const directionIndex = destination.index;
    const item = (direction.length===0 ? 1 : dataOrder.findIndex((i:any) => i.text === direction[directionIndex].text));
    if (source.droppableId !== destination.droppableId){
      dataOrder = changeEstado( destination,draggableId, dataFiltrada);      
    }     
    const remove = dataOrder.filter((i:any) =>i.text ===draggableId);
    const dataReducida = dataOrder.filter((i:any) =>i.text !==draggableId);  
    dataReducida.splice(source.droppableId !== destination.droppableId? item -1: item ,0, remove[0]);    
    return dataReducida;   
  };

  export default (state = INIT_STATE, action: any) => {
    switch (action.type) {      
      case SET_TASKS:            
        return { ...state, data:  action.payload, dataFiltered: action.payload, dataEstados: Estados(action.payload)};
      case ADD_TASKS:   
        return {  ...state,
          dataFiltered: [...state.dataFiltered, action.payload]
      } 
      case REORDER:       
        const {source, destination , draggableId} = action.payload;       
        const data = state.dataFiltered;
        return { ...state,  dataFiltered: ReOrdenar(source, destination, draggableId, data)};      
      default:
        return { ...state };
    }
 };
  

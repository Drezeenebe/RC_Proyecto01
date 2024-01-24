export const setInStorage = (key,item) =>{
    // Conseguir los elementos actuales del localStorage
    let elements = JSON.parse(localStorage.getItem(key))
    
    // Comprobar si es un array
    if(Array.isArray(elements))
        //Añadir elemento nuevo
        elements.push(item)
    else
        elements = [item]    
    //Guardar en el localstorage
    localStorage.setItem(key, JSON.stringify(elements))

    //Devolver object guardado
    return item
}
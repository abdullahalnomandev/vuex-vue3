import { reactive,toRefs } from 'vue'

export const comState=()=>{
    
    const state = reactive({
        todoName:'COMPOSTATE',

    })

    return toRefs(state)
}

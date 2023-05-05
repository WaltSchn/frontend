import './Input.css'

function Input({type, text, name, placeholder}){
    return(
        <div className='form_control'>
            <label htmlFor={name}>{text}</label>
            <input 
                type ="text"
                name={name}
                id={name}
                placeholder={placeholder}
            />
        </div>
    )

    
}

export default Input
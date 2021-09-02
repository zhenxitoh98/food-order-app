import classes from './Add.module.css'
import { useRef } from 'react'
import nextId from "react-id-generator";

const AddMeal = (props) => {
    const nameInputRef = useRef()
    const descriptionInputRef = useRef()
    const priceInputRef = useRef()
    const htmlId = nextId()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value
        const enteredPrice = Number(priceInputRef.current.value)

        const data = {
            htmlId: htmlId,
            name: enteredName,
            description: enteredDescription,
            price: enteredPrice
        }
        props.onAddMeal(data)
    }

    return (
        <section className={classes.meals}>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' ref={nameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' ref={descriptionInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='price'>Price</label>
                    <input type='number' step='0.01' id='price' ref={priceInputRef}/>
                </div>
                <button>Add to Menu</button>
            </form>
        </section>
    )
}

export default AddMeal;
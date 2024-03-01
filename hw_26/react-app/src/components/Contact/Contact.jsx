import { useForm } from "react-hook-form";
import "./_contact.scss"

function Contact () {
  const { handleSubmit, register, formState: { errors } } = useForm();
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <div className="form-item">
        <input
        className={errors.name ? 'error' : ''} 
        type="email"
        placeholder="E-mail"
        {...register("email",{
          required:"Required",
          pattern: {
            value: /(\w|\s|[\.\'-])+/,
            message:"Incorrect email"
          }
        })}/>
        <p className={"error-message"}>{errors.name && errors.name.message}</p>
      </div>
      <div className="form-item-2">
        <input
        className={errors.name ? 'error' : ''} 
        type="tel"
        placeholder="Phone number"
        {...register("tel",{
          required:"Required",
          pattern: {
            value: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
            message:"Incorrect phone number"
          }
        })}/>
        <p className={"error-message"}>{errors.name && errors.name.message}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
export default Contact;
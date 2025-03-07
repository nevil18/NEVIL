import { useForm } from "react-hook-form";
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            className={errors.firstName ? 'input-error' : ""}
            type="text"
            {...register("firstName", { 
              required: "First name is required",
              minLength: { value: 3, message: "Min length is 3" }, 
              maxLength: { value: 6, message: "Max length is 6" } 
            })}
          />
          {errors.firstName && <p className='err-msg'>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Middle Name:</label>
          <input
            className={errors.middleName ? 'input-error' : ""}
            type="text"
            {...register("middleName", { 
              required: "Middle name is required",
              minLength: { value: 3, message: "Min length is 3" }, 
              maxLength: { value: 6, message: "Max length is 6" } 
            })}
          />
          {errors.middleName && <p className='err-msg'>{errors.middleName.message}</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            className={errors.lastName ? 'input-error' : ""}
            type="text"
            {...register('lastName', {
              required: "Last name is required",
              minLength: { value: 3, message: "Min length is 3" }, 
              maxLength: { value: 6, message: "Max length is 6" } ,
              pattern: 
              {
                value: /^[A-Za-z]+$/i,
                message : "last name per not above rule"
              }
            })}
          />
          {errors.lastName && <p className='err-msg'>{errors.lastName.message}</p>}
        </div>

        <div>
          <input type="submit" disabled={isSubmitting} value={isSubmitting?"Submitting":"submit"}/>

        </div>
      </form>
    </div>
  );
}

export default App;

import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
function AddProduct() {
  return (
   <>

    <Helmet>
      <title>Page</title>
      <link rel="canonical" href="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" />
    </Helmet>



    <Formik
       initialValues={{ name: '',surname: '',age : '' }}
       validationSchema={Yup.object({
        name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           surname: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           age: Yup.number().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values)
         setTimeout(() => {
          async function AddProducts() {
            const res = await fetch("http://localhost:3000/products", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }, body: JSON.stringify(values),
            });
            const data = await res.json();
          }
           AddProducts();
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="surname">Surname</label>
         <Field name="surname" type="text" />
         <ErrorMessage name="surname" />
 
         <label htmlFor="age">Age</label>
         <Field name="age" type="text" />
         <ErrorMessage name="age" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   </>
  )
}

export default AddProduct
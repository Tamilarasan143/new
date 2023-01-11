import React from 'react'
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import { ErrorMessage } from "@hookform/error-message"

export default function EventPurchaseCreate() {
    type UserSubmitForm = {
        date: string;
        itemname: string;
        billnumber: string;
        amount: number;
      }
      const validationSchema = Yup.object().shape({
        date: Yup.string().required('Date is required'),
        itemname: Yup.string()
          .required('Item Name is required')
          .min(3, 'Item Name must be at least 6 characters')
          .max(10, 'Item Name must not exceed 20 characters'),
          billnumber: Yup.string()
          .required('Bill Number is required')
          .min(6, 'Bill Number must be at least 6 characters')
          .max(40, 'Bill Number must not exceed 40 characters'),
        amount: Yup.number()
          .required('Amount is required')
      });
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
      });
      const onSubmit = (data: UserSubmitForm) => {
        console.log("data", data)
        console.log(JSON.stringify(data, null, 2));
      }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1000",
            height: "100vh",
            backgroundColor: "white",
        }}>
            <Card style={{ width: '22rem' }}>
                <Card.Header>
                <Card.Title className="d-flex justify-content-center"><h3>AddEventpurchase</h3></Card.Title>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control type="date" placeholder=""
                            {...register('date')}
                            className={`form-control ${errors.date ? 'is-invalid' : ''}`} 
                            />
                           <ErrorMessage
                              errors={errors}
                                name="date"   
                                render={({ message }) => (
                                 <Form.Control.Feedback type="invalid">
                                   {message}
                                  </Form.Control.Feedback>
                                    )}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Item Name:</Form.Label>
                            <Form.Control type="name" placeholder="Name"
                             {...register('itemname')}
                             className={`form-control ${errors.itemname ? 'is-invalid' : ''}`} 
                            />
                            <ErrorMessage
                              errors={errors}
                                name="itemname"   
                                render={({ message }) => (
                                 <Form.Control.Feedback type="invalid">
                                   {message}
                                  </Form.Control.Feedback>
                                    )}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Bill Number:</Form.Label>
                            <Form.Control type="string" placeholder="Number"
                             {...register('billnumber')}
                             className={`form-control ${errors.billnumber ? 'is-invalid' : ''}`}  
                            />
                            <ErrorMessage
                              errors={errors}
                                name="billnumber"   
                                render={({ message }) => (
                                 <Form.Control.Feedback type="invalid">
                                   {message}
                                  </Form.Control.Feedback>
                                    )}
                                />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Amount:</Form.Label>
                            <Form.Control type="number" placeholder="Amount"  
                            {...register('amount')}
                             className={` ${errors.amount ? 'is-invalid' : ''}`}/>
                             <ErrorMessage
                              errors={errors}
                                name="amount"   
                                render={({ message }) => (
                                 <Form.Control.Feedback type="invalid">
                                   {message}
                                  </Form.Control.Feedback>
                                    )}
                                />
                        </Form.Group>
                    </Form>
                </Card.Body>
               <Card.Footer className=" m-0 d-flex justify-content-center">
                <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>Add</Button>
               </Card.Footer>
            </Card>
        </div>
    )
}

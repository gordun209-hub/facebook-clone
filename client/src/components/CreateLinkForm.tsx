import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useCreateLinkMutation } from '@/services/api'

const CreateLink: FC = () => {
  const navigation = useNavigate()
  const [createLink] = useCreateLinkMutation()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data: any) => {
    createLink({
      ...data
    }).then(() => {
      navigation('/')
    })
  }
  const initialValues = {
    url: '',
    description: '',
    country: '',
    title: ''
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='url'>image link</label>
          <input defaultValue={initialValues.url} {...register('url')} />
        </div>
        {errors.url && <p>pls give url</p>}

        <div>
          <label htmlFor='country'>country</label>
          <input
            defaultValue={initialValues.country}
            {...register('country', {
              validate: value => value.length > 3
            })}
          />
        </div>
        {errors.country && <p>pls give country</p>}

        <div>
          <label htmlFor='description'>description</label>
          <input
            defaultValue={initialValues.description}
            type='text'
            {...register('description')}
          />
        </div>

        <div>
          <label htmlFor='title'>title</label>
          <input
            defaultValue={initialValues.title}
            type='text'
            {...register('title', { validate: value => value.length > 3 })}
          />
        </div>

        <button type='submit'>Share link</button>
      </form>
      <style>
        {`
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 5px #ccc;
            background-color: #fff;
            font-size: 1.2rem;
            font-family: sans-serif;
            color: #333;

            text-align: center;
            box-sizing: border-box;
            outline: none;
            user-select: none;
          }
          form > div {
            margin: 10px 0;
          }
          form > div > label {
            display: block;
            margin: 0 0 5px;
          }
          form > div > input {
            width: 20vw;
            height: 100%;
             
             
            border: 1px solid #ccc;
            font-size: 1.2rem;
            font-family: sans-serif;
            color: #333;
            text-align: center;
            box-sizing: border-box;
            user-select: none;

            transition: all 0.3s ease-in-out;
            border-bottom: 1px solid #ccc;
          }
          form > div > input:focus {
            border-bottom: 1px solid #000;
          }
          form > div > input:focus + label {
            color: #000;
          }
          form > div > input:focus + label + p {
            color: #000;
          }
          form > div > p {
            color: #ccc;
          }
          form > button {
            padding: 20px;
            margin: 10px 0;
            width: 70%;
            height: 40px;
            border: none;
            outline: none;
            font-size: 1.2rem;
            font-family: sans-serif;
             

            color: #333;
            text-align: center;
            box-sizing: border-box;
            user-select: none;

            transition: all 0.3s ease-in-out;
            border-bottom: 1px solid #ccc;
          }
          form > button:hover {
            background-color: #ccc;
          }

        `}{' '}
      </style>
    </div>
  )
}

export default CreateLink

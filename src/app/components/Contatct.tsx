"use client"

import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"
import axios from 'axios';

export function Contact() {

    // BOTÃO LOADER
    const [formLoader, setFormLoader] = useState(false);

    // VALIDAÇÃO yup
    const schema = yup
        .object({
            name: yup.string().required('Campo obrigatório').min(3, 'O campo nome deve ter no mínimo 3 caracteres'),
            email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
            whatsapp: yup.string(),
            gender: yup.string().oneOf(['male', 'female'], 'Selecione um gênero').required('Campo obrigatório'),
            birthdate: yup.date().required('Campo obrigatório').nullable(),
            tshirtSize: yup.string().oneOf(['PP_M', 'P_M', 'M_M', 'G_M', 'GG_M', 'EG_M', 'PP_F', 'P_F', 'M_F', 'G_F', 'GG_F', 'EG_F'], 'Selecione um tamanho válido').required('Campo obrigatório'), // Adicionando validação para tamanho da camiseta
            race: yup.string().oneOf(['1.6k', '3k', '5k'], 'Selecione uma distância válida').required('Campo obrigatório'), // Adicionando validação para seleção da corrida
        })
        .required()

    // REACT-HOOK-FORM
    const {
        setValue,
        watch,
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    // MASK WHATSAPP
    const PhoneNumber = (value: String | undefined) => {
        if (!value) return ''

        return value.replace(/[\D]/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})(\d+?)/, '$1')
    }

    const phoneValue = watch("whatsapp")
    useEffect(() => {
        setValue("whatsapp", PhoneNumber(phoneValue))
    }, [phoneValue, setValue])

    // API
    const onSubmit = (data: any) => {
        setFormLoader(true)
        const whatsappFormated = data.whatsapp.replace(/[^0-9]/g, '');

        const FormatedData = {
            name: data.name,
            email: data.email,
            whatsapp: whatsappFormated,
            gender: data.gender,
            birthdate: data.birthdate,
            tshirtSize: data.tshirtSize, // Adicionando tamanho da camiseta aos dados formatados
            race: data.race, // Adicionando corrida aos dados formatados
        }

        axios.post('/', FormatedData)
            .then(() => {
                toast.success('Enviado com sucesso!');
                // alert(JSON.stringify(FormatedData, null, 2));
                reset();
                setFormLoader(false);
            })
            .catch(() => {
                toast.error('Houve um erro em sua tentativa, tente novamente mais tarde!');
                reset();
                setFormLoader(false);
            });
    }

    return (

        <div className=" flex flex-col justify-center items-center">

            <picture className='hidden md:block'>
                <img src="/img-form.png" alt="" className='' />
            </picture>
            <picture className='block md:hidden'>
                <img src="/img-form-mobile.png" alt="" className='' />
            </picture>

            <div id="contact" className='md:justify-between flex flex-col justify-items-center w-full md:gap-10 bg-neutral-100'>

                <div>
                    <div className="flex flex-col items-center justify-center">

                        <div className="p-3 lg:p-0 mr-2 sm:rounded-lg md:mt-10">
                            <h3 className="text-orange-500 text-2xl font-bold text-center">
                                Formulário de
                            </h3>
                            <h3 className="text-orange-500 text-5xl font-bold text-center">
                                Inscrição
                            </h3>
                            <p className="text-black text-center md:py-5 py-3 max-w-md font-medium">
                                Preencha corretamente todos os campos.
                                Após o envio, você receberá um e-mail de confirmação e orientações de participação.
                            </p>
                        </div>

                        <div className="px-6 flex flex-col justify-center gap-3 py-10 w-full max-w-xl">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div>
                                            <input
                                                className='peer border border-neutral-100 text-inborder-neutral-100 placeholder:text-inborder-neutral-100 focus:border-neutral-100 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'
                                                type="text" {...register("name")} placeholder='Nome' />
                                            {errors.name && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>
                                                {errors?.name?.message}</p>}
                                        </div>
                                    </li>
                                </ul>

                                {/* Opções de rádio para gênero */}
                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div className='flex items-center justify-between peer border bg-white border-neutral-100 text-inborder-neutral-100 placeholder:text-inborder-neutral-100 focus:border-neutral-100 min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'>
                                            <label className='block font-normal text-black'>Sexo</label>
                                            <div className='flex items-center'>
                                                <label className='mr-4'>
                                                    <input
                                                        type="radio"
                                                        value="male"
                                                        {...register("gender")}
                                                        className='mr-2'
                                                    />
                                                    Masculino
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        value="female"
                                                        {...register("gender")}
                                                        className='mr-2'
                                                    />
                                                    Feminino
                                                </label>
                                            </div>
                                            {errors.gender && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>
                                                {errors?.gender?.message}</p>}
                                        </div>
                                    </li>
                                </ul>

                                {/* Campo de data de nascimento */}
                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div>
                                            <label className='block font-normal text-sm text-black'>Data de Nascimento:</label>


                                            <input
                                                className='peer border border-neutral-100 text-inborder-neutral-100 placeholder:text-inborder-neutral-100 focus:border-neutral-100 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'
                                                type="date" {...register("birthdate")} placeholder='Data de Nascimento' />
                                            {errors.birthdate && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>
                                                {errors?.birthdate?.message}</p>}
                                        </div>
                                    </li>
                                </ul>

                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div>
                                            <input
                                                className='peer border border-neutral-100 text-inborder-neutral-100 placeholder:text-inborder-neutral-100 focus:border-neutral-100 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'
                                                type="text" {...register("whatsapp")} placeholder='Celular' />
                                        </div>
                                    </li>
                                </ul>

                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div>
                                            <input
                                                className='peer border border-neutral-100 text-inborder-neutral-100 placeholder:text-inborder-neutral-100 focus:border-neutral-100 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'
                                                type="email" {...register("email")} placeholder='E-mail' />
                                        </div>
                                        {errors.email && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>
                                            {errors?.email?.message}</p>}
                                    </li>
                                </ul>

                                {/* Seleção de corrida */}
                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div>
                                            <select
                                                className='peer border border-neutral-100 text-inborder-neutral-100 focus:border-neutral-100 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'
                                                {...register("race")}
                                            >
                                                <option value="">Selecione a distância</option>
                                                <option value="1.6k">1.6km</option>
                                                <option value="3k">3km</option>
                                                <option value="5k">5km</option>
                                            </select>
                                            {errors.race && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>
                                                {errors?.race?.message}</p>}
                                        </div>
                                    </li>
                                </ul>

                                {/* Seleção de tamanho da camiseta */}
                                <ul className='flex mb-4'>
                                    <li className='w-full'>
                                        <div>
                                            <select
                                                className='peer border border-neutral-100 text-inborder-neutral-100 focus:border-neutral-100 block min-h-[auto] w-full rounded-md py-2 px-3 outline-none shadow-md placeholder:text-black/50 text-black'
                                                {...register("tshirtSize")}
                                            >
                                                <option value="">Selecione o tamanho da camiseta</option>
                                                {/* Tamanhos Masculinos */}
                                                <optgroup label="Masculino">
                                                    <option value="PP_M">PP - Masculino</option>
                                                    <option value="P_M">P - Masculino</option>
                                                    <option value="M_M">M - Masculino</option>
                                                    <option value="G_M">G - Masculino</option>
                                                    <option value="GG_M">GG - Masculino</option>
                                                    <option value="EG_M">EG - Masculino</option>
                                                </optgroup>
                                                {/* Tamanhos Femininos */}
                                                <optgroup label="Feminino">
                                                    <option value="PP_F">PP - Feminino</option>
                                                    <option value="P_F">P - Feminino</option>
                                                    <option value="M_F">M - Feminino</option>
                                                    <option value="G_F">G - Feminino</option>
                                                    <option value="GG_F">GG - Feminino</option>
                                                    <option value="EG_F">EG - Feminino</option>
                                                </optgroup>
                                            </select>
                                            {errors.tshirtSize && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>
                                                {errors?.tshirtSize?.message}</p>}
                                        </div>
                                    </li>
                                </ul>

                                <ul className='flex pb-20'>
                                    <li className='flex w-full justify-end'>
                                        <button
                                            className='text-white flex items-center justify-center bg-blue-700 focus:ring-4 focus:outline-none rounded-full text-lg p-3 px-6 w-full lg:w-40 text-center disabled:cursor-not-allowed disabled:opacity-50'
                                            type='submit' disabled={!isValid}>
                                            {formLoader && <img src="/loader.svg" alt="Carregando" width={30} height={20} />}
                                            <span>ENVIAR</span>
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick
                rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="colored" />
        </div>
    );
}

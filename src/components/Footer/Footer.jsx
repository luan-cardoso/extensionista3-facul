import React from 'react'

const Footer = () => {
  return (
    <div className='h-[200px] grid grid-cols-2 grid-rows-1 gap-16 mt-10'>
        <div>
            <h2 
            className='font-sans font-medium text-2xl  mb-3 text-[#FF735C]'>
            Fique de olho! &#128680;
            </h2>
            <p className='font-sans font-normal text-lg text-justify'>
            Os supermercados realizam o chamado "Dia da Carne" e/ou "Dia de Frutas e Legumes". Essa é uma prática comum, especialmente no Brasil, para oferecer descontos em cortes de carne bovina, suína, de frango e outros produtos. Geralmente, esse dia ocorre semanalmente, confira ao lado.
            </p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 gap-0'>
            <span>
                Carrefour: <br/> 
                &#129385;: Não contém. <br/>
                &#129388;: Terça e quarta.
            </span> 
            <span>
                Atacadão Dia a Dia: <br/> 
                &#129385;: Terça. <br/>
                &#129388;: Quarta.
            </span>
            <span>
                Assaí Atacadista: <br/> 
                &#129385;: Quarta. <br/>
                &#129388;: Quarta.
            </span>
            <span>
                Pague Menos: <br/> 
                &#129385;: Quinta. <br/>
                &#129388;: Terça.
            </span>
            <span>
                Pão de açucar: <br/> 
                &#129385;: Quarta (Região). <br/>
                &#129388;: Terça.
            </span>
        </div>
    </div>
  )
}

export default Footer
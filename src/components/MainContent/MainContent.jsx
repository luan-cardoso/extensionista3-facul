import React from 'react'

const MainContent = () => {
  return (
    <div className='max-w-[1400px] h-fit grid grid-cols-2 grid-rows-1 gap-0 mb-12'>
        <div>
            <h2 
                className='font-sans font-medium text-3xl mt-10 mb-6 text-[#FF735C]'>
                TODOS À LUTA PELA ERRADICAÇÃO DA FOME.
            </h2>
            <p
                className='font-sans font-normal text-lg text-justify mr-10'>
                A erradicação da fome é um desafio global que exige ação coletiva. Estimular a conscientização e o engajamento de todos é essencial para garantir o direito básico à alimentação. Paralelamente, é necessário cobrar políticas públicas eficazes que promovam a segurança alimentar e incentivem práticas sustentáveis. A fome não é inevitável; é resultado de desigualdades que podemos corrigir juntos. Educação, solidariedade e responsabilidade social são pilares para transformar essa realidade. <br/><br/>
                <span style={{color:'#FF735C'}}>Cada gesto conta: </span> Evitar o desperdício de alimentos, doar excedentes e apoiar iniciativas comunitárias são formas práticas de fazer a diferença. 
                <br/><br/>
                Abaixo está reunido em um único lugar, de forma simples, redes de de supermercados perto de minha região que pesquisei e encontrei secções de ofertas. Claro, o objetivo principal continua sendo conscientizar o usuário.<span style={{color:'#FF735C'}}> Clique nos ícones abaixo para conferir as ofertas!</span> 
            </p>
        </div>

        <div className='object-cover'>
            <img 
                src="../src/assets/supermarket.jpg" 
                alt="supermarket" 
                className='w-full h-full object-contain'
            />
        </div>
    </div>
  )
}

export default MainContent
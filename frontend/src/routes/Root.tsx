import { Link } from 'react-router-dom'

import NutriBill from '../../public/BillVertical.png'

function Root() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] bg-emerald-50">
      <header className="mb-4 flex flex-wrap justify-center border-b border-gray-500 py-3"></header>
      <div className="mx-auto my-5 max-w-4xl text-center">
        <img
          className="mx-auto block aspect-square w-2/3 max-w-sm"
          src={NutriBill}
          alt="nutri bill"
        />
        <div className="mx-auto w-10/12 max-w-xl">
          <p className="mb-12 text-lg md:text-xl">
            Transforme sua vida por meio de uma nutrição inteligente e acessível
            a todos, com o poder da IA ao seu alcance. Nossa solução foi
            desenvolvida para atender às necessidades daqueles que não têm
            acesso a serviços especializados.
          </p>
          <Link to="/chat">
            <button
              type="button"
              className="rounded bg-emerald-800 px-4 py-2 text-lg text-white transition hover:scale-110 hover:bg-emerald-700 "
            >
              Comece agora!
            </button>
          </Link>
        </div>
      </div>
      <footer className="my-4 flex w-full flex-wrap items-center justify-center border-t border-gray-500 py-2 text-center">
        <span>&copy; 2023 NutriBill. Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}

export default Root

import { Link } from 'react-router-dom'

import NutriBill from '../../public/NutriBill.png'

function Root() {
  return (
    <>
      <header className="mb-4 flex flex-wrap justify-center border-b py-3"></header>
      <div className="mx-auto my-5 max-w-4xl text-center">
        <img
          className="mx-auto mb-4 block h-64"
          src={NutriBill}
          alt="nutri bill"
        />
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Transforme sua vida por meio de uma nutrição inteligente acessível a
            todos, com o poder da IA ao seu alcance. Nossa solução foi
            desenvolvida para atender às necessidades daqueles que não têm
            acesso a serviços especializados.
          </p>
          <div className="d-grid d-sm-flex justify-content-sm-center gap-2">
            <Link to="/chat">
              <button
                type="button"
                className="btn btn-success btn-lg gap-3 px-4"
              >
                Comece agora
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <footer className="d-flex justify-content-between align-items-center border-top my-4 flex-wrap py-3">
          footer bem bonito
        </footer>
      </div>
    </>
  )
}

export default Root

import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-wrap justify-between gap-x-4 gap-y-4 max-sm:mx-auto max-sm:max-w-md max-sm:justify-evenly',
      )}
    >
      <img
        alt="Codelco Chuquicamata"
        src="/clientes/codelco-chuquicamata.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Codelco Radomiro Tomic"
        src="/clientes/codelco-radomiro-tomic.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Codelco Ministro Hales"
        src="/clientes/codelco-ministro-hales.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Codelco Gabriela Mistral"
        src="/clientes/codelco-gabriela-mistral.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Codelco Salvador"
        src="/clientes/codelco-salvador.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Lundin Mining"
        src="/clientes/lundin-mining.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="El Abra"
        src="/clientes/el-abra.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Antofagasta Minerals"
        src="/clientes/antofagasta-minerals.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Eco Metales"
        src="/clientes/eco-metales.jpeg"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Municipalidad de Antofagasta"
        src="/clientes/municipalidad-antofagasta.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Municipalidad de Calama"
        src="/clientes/municipalidad-calama.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Municipalidad de Iquique"
        src="/clientes/municipalidad-iquique.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
      <img
        alt="Municipalidad de San Pedro de Atacama"
        src="/clientes/municipalidad-san-pedro.png"
        className="h-12 max-sm:mx-auto sm:h-16 lg:h-20"
      />
    </div>
  )
}

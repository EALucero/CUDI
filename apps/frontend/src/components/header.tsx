export function Header() {
    return (
        <header className="flex justify-between px-6 py-4 bg-amber-600 items-center">
            <h1 className="text-white font-bold text-xl">CUDI</h1>
            <div>
                <nav>
                    <ul className="flex space-x-4 text-white">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <section>
                <button className="bg-white text-amber-600 font-semibold px-4 py-2 rounded-lg hover:bg-amber-100">
                    Iniciar sesión
                </button>
            </section>
        </header>
    )
}
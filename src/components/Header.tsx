function Header() {
    return (
        <header
            className="flex
                        justify-center
                        items-center py-5 
                        text-white
                        bg-gradient-to-r from-teal-800/80 to-emerald-800/80
                        sm:rounded-3xl
                        mt-1
                        drop-shadow-2xl
        "
        >
            <h1 className="font-medium text-2xl">Todo App &#174;</h1>
        </header>
    );
}

export default Header;

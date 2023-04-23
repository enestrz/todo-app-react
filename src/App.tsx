import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <div className=" lg:container mx-auto min-h-screen flex flex-col">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <section className="bg-indigo-300">
            <Header />
            <div className="p-60 flex flex-center justify-center align-center">
                <div className="text-white border-2 max-h-fit max-w-fit bg-teal-500 p-8">
                    <div className=" flex flex-col flex-center justify-center align-center">
                        <p>
                            <b>A place too keep track of all your fresh spends.</b>
                        </p>
                        <div>
                            <div>
                                <h2>Sign in to track your expenses</h2>
                                <button className="btn" style={{ cursor: 'pointer' }} type="log-in" onClick=''></button>
                            </div>
                            <div>
                                <h2>Don't have an account? Sign up for free today!</h2>
                                <button className="btn" style={{ cursor: 'pointer' }} type="sign-up"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section>
    )
}
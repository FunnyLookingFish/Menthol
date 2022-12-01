
export default function Home(){
    return (
        <main>
            <h1>Menthol</h1>
            <hr />
            <p>
                <b>A place too keep track of all your fresh spends.</b>
            </p>
            <div>
                <div>
                    <h2>Sign in to track your expenses</h2>
                    <button className="btn" style={{ cursor:'pointer' }} type="log-in" onClick={}></button>
                </div>
                <div>
                    <h2>Don't have an account? Sign up for free today!</h2>
                    <button className="btn" style={{ cursor: 'pointer' }} type="sign-up"></button>
                </div>
            </div>
        </main>
    )
}
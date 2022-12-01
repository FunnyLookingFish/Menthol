import morgan from '../../assets/images/Morgan.jpg'
import jake from '../../assets/images/Jake.jpeg'
export default function AboutUs(){

    return (
        <section className="flex flex-col">
            <article className="flex w-full">
                <img className=' rounded-full' src={morgan} alt="Morgan Tolman" />
                <div>
                    <h2>Morgan Tolman</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis eligendi, atque libero ipsum eaque quisquam sed dolorum eum explicabo hic animi officiis, aliquam beatae tempora voluptatum saepe aperiam ducimus.</p>
                </div>
            </article>
            <article className="flex w-full">
                <img className=' rounded-full' src={jake} alt="Jake Schmidt" />
                <div>
                    <h2>Jake Schmidt</h2>
                    <p>I am a software developer in Arizona.</p>
                </div>
            </article>
            <article className="flex w-full">
                <img className=' rounded-full' src={morgan} alt="Morgan Tolman" />
                <div>
                    <h2>Morgan Tolman</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis eligendi, atque libero ipsum eaque quisquam sed dolorum eum explicabo hic animi officiis, aliquam beatae tempora voluptatum saepe aperiam ducimus.</p>
                </div>
            </article>
            <article className="flex w-full">
                <img className=' rounded-full' src={morgan} alt="Morgan Tolman" />
                <div>
                    <h2>Morgan Tolman</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis eligendi, atque libero ipsum eaque quisquam sed dolorum eum explicabo hic animi officiis, aliquam beatae tempora voluptatum saepe aperiam ducimus.</p>
                </div>
            </article>
            <article className="flex w-full">
                <img className=' rounded-full' src={morgan} alt="Morgan Tolman" />
                <div>
                    <h2>Morgan Tolman</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis eligendi, atque libero ipsum eaque quisquam sed dolorum eum explicabo hic animi officiis, aliquam beatae tempora voluptatum saepe aperiam ducimus.</p>
                </div>
            </article>
        </section>
    )
};
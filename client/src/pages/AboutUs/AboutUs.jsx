import morgan from '../../assets/images/Morgan.jpg';
import leo from '../../assets/images/leo.png'
import lu from '../../assets/images/lu.png'

export default function AboutUs(){

    return (
        <section className="flex flex-col">
            <article className="flex w-full">
                <img className=' rounded-full' src={morgan} alt="Morgan Tolman" />
                <div>
                    <h2>Morgan Tolman</h2>
                    <p>Hello I am a Full Stack Web Developer.</p>
                </div>
            </article>
            <article className="flex w-full">
                <img className=' rounded-full' src={leo} alt="Morgan Tolman" />
                <div>
                    <h2>Leo Roccaforte</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis eligendi, atque libero ipsum eaque quisquam sed dolorum eum explicabo hic animi officiis, aliquam beatae tempora voluptatum saepe aperiam ducimus.</p>
                </div>
            </article>
            <article className="flex w-full">
                <img className=' rounded-full' src={lu} alt="Morgan Tolman" />
                <div>
                    <h2>Lu Morales</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt facilis eligendi, atque libero ipsum eaque quisquam sed dolorum eum explicabo hic animi officiis, aliquam beatae tempora voluptatum saepe aperiam ducimus.</p>
                </div>
            </article>
        </section>
    )
};
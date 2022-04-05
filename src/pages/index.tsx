import Head from 'next/head'
import { Parallax, ParallaxLayer} from "@react-spring/parallax";
import styles from '/src/styles/styles.module.css'

export default function Home() {
    // const { user } = useAuth({ middleware: 'guest', redirectIfAuthenticated: false })

    const urlBg:string = "https://mineinabyss.com/assets/images/render/mia_render.jpg"

    const bg = [
        "https://www.firewatchgame.com/images/parallax/parallax0.png",
        "https://www.firewatchgame.com/images/parallax/parallax1.png",
        "https://www.firewatchgame.com/images/parallax/parallax2.png",
        "https://www.firewatchgame.com/images/parallax/parallax3.png",
        "https://www.firewatchgame.com/images/parallax/parallax4.png",
        "https://www.firewatchgame.com/images/parallax/parallax5.png",
        "https://www.firewatchgame.com/images/parallax/parallax6.png",
        "https://www.firewatchgame.com/images/parallax/parallax7.png",
        "https://www.firewatchgame.com/images/parallax/parallax8.png"
    ]
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <section id="hero" className="bg-center bg-fixed" style={{backgroundImage: `url(${urlBg})`}}>
                <div className="grid place-items-center h-screen">
                    <img className="h-64 w-auto" src="https://user-images.githubusercontent.com/16233018/116150394-4e6b2900-a6b1-11eb-8efb-ac5542c4d8d0.png"/>
                </div>
            </section>
            <section>
                {
                    bg.map((img) => (
                        <img src={img} />
                    ))
                }
            </section>
        </>
    )
}

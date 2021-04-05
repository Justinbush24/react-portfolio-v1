import React from "react"
import image from "../white-window.jpeg";

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="white-window"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1
                    className="text-6xl text-coolGray-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello, I'm Justin Bush.
                </h1>
            </section>
        </main>
    )
}
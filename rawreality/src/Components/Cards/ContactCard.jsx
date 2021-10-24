import React from "react";
import Card from "./Card";

const ContactCard = () => {
    return (
        <>
            <Card display={"flex"} margin={"5% 20%"}>
                {/* INICIO CONTENIDO DEL LADO IZQUIERDO */}

                <div id="ContactForm" className="text-start mx-5">
                    <div className="titulo mb-5">
                        <h2>¿Listo para contactarnos?</h2>
                    </div>
                    <div>
                        <p>
                            <i></i>
                            romgromero@gmail.com
                        </p>
                        <p>
                            <i></i>
                            <p>+54 9 11 51593906</p>
                        </p>
                        <p>
                            <i></i>
                            <a href="https://www.behance.net/rominaromero3">
                                https://www.behance.net/rominaromero3
                            </a>
                        </p>
                        <p>
                            <i></i>
                            <a href="https://www.linkedin.com/in/romina-romero-b64a7993/">
                                https://www.linkedin.com/in/romina-romero-b64a7993/
                            </a>
                        </p>
                        <p>
                            <i></i>
                            <a href="https://www.instagram.com/romina_gabriela_romero_colombo/">
                                https://www.instagram.com/romina_gabriela_romero_colombo/
                            </a>
                        </p>
                    </div>
                </div>
                {/* FIN CONTENIDO DEL LADO IZQUIERDO */}

                {/* INICIO CONTENIDO DEL LADO DERECHO */}
                <div>
                    <h3 className="mb-5">Déjanos tu mensaje.</h3>

                    <form name="contact-form" data-netliy="true" method="POST" id="form">
                        <input type="hidden" name="form-name" value="contact-form" />.
                        <div className="m-2">
                            <input
                                type="text"
                                name="nombre"
                                id="name"
                                placeholder="Nombre"
                                className="rounded w-100"
                                required
                            />
                        </div>
                        <div className="m-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="rounded w-100"
                                required
                            />
                        </div>
                        <div className="m-2">
                            <input
                                type="text"
                                name="asunto"
                                id="asunto"
                                placeholder="Asunto"
                                className="rounded w-100"
                                required
                            />
                        </div>
                        <div className="m-2">
                            <textarea
                                rows="5"
                                name="message"
                                id="mensaje"
                                placeholder="Mensaje"
                                className="rounded bg-primary w-100"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button className="btn btn-primary rounded w-100" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
                {/* FIN CONTENIDO DEL LADO DERECHO */}
            </Card>
        </>
    );
};

export default ContactCard;
